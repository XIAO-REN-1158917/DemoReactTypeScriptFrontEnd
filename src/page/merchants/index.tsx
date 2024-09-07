import { Carousel, Card, Row, Col, List, Avatar, Statistic } from "antd"
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import pic1 from "../../assets/1.jpg"
import pic2 from "../../assets/2.jpg"
import pic3 from "../../assets/3.jpg"

//static data
const data = [
    {
        title: 'Ant Design Title 1',
        description: 'description A'
    },
    {
        title: 'Ant Design Title 2',
        description: 'description B'
    },
    {
        title: 'Ant Design Title 3',
        description: 'description C'
    },
    {
        title: 'Ant Design Title 4',
        description: 'description D'
    },
];
function Merchants() {
    return <div>
        <Card>
            <div style={{ width: "1200px", margin: "auto" }}>
                <Carousel autoplay arrows>
                    <div><img src={pic1} /></div>
                    <div><img src={pic2} /></div>
                    <div><img src={pic3} /></div>
                </Carousel>
            </div>
        </Card>
        <Row gutter={16} className="mt">
            <Col span={12}>
                <Card>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item, index) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                                    title={<a href="#">{item.title}</a>}
                                    description={item.description}
                                />
                            </List.Item>
                        )}
                    />
                </Card>
            </Col>
            <Col span={12}>
                <Card>
                    <Statistic
                        title="New customer"
                        value={11.28}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                    />
                    <Statistic
                        title="Renewal customer"
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                    />
                    <Statistic
                        title="Customer Churn"
                        value={5.16}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                    />
                    <Statistic
                        title="Potential customer"
                        value={13.3}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                    />
                </Card>
            </Col>
        </Row>
    </div>
}

export default Merchants