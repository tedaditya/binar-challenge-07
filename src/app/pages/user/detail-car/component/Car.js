import {Card, Space, Spin, Typography} from "antd";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import SubmitButton from "../../../component/ButtonSubmit";
import {getCarById} from "../../../../../setup/redux/action/CarAction";
import {Calendar, CarCard, Setting, User} from "../../../../../assets/media";

const {Text, Title} = Typography;

const Car = () => {
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
                    <div className="text-center mt-4 mb-5">
                        <img src={CarCard} alt=""/>
                    </div>
                    <Space direction="vertical" size={48} style={{display: 'flex'}}>
                        <Space direction="vertical" size={9} style={{display: 'flex'}}>
                            <Space direction="vertical" size={8} style={{display: 'flex'}}>
                                <Title level={5} style={{fontSize: 14}}>{dataSelection.name}</Title>
                            </Space>
                            <Space size={16} style={{display: 'flex'}}>
                                <Space size={8} style={{display: 'flex'}}>
                                    <img style={{width: 12}} src={User} alt=""/>
                                    <Text style={{fontSize: 10}} type="secondary" className="product-category">{carSpecs.capacity} Orang</Text>
                                </Space>
                                <Space size={8} style={{display: 'flex'}}>
                                    <img style={{width: 12}} src={Setting} alt=""/>
                                    <Text style={{fontSize: 10}} type="secondary" className="product-category">{carSpecs.transmission}</Text>
                                </Space>
                                <Space size={8} style={{display: 'flex'}}>
                                    <img style={{width: 12}} src={Calendar} alt=""/>
                                    <Text style={{fontSize: 10}} type="secondary" className="product-category">{carSpecs.productionYear}</Text>
                                </Space>
                            </Space>
                        </Space>
                        <div style={{width: "100%", marginBottom: 24}}>
                            <Text>Total</Text>
                            <div style={{float: "right"}}><Title level={5} style={{fontSize: 14}}>
                                {dataSelection.price?.toLocaleString('id-ID', {
                                    style: 'currency',
                                    currency: 'IDR',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                })}
                            </Title>
                            </div>
                        </div>
                    </Space>
                    <SubmitButton text="Lanjutkan Pembayaran" onClick={false} linkTo={`/payment/${id}`}/>
                </Card>
            }
        </>
    )
}

export default Car