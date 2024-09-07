import "./style.scss"
import ReactECharts from "echarts-for-react"
import { Card, Col, Row, Progress, Timeline, Tag, Statistic, Table } from 'antd';
import { RadarChartOutlined, SnippetsOutlined, DollarOutlined, LaptopOutlined } from "@ant-design/icons"
const columns: any = [
    {
        title: "No.",
        key: "index",
        render: (text: any, record: any, index: any) => index + 1,
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Building",
        dataIndex: "building",
        key: "building",
    },
    {
        title: "Electricity",
        dataIndex: "elec",
        key: "elec",
    },
    {
        title: "Heat",
        dataIndex: "hot",
        key: "hot",
    },
    {
        title: "Carbon",
        dataIndex: "c",
        key: "c",
    }
]

const data = [
    {
        name: "Company A",
        building: "B2-801",
        elec: 70,
        hot: 45,
        c: 22
    },
    {
        name: "Company B",
        building: "A2-902",
        elec: 70,
        hot: 37,
        c: 21
    },
    {
        name: "Company C",
        building: "A1-803",
        elec: 60,
        hot: 25,
        c: 17
    },
    {
        name: "Company D",
        building: "B1-1902",
        elec: 33,
        hot: 21,
        c: 6
    },
    {
        name: "Company E",
        building: "A2-401",
        elec: 44,
        hot: 22,
        c: 8
    },
    {
        name: "Company F",
        building: "B2-1401",
        elec: 70,
        hot: 45,
        c: 22
    }
]
function Energy() {
    const option = {
        title: {
            text: 'Today'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Col', 'Gas', 'Pet', 'Elc', 'Heat']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['0:00', '4:00', '8:00', '12:00', '16:00', '20:00', '24:00']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Coal',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Gas',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Petrol',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Electricity',
                type: 'line',
                stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'Heat',
                type: 'line',
                stack: 'Total',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };

    const option2 = {
        title: {
            text: 'Overview'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: [0, 0.01],
            data: ['2024-01', '2024-02', '2024-03', '2024-04', '2024-05', "2024-06"]
        },
        yAxis: {
            type: 'value',
            data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
        },
        series: [
            {
                name: 'Water',
                type: 'bar',
                data: [40, 220, 378, 658, 1122, 1200]
            },
            {
                name: 'Electricity',
                type: 'bar',
                data: [20, 39, 443, 490, 559, 762]
            },
            {
                name: 'Heat',
                type: 'bar',
                data: [78, 167, 229, 330, 380, 420]
            }
        ]
    };
    const option3 = {
        legend: {
            top: 'left'
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [
            {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [30, 100],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: [
                    { value: 40, name: 'Electricity' },
                    { value: 38, name: 'Coal' },
                    { value: 32, name: 'Charge' },
                    { value: 30, name: 'Light' },
                    { value: 28, name: 'Wasteful' },
                    { value: 26, name: 'Solar' },
                ]
            }
        ]
    };
    return <div className="dashboard">
        <Row gutter={16} className="mt">
            <Col span={12}>
                <Card title="Consumption" >
                    <ReactECharts option={option} />
                </Card>
            </Col>
            <Col span={12}>
                <Card title="Overview" >
                    <ReactECharts option={option2} />
                </Card>
            </Col>
        </Row>
        <Row gutter={16} className="mt" >
            <Col span={12} >
                <Card title="Proportion" style={{ height: "400px" }}>
                    <ReactECharts option={option3} />
                </Card>
            </Col>
            <Col span={12}>
                <Card>
                    <Table columns={columns} dataSource={data} pagination={false} />
                </Card>

            </Col>
        </Row>
    </div>
}
export default Energy