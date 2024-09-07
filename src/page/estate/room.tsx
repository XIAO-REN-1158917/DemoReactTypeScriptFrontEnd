import { Card, Row, Col, Image, Radio, RadioChangeEvent, Spin } from "antd"
import { getRoomList } from "../../api/room"
import "./index.scss"
import { useEffect, useState } from "react"
import roomPic from "../../assets/roomPic.jpg"


interface RoomType {
    roomNumber: number,
    decorationType: "Unfinished" | "Fully furnished",
    area: number,
    unitPrice: number,
    src: string
}

function Room() {
    const [visible, setVisible] = useState<boolean>(false)
    const [room, setRoom] = useState<RoomType[]>([])
    const [src, setSrc] = useState<string>(roomPic)
    const [loading, setLoading] = useState<boolean>(false)
    const loadRoom = async (roomid: string) => {
        setLoading(true)
        const { data: { rooms } } = await getRoomList(roomid)
        setLoading(false)
        setRoom(rooms)
    }
    const showImage = (src: string) => {
        setSrc(src)
        setVisible(true)
    }

    const handleChange = (e: RadioChangeEvent) => {
        const roomid: string = e.target.value
        loadRoom(roomid)
    }

    useEffect(() => {
        loadRoom("a1")
    }, [])

    return <div className="room">
        <Image
            width={200}
            style={{ display: "none" }}
            preview={{
                visible,
                src: src,
                onVisibleChange: (value) => {
                    setVisible(value)
                }
            }}
        />
        <Card className="mb">
            <Radio.Group defaultValue="a1" buttonStyle="solid" onChange={handleChange}>
                <Radio.Button value="a1">A1</Radio.Button>
                <Radio.Button value="a2">A2</Radio.Button>
                <Radio.Button value="b1">B1</Radio.Button>
                <Radio.Button value="b2">B2</Radio.Button>
                <Radio.Button value="c1">C1</Radio.Button>
                <Radio.Button value="c2">C2</Radio.Button>
                <Radio.Button value="d1">D1</Radio.Button>
                <Radio.Button value="d2">D2</Radio.Button>
            </Radio.Group>
        </Card>
        <Spin spinning={loading}>
            <Row gutter={16}>
                {
                    room.map((item) => {
                        return <>
                            <Col span={6} className="item">
                                <Card title="Room" extra={<a onClick={() => showImage(item.src)}>Img</a>}>
                                    <h1>{item.roomNumber}</h1>
                                    <div className="clearfix mt">
                                        <p className="fl">State: </p>
                                        <p className="fr">{item.decorationType}</p>
                                    </div>
                                    <div className="clearfix mt">
                                        <p className="fl">Area: </p>
                                        <p className="fr">{item.area} Sq.m</p>
                                    </div>
                                    <div className="clearfix mt">
                                        <p className="fl">Rental Rate: </p>
                                        <p className="fr">{item.unitPrice} $/Sq.m/D</p>
                                    </div>
                                </Card>
                            </Col>
                        </>
                    })
                }
            </Row>
        </Spin>
    </div>
}

export default Room