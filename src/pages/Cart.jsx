import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, FormGroup, Image, Row } from 'react-bootstrap'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCartProductsOfUser, removeFromCart } from '../redux/actions/cartAction'

export default function Cart() {
    const [toggle, setToggle] = useState(false)
    const { myCart, deleted } = useSelector(state => state.cartProducts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCartProductsOfUser())
    }, [toggle, deleted])
    return (
        <Container className='mt-5'>
            <Row>
                <Col lg={{ span: 12 }} className='text-center mb-4 text-dark'><h2>Shopping Bag</h2></Col>
            </Row>
            <Row>
                <Col lg={{ span: 6, offset: 1 }}>
                    {/* {JSON.stringify(myCart)} */}
                    <Card className='rounded-0 alert alert-secondary'>
                        <Card.Body >
                            <p> <Link to='/products' className='text-decoration-none text-dark'><AiOutlineArrowLeft />Continue Shopping</Link></p>

                            {myCart.length !== 0
                                ? <> {myCart.map(product => <div className='d-flex justify-content-around align-items-center bg-white border rounded-3 py-3 mt-2'>
                                    <Image src={product.imageUrl} width={120} height={100} />
                                    <h4>₹{product.price}</h4>
                                    <button className='btn btn-outline-danger' onClick={() => { dispatch(removeFromCart(product.id)) }}>Remove</button>
                                </div>)}
                                </>
                                : <h3>YOUR SHOPPING BAG IS EMPTY!</h3>}
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={{ span: 4 }}>
                    <Card className='rounded-0 alert alert-secondary px-3 py-3'>
                        <Card.Body>
                            <FormGroup className="mb-3">
                                <Form.Label className='text-dark mb-0 fs-6'>Add a discount code</Form.Label>
                                <div className="d-flex align-items-center gap-2 mt-0" >
                                    <Form.Control className='w-75 me-0 rounded-0 pt-2 bg-white' />
                                    <Button className='bg-dark text-white px-4 rounded-0 py-2 mt-4 border-0 mb-4'>Add</Button>
                                </div>
                            </FormGroup>
                            {myCart.map(item => <div className='d-flex justify-content-between'>
                                <p>{item.name}</p>
                                <p className='fw-bold'>₹ {item.price}</p>
                            </div>)}

                            <p className='my-3 border-dark border-bottom border-2'></p>
                            <div className="d-flex justify-content-between total">
                                <h5 className='text-dark'>Total</h5>
                                <h5>₹ {myCart.map(item => item.price).reduce((total, cuVal) => total += cuVal, 0)}</h5>
                            </div>
                            <Button className='w-100 btn-dark px-4 rounded-0 py-2 mt-4 border-0 mb-4'>Continue to checkout</Button>
                            <p className='fs-7'>Prices and delivery costs are not confirmed until you've reached the checkout.</p>
                            <p className='fs-7'>30 days withdrawal and free returns.</p>
                            <p className='fs-7'>Customers would receive an email notifications regarding deliveries on the registered email address</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
