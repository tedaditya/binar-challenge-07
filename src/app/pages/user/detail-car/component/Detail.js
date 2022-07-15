import {Button, Card, Space, Typography, Collapse, message} from "antd";

const {Text, Title} = Typography;
const {Panel} = Collapse;

const Detail = () => {
    const error = () => {
        message.error('Halaman belum ada');
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
                <Space direction="vertical" size={16} style={{display: 'flex'}}>
                    <Title level={5} style={{fontSize: 14}}>Tentang Paket</Title>
                    <Space direction="vertical" size={8} style={{display: 'flex'}}>
                        <Text>Include</Text>
                        <ul style={{paddingLeft: "1rem", color: "#8A8A8A"}}>
                            <Space direction="vertical" size={4} style={{display: 'flex'}}>
                                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li>Sudah termasuk bensin selama 12 jam</li>
                                <li>Sudah termasuk Tiket Wisata</li>
                                <li>Sudah termasuk pajak</li>
                            </Space>
                        </ul>
                    </Space>
                    <Space direction="vertical" size={8} style={{display: 'flex'}}>
                        <Text>Exclude</Text>
                        <ul style={{paddingLeft: "1rem", color: "#8A8A8A"}}>
                            <Space direction="vertical" size={4} style={{display: 'flex'}}>
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                            </Space>
                        </ul>
                    </Space>
                    <Collapse defaultActiveKey={['1']} accordion bordered={false} expandIconPosition="right"
                              style={{background: "white"}}>
                        <Panel className="custom" header={
                            <Title level={5} style={{fontSize: 14}}>Refund, Reschedule, Overtime</Title>} key="1">
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
                        </Panel>
                    </Collapse>
                </Space>
            </Card>
        </>
    )
}

export default Detail