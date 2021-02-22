import LoginOrSignIn from '../components/LoginOrSignIn'
import styled from '@emotion/styled'
import logo from '../assets/logo.png'

const Container = styled.div`
  display: flex;
  align-items: center;

  text-align: center;
  font-size: 14px;
  min-width: 900px;
  height: 100vh;
  background-color: #f1f1f1;
  position: relative;
`

const Logo = styled.div`
  position: absolute;
  top: 56px;
  margin-left: 50px;

  & > a img {
    width: 100px;
  }
`

const Box = styled.div`
  display: flex;
  align-items: center;

  width: 400px;
  height: 100%;
  margin: 0 auto;
`

const SignIn = () => (
  <Container>
    <Logo>
      <a href="/">
        <img src={logo} alt="logo"/>
      </a>
    </Logo>
    <Box>
      <LoginOrSignIn/>
    </Box>
  </Container>
)

export default SignIn
