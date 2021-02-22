import styled from '@emotion/styled'

const Button = styled.button`
  color: red;
`

const As = () => (
  <Button as="a" href="baidu.com">Button</Button>
)

export default As
