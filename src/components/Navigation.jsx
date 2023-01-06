import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { handleLogoutAction } from '../redux/actions/userAction'

export default function Navigation() {
    const { login } = useSelector(state => state.allUsers)
    const { myCart } = useSelector(state => state.cartProducts)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container >

                <Link to='/' className='navbar-brand'>Cart</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {login
                            ? <>
                                <Link to='/cart' className='nav-link text-white position-relative mx-2'><BsCart4 size={"1.8rem"} className="" /><Badge bg='danger' className='position-absolute top-0 start-75 translate-middle rounded-circle'> {myCart.length}</Badge></Link>
                                <div class="dropdown">
                                    <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                        {login.firstName}
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li className=''><button className='btn btn-danger' onClick={e => { dispatch(handleLogoutAction()); navigate('/login') }}>Logout</button></li>
                                    </ul>
                                </div>
                            </>
                            : <Link to='/login' className='nav-link text-white'>Sign in</Link>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
