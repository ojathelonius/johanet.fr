import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { FaLinkedin, FaGithub } from 'react-icons/lib/fa';

class SocialMedia extends Component {
    render() {

        const iconStyle = {
            fontSize: '3em',
            textAlign: 'center'
        }

        const experienceStyle = {
            marginBottom: '20px'
        };

        const linkStyle = {
            color: '#daa203'
        };

        return (
            <div style={experienceStyle}>
                <Row type="flex" justify="center">
                    <Col xs={22} md={4} style={iconStyle}>
                        <a href="https://www.linkedin.com/in/louis-johanet/" alt="LinkedIn" style={linkStyle}>
                            <FaLinkedin />
                        </a>
                    </Col>
                    <Col xs={22} md={4} style={iconStyle}>
                        <a href="https://github.com/ojathelonius" alt="GitHub" style={linkStyle}>
                            <FaGithub />
                        </a>
                    </Col>

                </Row>
            </div>
        );
    }
}

export default SocialMedia;
