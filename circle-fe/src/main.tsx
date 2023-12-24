import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider }  from 'react-redux'
import rootReducer from './store/rootReducer.ts'
import App from './App.tsx'
import { configureStore } from '@reduxjs/toolkit'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const client = new QueryClient()

const store = configureStore({
  reducer: rootReducer
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
        <Provider store={store}>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
