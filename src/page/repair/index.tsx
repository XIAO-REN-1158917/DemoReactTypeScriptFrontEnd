import { Table, Row, Col, Card, Input, Button, Tag } from "antd"
import type { TableProps } from "antd"

interface DataType {
    key: string;
    orderNo: string;
    name: string;
    tel: string;
    address: string;
    description: string;
    status: string;
    time: string;
}
const columns: TableProps<DataType>['columns'] = [
    {
        title: "No.",
        key: "index",
        render: (text, record, index) => index + 1,
    },
    {
        title: 'OrderNo',
        dataIndex: 'orderNo',
        key: 'orderNo',

    },
    {
        title: 'Repair Requestor',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Tel',
        dataIndex: 'tel',
        key: 'tel',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',

    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'State',
        dataIndex: 'status',
        key: 'status',
        render: (text, record) => {
            if (text == 1) {
                return <Tag color="#f50">Pending</Tag>
            } else if (text == 2) {
                return <Tag color="#2db7f5">Repairing</Tag>
            } else {
                return <Tag color="green">Completed</Tag>
            }
        }
    },
    {
        title: 'Request Tiem',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Operate',
        dataIndex: 'operate',
        key: 'operate',
        render: (text, record) => {
            if (record.status == "1") {
                return <>
                    <Button type="primary" size="small">Assign</Button>
                </>
            } else if (record.status == "2") {
                return <>
                    <a >Repairing...</a>
                </>
            } else {
                return <Button type="primary" size="small">Completed</Button>
            }
        }
    },

];

const data: DataType[] = [
    {
        key: '1',
        orderNo: 'BX1236984',
        name: "Rose",
        tel: '13498765432',
        address: "A2-502",
        description: "Air-condition goes out of order",
        status: "1",
        time: "2024-05-30 13:37",
    },
    {
        key: '2',
        orderNo: 'BX1236984',
        name: "Rose",
        tel: '13498765432',
        address: "A2-502",
        description: "Air-condition goes out of order",
        status: "2",
        time: "2024-05-30 13:37",
    },
    {
        key: '3',
        orderNo: 'BX1236984',
        name: "Rose",
        tel: '13498765432',
        address: "A2-502",
        description: "Air-condition goes out of order",
        status: "3",
        time: "2024-05-30 13:37",
    },
    {
        key: '4',
        orderNo: 'BX1236984',
        name: "Rose",
        tel: '13498765432',
        address: "A2-502",
        description: "Air-condition goes out of order",
        status: "1",
        time: "2024-05-30 13:37",
    },
    {
        key: '5',
        orderNo: 'BX1236984',
        name: "Rose",
        tel: '13498765432',
        address: "A2-502",
        description: "Air-condition goes out of order",
        status: "3",
        time: "2024-05-30 13:37",
    },
    {
        key: '6',
        orderNo: 'BX1236984',
        name: "Rose",
        tel: '13498765432',
        address: "A2-502",
        description: "Air-condition goes out of order",
        status: "2",
        time: "2024-05-30 13:37",
    },

];

function Repair() {
    return <div>
        <Card>
            <Row>
                <Col span={8}>
                    <Input placeholder="Input the number of order" />
                </Col>
                <Col span={8}>
                    <Button type='primary' className='ml'>Search</Button>
                </Col>
            </Row>

        </Card>
        <Card className="mt">
            <Table dataSource={data} columns={columns} />
        </Card>
    </div>
}

export default Repair