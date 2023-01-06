import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { AiOutlinePlus } from "react-icons/ai";
import { BsCartCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getCartProductsOfUser } from '../redux/actions/cartAction'
import { getAllProducts } from '../redux/actions/productAction'

export default function Product() {
    const dispatch = useDispatch()
    const { Products } = useSelector(state => state.products)
    const { myCart, added } = useSelector(state => state.cartProducts)
    const { login } = useSelector(state => state.allUsers)
    useEffect(() => {
        dispatch(getAllProducts())
        dispatch(getCartProductsOfUser())
    }, [added])

    return (
        <>
            <Container>
                <Row className='my-3'>
                    {Products && Products.map(product => <Col lg={{ span: 3 }} md={{ span: 6 }} className='mt-3'>
                        <Card>
                            <Card.Body className='text-center'>
                                <Image src={product.imageUrl} width={200} height={200} />
                                <p className='m-0'>{product.name}</p>
                                <h4 className=''>₹{product.price}</h4>
                                <Button className='bg-dark text-white border-0 px-4 rounded-0 py-2' onClick={() => { dispatch(addToCart({ ...product, userId: login.id })) }} disabled={myCart.filter(item => item._id === product._id).length === 1 ? true : false}>{myCart.filter(item => item._id === product._id).length === 1 ? <><BsCartCheckFill /> Added</> : <><AiOutlinePlus /> Add To Cart</>}</Button>
                            </Card.Body>
                        </Card>
                    </Col>)}
                </Row>
            </Container>
        </>
    )
}
