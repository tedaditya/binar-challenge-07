import {Button, Card, Space, Typography, Collapse, Input, Divider} from "antd";
import Radio from "antd/es/radio/radio";
import SubmitButton from "../../../component/ButtonSubmit";

const {Text, Title} = Typography;
const {Panel} = Collapse;

const Confirmation = () => {

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
                    <Text>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</Text>
                    <SubmitButton text="Konfirmasi Pembayaran"/>
                </Space>
            </Card>
        </>
    )
}

export default Confirmation