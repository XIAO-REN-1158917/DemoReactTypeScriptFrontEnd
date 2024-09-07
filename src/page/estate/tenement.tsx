import { Card, Row, Col, Table, Input, Button, Tag, Progress, Badge } from "antd"
import { TableProps } from "antd"

interface DataType {
    key: string,
    name: string,
    person: string,
    tel: string,
    status: string,
    vacancyRate: number,
    propertyFee: string
}
const columns: TableProps<DataType>['columns'] = [
    {
        title: "No.",
        key: "index",
        render: (value, record, index) => index + 1
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "Contact",
        dataIndex: "person",
        key: "person"
    },
    {
        title: "Tel",
        dataIndex: "tel",
        key: "tel"
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (value) => {//ES5 syntax
            if (value == 1) {
                return <Tag color="#f50">Constructing</Tag>
            } else if (value == 2) {
                return <Tag color="#2db7f5">Completed</Tag>
            } else {
                return <Tag color="#87d068">In Use</Tag>
            }
        }
    },
    {
        title: "Vacancy Rate",
        dataIndex: "vacancyRate",
        key: "vacancyRate",
        render(value) {//ES6 synatax
            return <Progress percent={value} status="active" />
        }
    },
    {
        title: "Property Fee",
        dataIndex: "propertyFee",
        key: "propertyFee",
        render(value) {//ES6 synatax
            return <Badge color="grenn" text={value} />
        }
    },
    {
        title: "Operate",
        key: "operate",
        render(value) {
            return <>
                <Button type="primary" className="mr">Edit</Button>
                <Button type="primary" danger>Delete</Button>
            </>
        }
    }


]
const data: DataType[] = [
    {
        key: '1',
        name: 'A1',
        person: "Margaret Davis",
        tel: '16654789654',
        status: "1",
        vacancyRate: 60,
        propertyFee: "3.5%",
    },
    {
        key: '2',
        name: 'A2',
        person: "Daniel Thomas",
        tel: '13698756669',
        status: "2",
        vacancyRate: 40,
        propertyFee: "3.8%",
    },
    {
        key: '3',
        name: 'B1',
        person: "David Hernandez",
        tel: '15587966698',
        status: "3",
        vacancyRate: 20,
        propertyFee: "3.1%",
    },
    {
        key: '4',
        name: 'B2',
        person: "Brenda Jackson",
        tel: '13698756324',
        status: "1",
        vacancyRate: 30,
        propertyFee: "4.0%",
    },
    {
        key: '5',
        name: 'C1',
        person: "Barbara Rodriguez",
        tel: '19878965444',
        status: "2",
        vacancyRate: 50,
        propertyFee: "3.5%",
    },
    {
        key: '6',
        name: 'C2',
        person: "Carol Perez",
        tel: '13369888562',
        status: "3",
        vacancyRate: 10,
        propertyFee: "2.9%",
    },
    {
        key: '7',
        name: 'D1',
        person: "Laura Hernandez",
        tel: '13578549687',
        status: "2",
        vacancyRate: 25,
        propertyFee: "3.7%",
    },
    {
        key: '8',
        name: 'D2',
        person: "Elizabeth Allen",
        tel: '18745889874',
        status: "3",
        vacancyRate: 15,
        propertyFee: "3.3%",
    },

];


function Tenement() {
    return <div>
        <Card className="search">
            <Row gutter={16}>
                <Col span={4}>
                    <p>Name: </p>
                    <Input />
                </Col>
                <Col span={4}>
                    <p>Contact: </p>
                    <Input />
                </Col>
                <Col span={4}>
                    <Button className="mr" type="primary">Search</Button>
                    <Button>Reset</Button>
                </Col>
            </Row>
        </Card>
        <Card className="mt">
            <Table
                columns={columns}
                dataSource={data}
            />
        </Card>
    </div>
}

export default Tenement