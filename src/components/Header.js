import React, { Component } from 'react';
import ProPicture from 'static/images/johanetlouis_pro.jpg';
import { Row } from 'antd';

class Header extends Component {
    render() {
        const headerStyle = {
            textAlign: 'center'
        };

        const imgStyle = {
            borderRadius: '50%',
            width: '200px',
            height: '200px',
            display: 'inline-block',
            margin: '50px'
        };


        return (
            <div>
                <Row type="flex" justify="center">
                    <img style={imgStyle} src={ProPicture} alt="Louis Johanet"/>
                </Row>
                <Row type="flex" justify="space-around">
                    <h1 style={headerStyle}>Louis Johanet</h1>
                </Row>
                <Row type="flex" justify="space-around">
                    <h2 style={headerStyle}>Fullstack Software Engineer</h2>
                </Row>
            </div>
        );
    }
}

export default Header;
