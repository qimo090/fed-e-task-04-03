import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

// function HooksEffect (props) {
//   const [count, setCount] = useState(0)
//   // 组件挂载完成之后执行，组件数据更新后执行
//   // useEffect(() => {
//   //   console.log('123')
//   // })
//
//   // 组件挂载完成之后执行
//   // useEffect(() => {
//   //   console.log('123')
//   // }, [])
//
//   // 组件被卸载之前执行
//   // useEffect(() => {
//   //   return () => {
//   //     console.log('组件卸载')
//   //   }
//   // })
//
//   return (
//     <div>
//       <h4>HooksEffect</h4>
//       <span>{count}</span>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <button onClick={() => ReactDOM.unmountComponentAtNode(
//         document.getElementById('root'))}>卸载组件
//       </button>
//     </div>
//   )
// }

// function HooksEffect () {
//   const onScroll = () => {
//     console.log('页面滚动了')
//   }
//   useEffect(() => {
//     window.addEventListener('scroll', onScroll)
//     return () => {
//       window.removeEventListener('scroll', onScroll)
//     }
//   }, [])
//
//   const [count, setCount] = useState(0)
//
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount(count => {
//         document.title = count + 1
//         return count + 1
//       })
//     }, 1000)
//     return () => {
//       clearInterval(timer)
//     }
//   }, [])
//   return (
//     <div>
//       <h4>HooksEffect</h4>
//       <span>{count}</span>
//       <button onClick={() => ReactDOM.unmountComponentAtNode(
//         document.getElementById('root'))}>Unmount
//       </button>
//     </div>
//   )
// }

function HooksEffect () {
  useEffect(() => {
    (async () => {
      const result = await getData()
      console.log('result =>', result)
    })()
  }, [])
  return (
    <div>
      <h4>HooksEffect</h4>
    </div>
  )
}

function getData () {
  return new Promise(resolve => {
    resolve('hello')
  })
}

export default HooksEffect
