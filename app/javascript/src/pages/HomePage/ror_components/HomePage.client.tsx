import React, { useState } from 'react';
import RootProvider from "../../../providers/RootProvider.client";


function HomePage() {
    return (<RootProvider><div>home page</div></RootProvider>)
}

export default HomePage