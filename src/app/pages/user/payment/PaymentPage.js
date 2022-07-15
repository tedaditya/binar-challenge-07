import {Col, Row, PageHeader, Typography} from "antd";
import Car from "../detail-car/component/Car";
import Step from "./component/Step";
import DetailBar from "./component/DetailBar";
import PaymentMethod from "./component/PaymentMethod";
import PaymentDetail from "./component/PaymentDetail";

const {Title} = Typography;

const PaymentPage = () => {
    return (
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
                    <DetailBar search={true}/>
                </div>
                <div style={{background: "#F1F3FF", height: 266, paddingTop: "7%"}}>
                    <PageHeader
                        className="site-page-header"
                        style={{margin: "0 11.8%"}}
                        onBack={() => null}
                        title={<Title level={5} style={{margin: 0}}>Pembayaran</Title>}
                        extra={[
                            <>
                                <Step text="Pilih Metode" index="1" progress={true}/>
                                <div style={{width: 28, height: 1, backgroundColor: "#0D28A6"}}/>
                                <Step text="Bayar" index="2" progress={false}/>
                                <div style={{width: 28, height: 1, backgroundColor: "#0D28A6"}}/>
                                <Step text="Tiket" index="3" progress={false}/>
                            </>
                        ]}
                    />
                </div>
            </div>
            <div style={{margin: "111px 13%"}}>
                <Row gutter={32}>
                    <Col className="gutter-row" span={13}>
                        <PaymentMethod/>
                    </Col>
                    <Col className="gutter-row" span={11}>
                        <PaymentDetail/>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default PaymentPage