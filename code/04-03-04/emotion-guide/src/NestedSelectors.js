import styled from '@emotion/styled'

const Container = styled.div`
  width: 200px;
  height: 200px;
  background: skyblue;
  color: pink;
  
  &:hover {
    background: pink;
  }
  & > span {
    color: yellow;
  }
`

const NestedSelectors = () => {
  return (
    <Container>
      Container
      <span>Span</span>
    </Container>
  )
}

export default NestedSelectors
