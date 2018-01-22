import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { List } from 'antd';
import CompanyLogo from 'static/images/company_logo.jpg';
import KleeGroupLogo from 'static/images/kleegroup.jpg';
import VwgoaLogo from 'static/images/vwgoa.jpg';
import EpfLogo from 'static/images/epf.jpg';

class ExperienceList extends Component {
    render() {
        const experienceStyle = {
            marginTop: '50px'
        };

        const listData = [
            {
                title: 'Fullstack Software Engineer',
                description: 'Klee Group',
                content: 'Using stable technologies to build complex web applications.',
                image: KleeGroupLogo
            },
            {
                title: 'Fullstack Software Engineer',
                description: 'Electronics Research Laboratory - Volkswagen Group of America',
                content: 'Implementing a fleet management tool from scratch with React/Redux on top of JIRA.',
                image: VwgoaLogo
            },
            {

                title: 'MSc in Computer Science',
                description: 'EPF - Graduate School of Engineering',
                content: 'Information Technology and Software Engineering courses with a hint of management.',
                image: EpfLogo
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
                                        title={item.title}
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
