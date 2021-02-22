import { useState } from 'react'
import { Form as FormikForm, Formik } from 'formik'
import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import * as Yup from 'yup'
import MyInputField from './MyInputField'

import iconPhone from '../assets/phone.svg'
import iconUser from '../assets/user.svg'
import iconPassword from '../assets/password.svg'
import { login, signIn } from '../api/loginOrSignIn'

const buttonStyle = css`
  margin-top: 20px;
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  outline: none;
  display: block;
  clear: both;
`

const rolling = keyframes`
  0% {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(1turn)
  }
`

const SignInButton = styled.button`
  ${buttonStyle};
  background: #3194d0;

  &:hover {
    background: #187cb7;
  }
`

const Circle = styled.span`
  position: relative;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-top: -4px;
  margin-right: 2px;
  display: inline-block;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
    border-radius: 10px;
    border: 2px solid #fff;
    border-bottom-color: transparent;
    vertical-align: middle;
    animation: ${rolling} .8s infinite linear;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
`

const LoginButton = styled.button`
  ${buttonStyle};
  background: #42c02e;

  &:hover {
    background: #3db922;
  }
`

/**
 * 登录表单
 * @param {boolean} isLogin - 当前是登录还是注册
 */
const Form = ({ isLogin }) => {
  return isLogin ? (
    <LoginForm/>
  ) : (
    <SignInForm/>
  )
}

const LoginForm = () => {
  const [loading, setLoading] = useState(false)
  const initialValues = {
    email: '',
    password: '',
  }
  const handleSubmit = async (values) => {
    setLoading(true)
    try {
      const { user } = await login(values)
      if (user) {
        alert('登录成功')
      }
    } catch (e) {
      for (let key in e.response.data.errors) {
        alert(key + ' ' + e.response.data.errors[key][0])
      }
    } finally {
      setLoading(false)
    }
  }
  const schema = Yup.object({
    email: Yup.string()
      .trim()
      .email('邮箱格式不对')
      .required('邮箱不能为空'),
    password: Yup.string()
      .trim()
      .required('密码不能为空'),
  })
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormikForm>
        <MyInputField
          type="text"
          name="email"
          placeholder="邮箱"
          icon={iconUser}
        />
        <MyInputField
          type="password"
          name="password"
          placeholder="密码"
          icon={iconPassword}
        />
        <SignInButton type="submit" disabled={loading}>{loading
          ? <Circle/>
          : null} 登录</SignInButton>
      </FormikForm>
    </Formik>
  )
}

const SignInForm = () => {
  const [loading, setLoading] = useState(false)

  const initialValues = {
    username: '',
    email: '',
    password: '',
  }
  const handleSubmit = async (values) => {
    setLoading(true)

    try {
      const { user } = await signIn(values)
      if (user) {
        alert('注册成功')
      }
    } catch (e) {
      for (let key in e.response.data.errors) {
        alert(key + ' ' + e.response.data.errors[key][0])
      }
    } finally {
      setLoading(false)
    }
  }
  const schema = Yup.object({
    username: Yup.string()
      .trim()
      .max(20, '昵称长度不超过20')
      .required('昵称不能为空'),
    email: Yup.string()
      .trim()
      .email('邮箱格式不对')
      .required('邮箱不能为空'),
    password: Yup.string()
      .trim()
      .required('密码不能为空'),
  })
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormikForm>
        <MyInputField
          type="text"
          name="username"
          placeholder="你的昵称"
          icon={iconUser}
        />
        <MyInputField
          type="text"
          name="email"
          placeholder="邮箱"
          icon={iconPhone}
        />
        <MyInputField
          type="password"
          name="password"
          placeholder="设置密码"
          icon={iconPassword}
        />
        <LoginButton type="submit" disabled={loading}>{loading
          ? <Circle/>
          : null} 注册</LoginButton>
      </FormikForm>
    </Formik>
  )
}

export default Form
