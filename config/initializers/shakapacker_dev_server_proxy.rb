module Shakapacker
  class DevServerProxy < Rack::Proxy
    def perform_request(env)
      if env["PATH_INFO"].start_with?("/#{Shakapacker.config.public_output_path}/")
        super
      else
        @app.call(env)
      end
    rescue Errno::ECONNREFUSED
      @app.call(env)
    end
  end
end