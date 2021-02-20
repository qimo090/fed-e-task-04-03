import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormikYup = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    // validate: values => {
    //   const errors = {}
    //   if (!values.username) {
    //     errors.username = '请输入用户名'
    //   } else if (values.username.length < 6) {
    //     errors.username = '用户名长度不能小于6'
    //   }
    //   if (values.password.length < 6) {
    //     errors.password = '密码长度不能小于6'
    //   }
    //   return errors
    // },
    validationSchema: Yup.object({
      username: Yup.string().max(15, '用户名的长度不能大于15').required('请输入用户名'),
      password: Yup.string().min(6, '密码的长度不能小于6').required('请输入密码'),
    }),
    onSubmit: values => {
      console.log(values)
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="username"
        {...formik.getFieldProps('username')}
      />
      <div>
        {formik.touched.username && formik.errors.username ?
          <div>{formik.errors.username}</div> : null}
      </div>
      <input
        type="password"
        name="password"
        {...formik.getFieldProps('password')}
      />
      <div>
        {formik.touched.password && formik.errors.password ?
          <div>{formik.errors.password}</div> : null}
      </div>
      <input type="submit"/>
    </form>
  )
}

export default FormikYup
