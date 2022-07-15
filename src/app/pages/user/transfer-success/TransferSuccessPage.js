import {Button, Result, Col, PageHeader, Row, Space, Typography} from "antd";
import Step from "../payment/component/Step";
import TimeLimit from "../transfer/component/TimeLimit";
import TransferAccount from "../transfer/component/TransferAccount";
import TransferInstruction from "../transfer/component/TransferInstruction";
import ConfirmationUpload from "../transfer/component/ConfirmationUpload";
import Invoice from "./component/Invoice";

const {Title, Text} = Typography;

const TransferSuccessPage = () => {
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
                <div style={{background: "#F1F3FF", height: 164, paddingTop: "2%"}}>
                    <div style={{margin: "0 11.8%"}}>
                        <PageHeader
                            className="site-page-header"
                            onBack={() => null}
                            title={<Title level={5} style={{margin: 0}}>Tiket</Title>}
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
                <Result
                    status="success"
                    title={<Title level={5}>Pembayaran Berhasil!</Title>}
                    subTitle={<Text type='secondary'>Tunjukkan invoice ini ke petugas BCR di titik temu.</Text> }
                />
                <Invoice/>
            </div>
        </>
    )
}

export default TransferSuccessPage