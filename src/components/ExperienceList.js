import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { List } from 'antd';
import CompanyLogo from 'static/images/company_logo.jpg';

class ExperienceList extends Component {
    render() {
        const experienceStyle = {
            marginTop: '50px'
        };

        const listData = [
            {
                href: 'http://google.fr',
                title: 'Work Experience 1',
                description: 'Stuff I did, in a nutshell',
                content: 'More details about that stuff.',
                image: CompanyLogo
            },
            {
                href: 'http://google.fr',
                title: 'Work Experience 2',
                description: 'Stuff I did, in a nutshell',
                content: 'More details about that stuff.',
                image: CompanyLogo
            },
            {
                href: 'http://google.fr',
                title: 'Work Experience 3',
                description: 'Stuff I did, in a nutshell',
                content: 'More details about that stuff.',
                image: CompanyLogo
            }

        ];


        return (
            <div style={experienceStyle}>
                <Row type="flex" justify="center">
                    <Col xs={22} md={16}>
                        <List
                            itemLayout="vertical"
                            size="large"
                            dataSource={listData}
                            renderItem={item => (
                                <List.Item
                                    key={item.title}
                                    extra={<img width={272} alt="Company logo" src={item.image} />}
                                >
                                    <List.Item.Meta
                                        title={<a href={item.href}>{item.title}</a>}
                                        description={item.description}
                                    />
                                    {item.content}
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ExperienceList;
