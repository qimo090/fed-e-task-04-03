import { useField } from 'formik'
import styled from '@emotion/styled'

const FormItemContainer = styled.div`
  position: relative;
  border-radius: 0 0 4px 4px;

  &:first-of-type {
    input {
      border-radius: 4px 4px 0 0;
    }
  }

  &:last-of-type {
    input {
      border-radius: 0 0 4px 4px;
      border-bottom: 1px solid #c8c8c8;
    }
  }

`

const FormItem = styled.div`
  margin-bottom: 0;
  position: relative;
  width: 100%;

  & > input {
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    background-color: hsla(0, 0%, 71%, .1);
    vertical-align: middle;

    border-bottom: none;
  }

  & > i {
    position: absolute;
    top: 16px;
    left: 10px;
    font-size: 18px;
    color: #969696;
    width: 18px;
    height: 18px;

    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
  }
`

const ErrorMsg = styled.div`
  position: absolute;
  right: 10px;
  top: 16px;
  color: #f40;
  //background-color: hsla(0, 0%, 71%, .1);
  //border-left: 1px solid #c8c8c8;
  //border-right: 1px solid #c8c8c8;
`

function MyInputField ({ icon, ...props }) {
  const [field, meta] = useField(props)
  return (
    <FormItemContainer>
      <FormItem>
        <input {...field} {...props} autoComplete="false"/>
        {icon && <i style={{ backgroundImage: `url('${icon}')` }}/>}
      </FormItem>
      {meta.touched && meta.error ? <ErrorMsg>{meta.error}</ErrorMsg> : null}
    </FormItemContainer>
  )
}

export default MyInputField
