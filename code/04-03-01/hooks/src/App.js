import React from 'react'
import ReactDOM from 'react-dom'

let state = []
let setters = []
let stateIndex = 0

function createSetter (index) {
  return function (newState) {
    state[index] = newState
    render()
  }
}

function useState (initialState) {
  state[stateIndex] = state[stateIndex] || initialState
  setters.push(createSetter(stateIndex))
  let value = state[stateIndex]
  let setter = setters[stateIndex]
  stateIndex++
  return [value, setter]
}

function render () {
  stateIndex = 0
  effectIndex = 0
  ReactDOM.render(<App/>, document.getElementById('root'))
}

// 上一次的依赖值
let prevDepsAry = []
let effectIndex = 0

function useEffect (callback, depsAry) {
  // 判断 callback 是不是函数
  if (Object.prototype.toString.call(callback) !== '[object Function]') {
    throw new Error('useEffect 第一个参数必须是函数')
  }
  // 判断 depsAry 有没有被传递
  if (typeof depsAry === 'undefined') {
    // 没有传递
    callback()
  } else {
    // 判断 depsAry 是不是数组
    if (Object.prototype.toString.call(depsAry) !== '[object Array]') {
      throw new Error('useEffect 的第二个参数必须是数组')
    }
    let prevDeps = prevDepsAry[effectIndex]
    let hasChanged = prevDeps ? depsAry.every(
      (dep, index) => dep === prevDeps[index]) === false : true

    if (hasChanged) {
      callback()
    }
    prevDepsAry[effectIndex] = depsAry
    effectIndex++
  }
}

function useReducer (reducer, initialState) {
  const [state, setState] = useState(initialState)

  const dispatch = (action) => {
    const newState = reducer(state, action)
    setState(newState)
  }

  return [state, dispatch]
}

function reducer (state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}

function App (props) {
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      <span> {count} </span>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
    </div>
  )
}

export default App
