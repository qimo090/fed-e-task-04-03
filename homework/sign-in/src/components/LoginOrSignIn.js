import styled from '@emotion/styled'
import Form from './Form'
import { useState } from 'react'

const Container = styled.div`
  float: right;
  width: 400px;
  margin: 0 auto;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgb(0 0 0 / 10%);
  vertical-align: middle;
  display: inline-block;

  transform: translateY(-10%);
`

const Title = styled.h4`
  margin: 0 auto 50px;
  padding: 10px;
  font-weight: 400;
  color: #969696;

  & > a {
    padding: 10px;
    color: #969696;
  }

  b {
    padding: 10px;
  }

  .active {
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
  }
`

const LoginOrSignIn = () => {
  // 当前是登录还是注册
  const [isLogin, setIsLogin] = useState(true)
  const handleClick = (event, flag) => {
    event.preventDefault()
    setIsLogin(flag)
  }

  return (
    <Container>
      <Title>
        <a
          href="/"
          className={isLogin ? 'active' : ''}
          onClick={(event) => handleClick(event, true)}
        >登录</a>
        <b>·</b>
        <a
          href="/"
          className={!isLogin ? 'active' : ''}
          onClick={(event) => handleClick(event, false)}
        >注册</a>
      </Title>

      <Form
        isLogin={isLogin}
      />
    </Container>
  )
}

export default LoginOrSignIn
