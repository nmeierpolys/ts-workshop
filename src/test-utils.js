import React from 'react'
import {render as rtlRender, RenderOptions} from '@testing-library/react'
import { ChakraProvider } from "@chakra-ui/react";


const Provider = ({children}) => {
    return (
        <ChakraProvider>
            {children}
        </ChakraProvider>
    )
}

const render = (ui, options) => (rtlRender(ui, {wrapper: Provider, ...options}));

export * from '@testing-library/react'
export { render }