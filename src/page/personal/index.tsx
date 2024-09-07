import { Row, Col, Card, Tag, Progress, List, Avatar, Calendar, Badge } from "antd"
import example from "../../assets/logo.png"


const data = [
    {
        title: "List title expamle A",
        description: "Dscription example A"
    }
]
function Personal() {
    return <div>
        <Row gutter={16}>
            <Col span={6}>
                <Card>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item, index) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={example} />}
                                    title={<a href="#">{sessionStorage.getItem("username")}</a>}
                                    description={item.description}
                                />
                            </List.Item>
                        )}
                    />
                </Card>
                <Card className="mt">
                    <Calendar fullscreen={false} />
                </Card>
            </Col>
            <Col span={18}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card>
                            Pending: <Badge count={4} showZero color="#faad14" />
                        </Card>
                        <Card title="Apply for a new account" extra={<a href="#">Details</a>} className="mt">
                            <p>Description: I need a new user account</p>
                            <p className="mt">Requestor:HR - Kai</p>
                            <div className="mt">
                                Date:<Tag>2024-05-02</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">Regular</Tag>
                                <Tag color="blue">Account</Tag>
                            </div>
                            <div className="mt">
                                Progress:
                                <Progress percent={1} />
                            </div>
                        </Card>
                        <Card title="Payment" extra={<a href="#">Details</a>} className="mt">
                            <p>Description:Payment error</p>
                            <p className="mt">Requestor:Office - Winks</p>
                            <div className="mt">
                                Date:<Tag>2024-05-01</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="orange">Urgent</Tag>
                                <Tag color="blue">Property</Tag>
                            </div>
                            <div className="mt">
                                Progress:
                                <Progress percent={1} />
                            </div>
                        </Card>
                        <Card title="Repair" extra={<a href="#">Details</a>} className="mt">
                            <p>Description:C1 front door is broken</p>
                            <p className="mt">Requestor:Administration-Jack</p>
                            <div className="mt">
                                Date:<Tag>2024-05-04</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">Regular</Tag>
                                <Tag color="blue">Property</Tag>
                            </div>
                            <div className="mt">
                                Progress:
                                <Progress percent={1} />
                            </div>
                        </Card>

                    </Col>
                    <Col span={8}>
                        <Card>
                            Processing:<Badge count={2} showZero color="blue" />
                        </Card>
                        <Card title="Testing" extra={<a href="#">Details</a>} className="mt">
                            <p>Description:Air-conditions out of order</p>
                            <p className="mt">Requestor:Administration-Jack</p>
                            <div className="mt">
                                Date:<Tag>2024-05-03</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">Regular</Tag>
                                <Tag color="blue">Property</Tag>
                            </div>
                            <div className="mt">
                                Progress:
                                <Progress percent={34} />
                            </div>
                        </Card>
                        <Card title="Panding bill" extra={<a href="#">Details</a>} className="mt">
                            <p>Description:Too many panding contracts</p>
                            <p className="mt">Requestor:Office-Zhang</p>
                            <div className="mt">
                                Date:<Tag>2024-05-11</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="orange">Urgent</Tag>
                                <Tag color="blue">Finance</Tag>
                            </div>
                            <div className="mt">
                                Progress:
                                <Progress percent={65} />
                            </div>
                        </Card>
                        <Card title="The spot is due" extra={<a href="#">Details</a>} className="mt">
                            <p>Description:Change to fixed term</p>
                            <p className="mt">Requestor:Office-Lucy</p>
                            <div className="mt">
                                Date:<Tag>2024-05-20</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">Regular</Tag>
                                <Tag color="blue">Account</Tag>
                            </div>
                            <div className="mt">
                                Progress:
                                <Progress percent={47} />
                            </div>
                        </Card>

                    </Col>
                    <Col span={8}>
                        <Card>
                            Completed:<Badge count={9} showZero color="green" />
                        </Card>
                        <Card title="Article" extra={<a href="#">Details</a>} className="mt">
                            <p>Description:release a new article</p>
                            <p className="mt">Requestor:IT-Mandy</p>
                            <div className="mt">
                                Date:<Tag>2024-04-02</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">Regular</Tag>
                                <Tag color="blue">Operate</Tag>
                            </div>
                            <div className="mt">
                                Progress:
                                <Progress percent={100} />
                            </div>
                        </Card>
                        <Card title="Apply a new accout" extra={<a href="#">Details</a>} className="mt">
                            <p>Description:New user accout</p>
                            <p className="mt">Requestor:HR-Lucy</p>
                            <div className="mt">
                                Date:<Tag>2024-04-11</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">Regular</Tag>
                                <Tag color="blue">Account</Tag>
                            </div>
                            <div className="mt">
                                Progress:
                                <Progress percent={100} />
                            </div>
                        </Card>
                        <Card title="Repair" extra={<a href="#">Details</a>} className="mt">
                            <p>Description:A1 elevator is broken</p>
                            <p className="mt">Requestor:Administration - Jin</p>
                            <div className="mt">
                                Date:<Tag>2024-04-17</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="orange">Regular</Tag>
                                <Tag color="blue">Property</Tag>
                            </div>
                            <div className="mt">
                                Progress:
                                <Progress percent={100} />
                            </div>
                        </Card>

                    </Col>
                </Row>
            </Col>
        </Row>
    </div >
}

export default Personal