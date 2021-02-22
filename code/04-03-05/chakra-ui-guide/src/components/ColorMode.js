import { Box, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('tomato', 'skyblue')
  return (
    <Box bgColor={bgColor}>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Box>
  )
}

export default ColorMode
