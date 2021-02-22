import styled from '@emotion/styled'

const Child = styled.div`
  color: red;
`

// 字符串样式写法
// const Parent = styled.div`
//   ${Child} {
//     color: green;
//   }
// `

// 对象样式写法
const Parent = styled.div({
  [Child]: {
    color: 'yellow',
  },
})

const StyledCmp = () => (
  <div>
    <Child>Child</Child>
    <Parent>
      <Child>Parent - Child</Child>
    </Parent>
  </div>
)

export default StyledCmp
