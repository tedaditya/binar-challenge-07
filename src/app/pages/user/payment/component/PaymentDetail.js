import {Card, Collapse, Space, Spin, Typography, Row, Col} from "antd";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import SubmitButton from "../../../component/ButtonSubmit";
import {getCarById} from "../../../../../setup/redux/action/CarAction";
import {Calendar, CarCard, Setting, User} from "../../../../../assets/media";

const {Panel} = Collapse;
const {Text, Title} = Typography;

const PaymentDetail = () => {
    let {id} = useParams();
    const dispatch = useDispatch()
    const {isLoading, dataSelection, carSpecs} = useSelector((state) => state.car);

    useEffect(() => {
        dispatch(getCarById(id))
    }, []);

    return (
        <>
            {isLoading ? <Spin className="d-flex justify-content-center align-items-center"/> :
                <Card bordered={false}
                      style={{
                          width: "100%",
                          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                          borderRadius: 8
                      }}>
                    <Space direction="vertical" size={48} style={{display: 'flex'}}>
                        <Space direction="vertical" size={1} style={{display: 'flex'}}>
                            <Space direction="vertical" size={8} style={{display: 'flex'}}>
                                <Title level={5} style={{fontSize: 14}}>{dataSelection.name}</Title>
                            </Space>
                            <Space size={16} style={{display: 'flex'}}>
                                <Space size={8} style={{display: 'flex'}}>
                                    <img style={{width: 12}} src={User} alt=""/>
                                    <Text style={{fontSize: 10}} type="secondary"
                                          className="product-category">{carSpecs.capacity} Orang</Text>
                                </Space>
                                <Space size={8} style={{display: 'flex'}}>
                                    <img style={{width: 12}} src={Setting} alt=""/>
                                    <Text style={{fontSize: 10}} type="secondary"
                                          className="product-category">{carSpecs.transmission}</Text>
                                </Space>
                                <Space size={8} style={{display: 'flex'}}>
                                    <img style={{width: 12}} src={Calendar} alt=""/>
                                    <Text style={{fontSize: 10}} type="secondary"
                                          className="product-category">{carSpecs.productionYear}</Text>
                                </Space>
                            </Space>
                        </Space>
                        <div style={{width: "100%", marginBottom: 24}}>
                            <Collapse defaultActiveKey={['1']} accordion bordered={false} expandIconPosition="right"
                                      style={{background: "white"}}>
                                <Panel className="custom" header={<Text style={{fontSize: 14}}>Total</Text>} key="1">
                                    <Space direction="vertical" size={24} style={{width: "100%"}}>
                                        <div>
                                            <Title style={{fontSize: 14}}>Harga</Title>
                                            <ul style={{paddingLeft: "1rem"}}>
                                                <Space direction="vertical" size={4} style={{display: 'flex'}}>
                                                    <li>
                                                        <Row>
                                                            <Col span={12} align="left">
                                                                <Text>1 Mobil dengan sopir</Text>
                                                            </Col>
                                                            <Col span={12} align="right">
                                                                <Title level={5} style={{
                                                                    justifyContent: "right",
                                                                    fontSize: 14,
                                                                    margin: 0
                                                                }}>Rp. 290.000</Title>
                                                            </Col>
                                                        </Row>
                                                    </li>
                                                </Space>
                                            </ul>
                                        </div>

                                        <div>
                                            <Title style={{fontSize: 14}}>Biaya Lainnya</Title>
                                            <ul style={{paddingLeft: "1rem"}}>
                                                <Space direction="vertical" size={4} style={{display: 'flex'}}>
                                                    <li>
                                                        <Row>
                                                            <Col span={12} align="left">
                                                                <Text>Pajak</Text>
                                                            </Col>
                                                            <Col span={12} align="right">
                                                                <Text style={{
                                                                    justifyContent: "right",
                                                                    color: "#5CB85F"
                                                                }}>Termasuk</Text>
                                                            </Col>
                                                        </Row>
                                                    </li>
                                                    <li>
                                                        <Row>
                                                            <Col span={12} align="left">
                                                                <Text>Biaya makan sopir</Text>
                                                            </Col>
                                                            <Col span={12} align="right">
                                                                <Text style={{
                                                                    justifyContent: "right",
                                                                    color: "#5CB85F"
                                                                }}>Termasuk</Text>
                                                            </Col>
                                                        </Row>
                                                    </li>
                                                </Space>
                                            </ul>
                                        </div>

                                        <div>
                                            <Title style={{fontSize: 14}}>Belum Termasuk</Title>
                                            <ul style={{paddingLeft: "1rem"}}>
                                                <Space direction="vertical" size={4} style={{display: 'flex'}}>
                                                    <li><Text>Bensin</Text></li>
                                                    <li><Text>Tol dan parkir</Text></li>
                                                </Space>
                                            </ul>
                                        </div>
                                    </Space>

                                </Panel>
                            </Collapse>
                        </div>
                    </Space>
                    <SubmitButton text="Lanjutkan Pembayaran" onClick={false} linkTo={`/transfer/${id}`}/>
                </Card>
            }
        </>
    )
}

export default PaymentDetail