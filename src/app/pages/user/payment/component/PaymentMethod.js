import {Button, Card, Space, Typography, Collapse, message, Divider} from "antd";
import Radio from "antd/es/radio/radio";

const {Text, Title} = Typography;
const {Panel} = Collapse;

const PaymentMethod = () => {
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
                <Space direction="vertical" size={24} style={{display: 'flex'}}>
                    <Title level={5} style={{fontSize: 14, margin: 0}}>Pilih Bank Transfer</Title>
                    <Text>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</Text>
                    <div style={{marginTop: 12}}>
                        <Space size={16}>
                            <Text style={{border: "1px solid #D0D0D0", padding: "6px 18px", borderRadius: 4}}>BCA</Text>
                            <Text>BCA Transfer</Text>
                        </Space>
                        <Divider />
                        <Space size={16}>
                            <Text style={{border: "1px solid #D0D0D0", padding: "6px 20px", borderRadius: 4}}>BNI</Text>
                            <Text>BNI Transfer</Text>
                        </Space>
                        <Divider />
                        <Space size={16}>
                            <Text style={{border: "1px solid #D0D0D0", padding: "6px 10px", borderRadius: 4}}>Mandiri</Text>
                            <Text>Mandiri Transfer</Text>
                        </Space>
                        <Divider />
                    </div>
                </Space>
            </Card>
        </>
    )
}

export default PaymentMethod