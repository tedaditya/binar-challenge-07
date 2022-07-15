import {Row, Col, Card, Typography, Space, Button, Spin} from 'antd';
import {Calendar, User, Setting, CarCard, Clock, Key} from '../../../../../assets/media/index'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteCarById, getAllCar} from "../../../../../setup/redux/action/CarAction";
import SubmitButton from "../../../component/ButtonSubmit";
import {DeleteOutlined} from '@ant-design/icons';
import moment from "moment";

const {Text, Title} = Typography;

const ProductCard = () => {
    const dispatch = useDispatch()
    const {isLoading, data, carSpecs} = useSelector((state) => state.car);

    useEffect(() => {
        dispatch(getAllCar())
    }, []);

    const handleDelete = (id) => {
        dispatch(deleteCarById(id))
    }

    return (
        <>
            {isLoading ? <Spin className="d-flex justify-content-center align-items-center"/> : ""}
            <Row gutter={[24, 24]}>
                {data?.map((item) => {
                    return (
                        <Col classame="gutter-row" span={8}>
                            <Card bordered={false}
                                  style={{
                                      width: "100%",
                                      boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                                      borderRadius: 8,
                                  }}>
                                <Space direction="vertical" size={16} style={{display: 'flex'}}>
                                    <div className="text-center mt-4 mb-5">
                                        <img src={item.image} alt="" style={{objectFit: "cover", width: "100%", minHeight: 200}}/>
                                    </div>
                                    <Space direction="vertical" size={8} style={{display: 'flex'}}>
                                        <Text>{item.name}</Text>
                                        <Title level={5}>
                                            {item.price?.toLocaleString('id-ID', {
                                                style: 'currency',
                                                currency: 'IDR',
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0,
                                            })} / hari
                                        </Title>
                                    </Space>
                                    <Text><img src={Key} alt=""/> Start Rent - Finish Rent</Text>
                                    <Text><img src={Clock} alt=""/> Updated at {moment(item.updatedAt).format('DD MMM, YYYY')}</Text>
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Button
                                                style={{
                                                    border: "1px solid #FA2C5A",
                                                    borderRadius: 4,
                                                    color: "#FA2C5A",
                                                    fontWeight: 700,
                                                    width: "100%",
                                                    height: 48
                                                }}
                                                onClick={(() => {
                                                    handleDelete(item.id)
                                                })}><DeleteOutlined/>Delete</Button>
                                        </Col>
                                        <Col span={12}>
                                            <SubmitButton text="Edit" onClick={true}/>
                                        </Col>
                                    </Row>
                                </Space>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default ProductCard