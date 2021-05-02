import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Section from '../../components/Section/Section';
import {
    
    Form,
    FormRow,
    CheckboxWrapper,
    InputLabel,
    InputText,
    InputCheckbox,
    InputError,
    ButtonSubmit
} from '../../lib/style/generalStyles';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters long')
                .required('Password is required'),
         
        }),
        onSubmit: values => {
            setIsLoading(true);

            setTimeout(() => {
                setIsLoading(false);
                alert(JSON.stringify(values));
            }, 1000);
        }
    });

    return (
        <>
            <h1>Register</h1>
            <Section withoutTopPadding={false}>
                {!isLoading
                    ?
                    <Form onSubmit={formik.handleSubmit}>
                        <FormRow>
                            <InputLabel htmlFor='email'>Email</InputLabel>
                            <InputText id='email' type='text' {...formik.getFieldProps('email')} />
                            {formik.touched.email && formik.errors.email
                                ? <InputError>{formik.errors.email}</InputError>
                                : null}
                        </FormRow>
                        <FormRow>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <InputText id='password' type='password' {...formik.getFieldProps('password')} />
                            {formik.touched.password && formik.errors.password
                                ? <InputError>{formik.errors.password}</InputError>
                                : null}
                        </FormRow>   
                        
                        <button type="submit">submit</button>                   
                    </Form>
                    : <p>loader</p>}
            </Section>
        </>
    )
}

export default Login;