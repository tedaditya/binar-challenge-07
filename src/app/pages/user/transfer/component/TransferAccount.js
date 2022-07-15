import {Button, Card, Space, Typography, Collapse, Input, Divider} from "antd";
import Radio from "antd/es/radio/radio";

const {Text, Title} = Typography;
const {Panel} = Collapse;

const TransferAccount = () => {

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
                    <Title level={5} style={{fontSize: 14, margin: 0}}>Lakukan Transfer Ke</Title>
                    <div style={{marginTop: 12}}>
                        <Space size={16}>
                            <Text style={{border: "1px solid #D0D0D0", padding: "6px 18px", borderRadius: 4}}>BCA</Text>
                            <Space direction="vertical">
                                <Text>BCA Transfer</Text>
                                <Text>a.n Binar Car Rental</Text>
                            </Space>

                        </Space>
                    </div>
                    <Space direction="vertical" size={4} style={{width: "100%"}}>
                        <Text>Nomor Rekening</Text>
                        <Input suffix="Copy" />
                    </Space>
                    <Space direction="vertical" size={4} style={{width: "100%"}}>
                        <Text>Total Bayar</Text>
                        <Input suffix="Copy" />
                    </Space>
                </Space>
            </Card>
        </>
    )
}

export default TransferAccount