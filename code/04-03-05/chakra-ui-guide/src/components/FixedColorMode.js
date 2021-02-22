import {
  LightMode,
  DarkMode,
  Button,
  useColorMode,
  HStack,
} from '@chakra-ui/react'

const FixedColorMode = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <HStack>
      <LightMode>
        <Button size="sm" colorScheme="blue">
          Light Mode Always
        </Button>
      </LightMode>

      <DarkMode>
        <Button size="sm" colorScheme="blue">
          Dark Mode Always
        </Button>
      </DarkMode>

      <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </HStack>
  )
}

export default FixedColorMode
