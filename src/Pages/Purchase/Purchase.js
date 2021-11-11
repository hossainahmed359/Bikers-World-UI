import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import UserInfo from './UserInfo/UserInfo';

const Purchase = () => {
    const { product_id } = useParams();
    const { user } = useAuth({})

    // Set Load Data in the state
    const [singleProduct, setSingleProduct] = useState({})

    // Get Single Product Details
    useEffect(() => {
        fetch(`http://localhost:5000/signleProduct/${product_id}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data))
    }, []);



    return (
        <div >
            <Navigation></Navigation>
            <div className="my-5">
                <Container>
                    <Row xs={1} md={2} className="d-flex align-items-center" >
                        <Col sm={12} md={6} lg={4} className="">
                            <Card className="border-0 d-flex align-item-center">
                                <Card.Img variant="top" src={singleProduct.image} />
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={8}>
                            <Col lg={12}>

                            </Col>
                            <Col className="mx-auto" lg={10}>
                                <Card className="border-0">

                                    <Card.Body >
                                        <Card.Title className="fs-1">{singleProduct.name}</Card.Title>
                                        <div className="text-start">
                                            <Card.Text className="fs-2" style={{ color: '#E52727 ' }}>${singleProduct.price}</Card.Text>
                                            <Card.Text className="" style={{ fontFamily: "'roboto", textAlign: 'justify' }}>
                                                {singleProduct.description}
                                            </Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <UserInfo
                                    user={user}
                                    singleProduct={singleProduct}
                                ></UserInfo>
                            </Col>
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Purchase;