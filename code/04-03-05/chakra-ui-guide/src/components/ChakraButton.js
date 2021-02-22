import { chakra } from '@chakra-ui/react'

const LaGouButton = chakra('button', {
  baseStyle: {
    borderRadius: 'lg',
  },
})

const ChakraButton = () => (
  <LaGouButton bgColor="blue.500" color="white">button</LaGouButton>
)

export default ChakraButton
