import React from 'react'
import { useFormik } from 'formik'

const Formik01 = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate: values => {
      const errors = {}
      if (!values.username) {
        errors.username = '请输入用户名'
      } else if (values.username.length < 6) {
        errors.username = '用户名长度不能小于6'
      }
      if (values.password.length < 6) {
        errors.password = '密码长度不能小于6'
      }
      return errors
    },
    onSubmit: values => {
      console.log(values)
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <div>
        {formik.touched.username && formik.errors.username ?
          <div>{formik.errors.username}</div> : null}
      </div>
      <input
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <div>
        {formik.touched.password && formik.errors.password ?
          <div>{formik.errors.password}</div> : null}
      </div>
      <input type="submit"/>
    </form>
  )
}

export default Formik01
