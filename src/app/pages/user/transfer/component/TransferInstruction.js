import {Card, Space, Typography, Row, Col, Tabs} from "antd";
const { TabPane } = Tabs;
const {Text, Title} = Typography;
const deadline = Date.now() + 500 * 60 * 60 * 24 * 2 + 1000; // Moment is also OK


const TransferInstruction = () => {
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
                <Space direction="vertical" size={7} style={{display: 'flex'}}>
                    <Title level={5} style={{fontSize: 14, margin: 0}}>Instruksi Pembayaran</Title>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="ATM BCA" key="1">
                            <ul style={{paddingLeft: "1rem", color: "#8A8A8A"}}>
                                <Space direction="vertical" size={4} style={{display: 'flex'}}>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                </Space>
                            </ul>
                        </TabPane>
                        <TabPane tab="M-BCA" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="BCA Klik" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="Internet Banking" key="4">
                            Content of Tab Pane 4
                        </TabPane>
                    </Tabs>
                </Space>
            </Card>
        </>
    )
}

export default TransferInstruction