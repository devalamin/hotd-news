import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import Header from '../pages/shared/Header/Header';
import LeftSideNav from '../pages/shared/LeftsideNav/LeftSideNav';
import RightSideNav from '../pages/shared/Rightside/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col className='p-6 d-none d-lg-block' lg='2'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='7'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='3'>
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;