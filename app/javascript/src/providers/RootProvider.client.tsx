import { Provider as ChakraUiProvider } from '../ui/provider'
import {ReactNode} from "react";

function RootProvider ({children}: {children: ReactNode}) {
    return <ChakraUiProvider>
        {children}
    </ChakraUiProvider>
}

export default RootProvider