import * as React from 'react'
// 1. import `ChakraProvider` component
import { ChakraProvider, Text } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Text fontSize='6xl' textAlign={"center"} >Landing Page</Text>
    </ChakraProvider>
  )
}

export default App;
