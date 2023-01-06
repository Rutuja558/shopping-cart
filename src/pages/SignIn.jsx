import { Formik } from 'formik'
import * as yup from 'yup'
import React, { useEffect } from 'react'
import { Button, Card, Col, Form, FormControl, FormGroup, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handleLoginAction } from '../redux/actions/userAction'

export default function SignIn() {
    const { error, login } = useSelector(state => state.allUsers)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const schema = yup.object().shape({
        email: yup.string().required("Please Enter Your Email"),
        password: yup.string().required("Please Enter Your Password")
    });
    useEffect(() => {
        if (login) { navigate("/products") }
    }, [login])

    return (
        <Row className="mt-5">
            <Col lg={{ span: 4, offset: 4 }} sm={{ span: 10, offset: 1 }} xs={{ span: 12 }} className="mt-3">
                <Card>
                    <Card.Body className="px-5 pt-3 border-0 rounded-0">
                        <h3 className="text-center mb-4">Sign In</h3>
                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            validationSchema={schema}
                            onSubmit={loginDetails => {
                                dispatch(handleLoginAction(loginDetails))
                            }}
                        >{({
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            values,
                            errors,
                            touched
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <FormControl className="form-control mt-2 py-2" placeholder="Email Id" type="text" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} isInvalid={!!errors.email && !!touched.email}></FormControl>
                                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                </FormGroup>
                                <FormGroup>
                                    <FormControl className="form-control mt-2 py-2" placeholder="password" type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} isInvalid={!!errors.password && !!touched.password}></FormControl>
                                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                </FormGroup>
                                {error && <p className='text-danger mt-2'>Invalid email or password</p>}
                                <Button type="submit" className="w-100 py-2 my-3" variant='dark' disabled={!errors.firstName && !errors.lastName && !errors.email && !errors.password && !errors.confirmPassword ? false : true} >Submit</Button>
                            </Form>
                        )}
                        </Formik>
                        <p className='text-center'>Don't have an acount? <Link to='/' className='text-dark fw-semibold'>Sign Up</Link>
                        </p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    )
}

