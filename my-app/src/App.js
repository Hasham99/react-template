import * as React from 'react'
// 1. import `ChakraProvider` component
import { ChakraProvider, Text, Progress } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Progress size='lg' isIndeterminate />
      <Text fontSize='6xl' textAlign={"center"} >Landing Page</Text>
      <Progress size='lg' isIndeterminate />
    </ChakraProvider>
  )
}

export default App;
