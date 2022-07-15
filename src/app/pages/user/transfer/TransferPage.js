import DetailBar from "../payment/component/DetailBar";
import {Col, PageHeader, Row, Space, Typography} from "antd";
import Step from "../payment/component/Step";
import PaymentMethod from "../payment/component/PaymentMethod";
import PaymentDetail from "../payment/component/PaymentDetail";
import TimeLimit from "./component/TimeLimit";
import TransferAccount from "./component/TransferAccount";
import TransferInstruction from "./component/TransferInstruction";
import Confirmation from "./component/Confirmation";
import ConfirmationUpload from "./component/ConfirmationUpload";

const {Title, Text} = Typography;

const TransferPage = () => {
    return(
        <>
            <div
                style={{
                    position: "relative"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        marginTop: 170,
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    {/*<DetailBar search={true}/>*/}
                </div>
                <div style={{background: "#F1F3FF", height: 175, paddingTop: "4%"}}>
                    <div style={{margin: "0 11.8%"}}>
                        <PageHeader
                            className="site-page-header"
                            onBack={() => null}
                            title={<Title level={5} style={{margin: 0}}>BCA Transfer</Title>}
                            extra={[
                                <>
                                    <Step text="Pilih Metode" index="1" progress={false}/>
                                    <div style={{width: 28, height: 1, backgroundColor: "#0D28A6"}}/>
                                    <Step text="Bayar" index="2" progress={true}/>
                                    <div style={{width: 28, height: 1, backgroundColor: "#0D28A6"}}/>
                                    <Step text="Tiket" index="3" progress={false}/>
                                </>
                            ]}
                        />
                        <Text style={{margin: "0 5%"}}>Order ID: xxxxxxxx</Text>
                    </div>
                </div>
            </div>
            <div style={{margin: "40px 13%"}}>
                <Row gutter={32}>
                    <Col className="gutter-row" span={13}>
                        <Space direction="vertical" size={24} style={{width: "100%"}}>
                            <TimeLimit/>
                            <TransferAccount/>
                            <TransferInstruction/>
                        </Space>
                    </Col>
                    <Col className="gutter-row" span={11}>
                        {/*<Confirmation/>*/}
                        <ConfirmationUpload/>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default TransferPage