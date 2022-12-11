
import { Col, Container, Row } from 'reactstrap'
import './Header.scss'

import React, { Component } from "react";
export default class Header extends Component {
    render() {
        return (

            <Container className='containerHeader'>
                <Row className='row1'>
                    <span>Hello There</span>
                    <h1>We Are Glint</h1>
                    <small></small>
                    <p>
                        The Text menu appears when the Text tool is selected for editing text
                        blocks directly on-screen, or when the Edit Text window appears for
                        editing staff and group names. An abbreviated text menu is also
                        available in the Lyrics window, Edit Staff Name, and Text Expression
                        Designer dialog boxes.
                        editing staff and group names. An abbreviated text menu is also
                        available in the Lyrics window, Edit Staff Name, and Text Expression
                        Designer dialog boxes.
                    </p>
                </Row>

                <Row className="row2">
                    <Col className='colClass'>
                        <h3>127</h3>
                        <h4>Award Received</h4>
                    </Col>
                    <Col className='colClass'>
                        <h3>1505</h3>
                        <h4>Cups of Coffee</h4>
                    </Col>
                    <Col className='colClass'>
                        <h3>109</h3>
                        <h4>Projects Completed</h4>
                    </Col>
                    <Col className='colClassExit'>
                        <h3>102</h3>
                        <h4>Happy Clients</h4>
                    </Col>
                </Row>
            </Container>

        );
    }
}
