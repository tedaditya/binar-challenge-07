import {Card, Space, Typography, Row, Col, Statistic} from "antd";

const {Countdown} = Statistic;
const {Text, Title} = Typography;
const deadline = Date.now() + 500 * 60 * 60 * 24 * 2 + 1000; // Moment is also OK


const TimeLimit = () => {
    const onFinish = () => {
        console.log('finished!');
    };

    return (
        <>
            <Card
                bordered={false}
                style={{
                    width: "100%",
                    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                    borderRadius: 8
                }}>
                <Row align="middle">
                    <Col span={12}>
                        <Space direction="vertical" size={7} style={{display: 'flex'}}>
                            <Title level={5} style={{fontSize: 14, margin: 0}}>Selesaikan pembayaran sebelum</Title>
                            <Text>Rabu, 19 Jun 2022 jam 13.00 WIB</Text>
                        </Space>
                    </Col>
                    <Col span={12} align="right">
                        <Countdown value={deadline} onFinish={onFinish} />
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default TimeLimit