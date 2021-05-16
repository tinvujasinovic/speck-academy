import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Section from '../../components/Section/Section';
import Load from '../../components/Load/Load';
import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit';
import {
    Form,
    FormRow,
    InputLabel,
    InputText,
    InputError,
    SuccessMessage
} from '../../lib/style/generalStyles';
import { getAllUsers } from '../../api/user';
import { loginUser } from '../../api/login';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [isRequestFinished, setIsRequestFinished] = useState(false);
    const { setIsAdmin, setIsLoggedIn } = useContext(AuthContext);

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
        onSubmit: async (values, { resetForm }) => {
            setIsLoading(true);
            setIsError(false);
            setIsRequestFinished(false)

            try {
                const response = await loginUser(values);
                const users = await getAllUsers(response.token);
                const isAdmin = users.find(x => x.email === values.email).isAdmin;

                setIsAdmin(isAdmin);
                setIsLoggedIn(true);

                localStorage.setItem('authToken', response.token);
                localStorage.setItem('isAdmin', isAdmin);

                setTimeout(() => {
                    setIsRequestFinished(false);
                }, 4000);

                setSuccessMessage("You are now logged in!");
                resetForm();
            }
            catch {
                setIsError(true)
                setSuccessMessage('An error ocurred while registing user!')
            }
            finally {
                setIsLoading(false);
                setIsRequestFinished(true);
            }
        }
    })

    return (
        <>
            <h1>Register</h1>
            <Section withoutTopPadding={false} title='Login'>
                {isRequestFinished && <SuccessMessage isError={isError}>{successMessage}</SuccessMessage>}
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
                        <ButtonSubmit text='Login' />
                    </Form>
                    : <Load />}
            </Section>
        </>
    )
}

export default Login;
