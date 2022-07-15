import {Row, Col, Typography, Button, Space} from 'antd';
import {CarMercedes} from "../../../../../assets/media";

const {Title, Text} = Typography;

const Home = () => {
    return (
        <>
            <div style={{height: 500, backgroundColor: "#F1F3FF", top: 0}}>
                <Row align="middle" style={{height: "100%"}}>
                    <Col span={9} offset={3}>
                        <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                            <Title level={2}>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</Title>
                            <Text>
                                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan
                                harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24
                                jam.
                            </Text>
                            <Button style={{backgroundColor: "#5CB85F", height: 36}}>
                                <Text strong style={{color: "white"}}>Mulai Sewa Mobil</Text>
                            </Button>
                        </Space>
                    </Col>
                    <Col span={12} style={{height: "100%"}}>
                        <div style={{
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "flex-end",
                            height: "100%",
                            width: "100%"
                        }}>
                            <img src={CarMercedes} alt=""/>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Home