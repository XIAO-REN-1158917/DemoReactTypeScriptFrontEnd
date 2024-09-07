import { Row, Col, Card, Badge, Statistic } from "antd"
function All() {
    return <div>
        <Row gutter={16}>
            <Col span={18}>
                <Card>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Statistic title="Articles" value={1588} />
                        </Col>
                        <Col span={6}>
                            <Statistic title="Potential Customers" value={235} />
                        </Col>
                        <Col span={6}>
                            <Statistic title="Business" value={766} />
                        </Col>
                        <Col span={6}>
                            <Statistic title="Tenements" value={6988} />
                        </Col>
                    </Row>
                </Card>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card className="mt">
                            <Card title="To-Do" extra={<a href="#">More&gt;</a>} >
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="blue" text="Text..." />
                                    <span style={{ color: "#666" }}>2024-01-02</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="blue" text="Text..." />
                                    <span style={{ color: "#666" }}>2024-03-12</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="blue" text="Text..." />
                                    <span style={{ color: "#666" }}>2024-03-22</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="Text..." />
                                    <span style={{ color: "#666" }}>2024-04-01</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="Text..." />
                                    <span style={{ color: "#666" }}>2024-04-07</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="Text..." />
                                    <span style={{ color: "#666" }}>2024-05-02</span>
                                </div>
                            </Card>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card className="mt">
                            <Card title="News"
                                extra={<a href="#">More&gt;</a>}>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="red" text="Text example..." />
                                    <span style={{ color: "#666" }}>2024-01-02</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="red" text="Text example..." />
                                    <span style={{ color: "#666" }}>2024-01-02</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="red" text="Text example..." />
                                    <span style={{ color: "#666" }}>2024-01-02</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="Text example..." />
                                    <span style={{ color: "#666" }}>2024-04-01</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="Text example..." />
                                    <span style={{ color: "#666" }}>2024-04-07</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="Text example..." />
                                    <span style={{ color: "#666" }}>2024-05-02</span>
                                </div>
                            </Card>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col span={6}>
                <Card title="Rank">
                    <div style={{ lineHeight: "30px", display: "flex", justifyContent: "space-between" }}>
                        <p>1.Example Company</p>
                        <p>Staff:87</p>
                        <p>Value:8600(K$)</p>
                    </div>
                    <div style={{ lineHeight: "30px", display: "flex", justifyContent: "space-between" }}>
                        <p>2.Example Company</p>
                        <p>Staff:87</p>
                        <p>Value:8600(K$)</p>
                    </div>
                    <div style={{ lineHeight: "30px", display: "flex", justifyContent: "space-between" }}>
                        <p>3.Example Company</p>
                        <p>Staff:87</p>
                        <p>Value:8600(K$)</p>
                    </div>
                    <div style={{ lineHeight: "30px", display: "flex", justifyContent: "space-between" }}>
                        <p>4.Example Company</p>
                        <p>Staff:87</p>
                        <p>Value:8600(K$)</p>
                    </div>
                    <div style={{ lineHeight: "30px", display: "flex", justifyContent: "space-between" }}>
                        <p>5.Example Company</p>
                        <p>Staff:87</p>
                        <p>Value:8600(K$)</p>
                    </div>
                    <div style={{ lineHeight: "30px", display: "flex", justifyContent: "space-between" }}>
                        <p>6.Example Company</p>
                        <p>Staff:87</p>
                        <p>Value:8600(K$)</p>
                    </div>
                    <div style={{ lineHeight: "30px", display: "flex", justifyContent: "space-between" }}>
                        <p>7.Example Company</p>
                        <p>Staff:87</p>
                        <p>Value:8600(K$)</p>
                    </div>
                    <div style={{ lineHeight: "30px", display: "flex", justifyContent: "space-between" }}>
                        <p>8.Example Company</p>
                        <p>Staff:87</p>
                        <p>Value:8600(K$)</p>
                    </div>
                    <div style={{ lineHeight: "30px", display: "flex", justifyContent: "space-between" }}>
                        <p>9.Example Company</p>
                        <p>Staff:87</p>
                        <p>Value:8600(K$)</p>
                    </div>
                    <div style={{ lineHeight: "30px", display: "flex", justifyContent: "space-between" }}>
                        <p>10.Example Company</p>
                        <p>Staff:87</p>
                        <p>Value:8600(K$)</p>
                    </div>
                    <div style={{ lineHeight: "30px", display: "flex", justifyContent: "space-between" }}>
                        <p>11.Example Company</p>
                        <p>Staff:87</p>
                        <p>Value:8600(K$)</p>
                    </div><div style={{ lineHeight: "30px", display: "flex", justifyContent: "space-between" }}>
                        <p>12.Example Company</p>
                        <p>Staff:87</p>
                        <p>Value:8600(K$)</p>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
}

export default All