import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/useAuth';
import Button from '../common/Button';
import Input from '../common/Input';
import ReCAPTCHA from 'react-google-recaptcha'; // Import ReCAPTCHA component

const LoginForm = () => {
  const { loginUser } = useAuth();
  const [error, setError] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const RECAPTCHA_SITE_KEY = '6LdHSGcqAAAAAEeSQYmUcxYceoZh7Jv6QTFl-j_1'; // Your reCAPTCHA site key

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        await loginUser(values.email, values.password, captchaToken);
      } catch (err) {
        setError(err.message || 'An error occurred during login');
      }
    },
  });

  const onCaptchaChange = (value) => {
    setCaptchaToken(value);
  };

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <Input
        name="email"
        type="email"
        placeholder="Email"
        {...formik.getFieldProps('email')}
        error={formik.touched.email && formik.errors.email}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        {...formik.getFieldProps('password')}
        error={formik.touched.password && formik.errors.password}
      />
      <ReCAPTCHA
        sitekey={RECAPTCHA_SITE_KEY}
        onChange={onCaptchaChange}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit" disabled={formik.isSubmitting || !captchaToken}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
