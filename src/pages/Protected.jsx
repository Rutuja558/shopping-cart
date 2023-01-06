import React from 'react'
import { Alert, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Protected({ element }) {
    const { login } = useSelector(state => state.allUsers)
    return !login
        ? <Row>
            <Col lg={{ span: 6, offset: 3 }}>
                <Alert variant='danger' className='mt-5'>
                    <h2>Sorry! , you are not allowed to access this page before Sign in</h2>
                    <Link to='/login' className='text-dark'>Sign in here</Link>
                </Alert>
            </Col>
        </Row>
        : element
}
