import React, { Component } from 'react'

import { Container, Row, Col } from 'reactstrap'
import './Firstsection.scss'

import img_1 from '../img/icons8-pinsel-64.png'
import img_2 from '../img/icons8-element-67.png'
import img_3 from '../img/icons8-megaphon-30.png'
import img_4 from '../img/icons8-globus-24.png'


export default class Firstsection extends Component {
    render() {
        return (
            <div>
                <Container className='containerMain'>
                    <Row className='row1'>
                        <h3>What We Do</h3>
                        <h2>We've got everything you need to launch and
                            grow your business</h2>
                    </Row>

                    <Row xs="2" className='row2'>
                        <Col className="bg-light border colm">

                            <span> <img src={img_1} alt="" className='imgs'></img> </span>
                            <h3>Brand Identity</h3>
                            <p>Got everything you need to launch and
                                grow yourgot everything you need to launch and
                                grow your got everything you need to launch and
                                grow your</p>
                        </Col>
                        <Col className="bg-light border colm">
                            <span><img src={img_2} alt="" className='imgs'></img></span>
                            <h3>Illustration</h3>
                            <p>Got everything you need to launch and
                                grow yourgot everything you need to launch and
                                grow your got everything you need to launch and
                                grow your</p>
                        </Col>
                        <Col className="bg-light border colm">
                            <span><img src={img_3} alt="" className='imgs'></img></span>
                            <h3>Marketing</h3>
                            <p>Got everything you need to launch and
                                grow yourgot everything you need to launch and
                                grow your got everything you need to launch and
                                grow your</p>
                        </Col>
                        <Col className="bg-light border colm">
                            <span><img src={img_4} alt="" className='imgs' ></img></span>
                            <h3>Web Design</h3>
                            <p>Got everything you need to launch and
                                grow yourgot everything you need to launch and
                                grow your got everything you need to launch and
                                grow your</p>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}
