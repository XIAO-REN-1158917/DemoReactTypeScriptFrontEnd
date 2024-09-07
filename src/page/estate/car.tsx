import { Card, Row, Col, Table, Input, Button, Tabs, Image } from "antd"
import type { TabsProps, TableProps } from "antd"
import come from "../../assets/come.jpg"

// static data
interface DataType {
    key: string;
    orderNo: string;
    date: string;
    carNo: string;
    type: string;
    startDate: string;
    time: string;
    count: string;
    cost: string;
}
interface DataType2 {
    key: string;
    carNo: string;
    name: string;
    tel: string;
    type: string;
    rest: string;
    time: string;
    pic: string;
}
const columns: TableProps<DataType>['columns'] = [
    {
        title: "No.",
        key: "index",
        render: (text, record, index) => index + 1,
    },
    {
        title: 'Order Num',
        dataIndex: 'orderNo',
        key: 'orderNo',

    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Plate',
        dataIndex: 'carNo',
        key: 'carNo',
    },
    {
        title: 'Tpye',
        dataIndex: 'type',
        key: 'type',

    },
    {
        title: 'Start',
        dataIndex: 'startDate',
        key: 'startDate',
    },
    {
        title: 'Duration',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Electricity',
        dataIndex: 'count',
        key: 'count',
    },
    {
        title: 'Cost',
        dataIndex: 'cost',
        key: 'cost',
    },
    {
        title: 'Operate',
        dataIndex: 'operate',
        key: 'operate',
        render: (text, record) => {
            return <>
                <Button type="primary" size="small">View</Button>
            </>
        }
    },

];

const data: DataType[] = [
    {
        key: '1',
        orderNo: 'CD9872380',
        date: "2024-02-13",
        carNo: 'A88888',
        type: "Sedan",
        startDate: "2024-02-13 15:33:12",
        time: "2H25M",
        count: "30kw",
        cost: "$40.50"
    },
    {
        key: '2',
        orderNo: 'CD9872380',
        date: "2024-02-13",
        carNo: 'A88888',
        type: "Sedan",
        startDate: "2024-02-13 15:33:12",
        time: "2H25M",
        count: "30kw",
        cost: "$40.50"
    },
    {
        key: '3',
        orderNo: 'CD9872380',
        date: "2024-02-13",
        carNo: 'A88888',
        type: "Sedan",
        startDate: "2024-02-13 15:33:12",
        time: "2H25M",
        count: "30kw",
        cost: "$40.50"
    },
    {
        key: '4',
        orderNo: 'CD9872380',
        date: "2024-02-13",
        carNo: 'A88888',
        type: "Sedan",
        startDate: "2024-02-13 15:33:12",
        time: "2H25M",
        count: "30kw",
        cost: "$40.50"
    },
    {
        key: '5',
        orderNo: 'CD9872380',
        date: "2024-02-13",
        carNo: 'A88888',
        type: "Sedan",
        startDate: "2024-02-13 15:33:12",
        time: "2H25M",
        count: "30kw",
        cost: "$40.50"
    },
    {
        key: '6',
        orderNo: 'CD9872380',
        date: "2024-02-13",
        carNo: 'A88888',
        type: "Sedan",
        startDate: "2024-02-13 15:33:12",
        time: "2H25M",
        count: "30kw",
        cost: "$40.50"
    },
    {
        key: '7',
        orderNo: 'CD9872380',
        date: "2024-02-13",
        carNo: 'A88888',
        type: "Sedan",
        startDate: "2024-02-13 15:33:12",
        time: "2H25M",
        count: "30kw",
        cost: "$40.50"
    },
    {
        key: '8',
        orderNo: 'CD9872380',
        date: "2024-02-13",
        carNo: 'A88888',
        type: "Sedan",
        startDate: "2024-02-13 15:33:12",
        time: "2H25M",
        count: "30kw",
        cost: "$40.50"
    },

];

const columns2: TableProps<DataType2>['columns'] = [
    {
        title: "No.",
        key: "index",
        render: (text, record, index) => index + 1,
    },
    {
        title: 'Plate',
        dataIndex: 'carNo',
        key: 'carNo',

    },
    {
        title: 'Owner',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Tel',
        dataIndex: 'tel',
        key: 'tel',
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',

    },
    {
        title: 'Remaining',
        dataIndex: 'rest',
        key: 'rest',
    },
    {
        title: 'Expired',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Img',
        dataIndex: 'pic',
        key: 'pic',
        render: (text) => <Image
            src={come}
            width={50}
            placeholder={
                <Image
                    preview={false}
                    src={come}
                    width={150}
                />
            }
        />
    },

    {
        title: 'Operate',
        dataIndex: 'operate',
        key: 'operate',
        render: (text, record) => {
            return <>
                <Button type="primary" size="small" className='mr'>Edit</Button>
                <Button type="primary" size="small" danger>Delete</Button>
            </>
        }
    },

];
const data2: DataType2[] = [
    {
        key: '1',
        carNo: 'A88888',
        name: "Jack",
        tel: "18876543210",
        type: 'Fixed',
        rest: "135D",
        time: "0D",
        pic: "",
    },
    {
        key: '2',
        carNo: 'A88888',
        name: "Jack",
        tel: "18876543210",
        type: 'Fixed',
        rest: "135D",
        time: "0D",
        pic: "",
    },
    {
        key: '3',
        carNo: 'A88888',
        name: "Jack",
        tel: "18876543210",
        type: 'Fixed',
        rest: "135D",
        time: "0D",
        pic: "",
    },
    {
        key: '4',
        carNo: 'A88888',
        name: "Jack",
        tel: "18876543210",
        type: 'Fixed',
        rest: "135D",
        time: "0D",
        pic: "",
    },
    {
        key: '5',
        carNo: 'A88888',
        name: "Jack",
        tel: "18876543210",
        type: 'Fixed',
        rest: "135D",
        time: "0D",
        pic: "",
    },
    {
        key: '6',
        carNo: 'A88888',
        name: "Jack",
        tel: "18876543210",
        type: 'Fixed',
        rest: "135D",
        time: "0D",
        pic: "",
    },
    {
        key: '7',
        carNo: 'A88888',
        name: "Jack",
        tel: "18876543210",
        type: 'Fixed',
        rest: "135D",
        time: "0D",
        pic: "",
    },
    {
        key: '8',
        carNo: 'A88888',
        name: "Jack",
        tel: "18876543210",
        type: 'Fixed',
        rest: "135D",
        time: "0D",
        pic: "",
    },

];



const items: TabsProps['items'] = [
    {
        key: "1",
        label: "Charging Record",
        children: <Table columns={columns} dataSource={data} />
    },
    {
        key: "2",
        label: "Car Record",
        children: <Table columns={columns2} dataSource={data2} />
    },
]


function Car() {
    return <div>
        <Card>
            <Row>
                <Col span={8}>
                    <Input placeholder="Input plate phone or contact" />
                </Col>
                <Col span={8}>
                    <Button className="ml" type="primary">Search</Button>
                </Col>
            </Row>
        </Card>
        <Card className="mt">
            <Tabs items={items}></Tabs>
        </Card>
    </div>
}

export default Car