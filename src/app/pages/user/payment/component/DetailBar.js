import {Card, Row, Col, Select, Typography, Space, Button, DatePicker, TimePicker} from 'antd';
import {useNavigate} from "react-router-dom";
import styles from './Payment.module.css'
import cx from 'classname'

const {Text} = Typography;
const {Option} = Select;

const DetailBar = (props) => {
    let navigate = useNavigate();

    const onChange = value => {
        console.log(`selected ${value}`);
    };

    const onSearch = val => {
        console.log('search:', val);
    };

    const onChangeTime = (time, timeString) => {
        console.log(time, timeString);
    };

    const handleSubmit = () => {
        navigate("/search");
    }

    return (
        <>
            <div style={{margin: "0 11.7%"}}>
                <Card id="search" title={false} bordered={false} style={{
                    borderRadius: 8,
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
                    margin: 20,
                }}>
                    <Space direction="vertical" size={16} style={{display: 'flex'}}>
                        <Text className="label-text" style={{fontWeight: "bold", fontSize: 14}}>Detail Pesananmu</Text>
                        <Row gutter={16} justify="space-between" align="bottom">
                            <Col className="gutter-row" span={5}>
                                <Space direction="vertical" size={4} style={{display: 'flex'}}>
                                    <Text className={styles.labelText}>Tipe Driver</Text>
                                    <Text className={styles.labelText} type="secondary">Dengan Sopir</Text>
                                </Space>
                            </Col>
                            <Col className="gutter-row" span={5}>
                                <Space direction="vertical" size={4} style={{display: 'flex'}}>
                                    <Text className={styles.labelText}>Tanggal</Text>
                                    <Text className={styles.labelText} type="secondary">27 Mei 2022</Text>
                                </Space>
                            </Col>
                            <Col className="gutter-row" span={5}>
                                <Space direction="vertical" size={4} style={{display: 'flex'}}>
                                    <Text className={styles.labelText}>Waktu Jemput/Ambil</Text>
                                    <Text className={styles.labelText} type="secondary">10:00 WIB</Text>
                                </Space>
                            </Col>
                            <Col className="gutter-row" span={5}>
                                <Space direction="vertical" size={4} style={{display: 'flex'}}>
                                    <Text className={styles.labelText}>Jumlah Penumpang (optional)</Text>
                                    <Text className={styles.labelText} type="secondary">-</Text>
                                </Space>
                            </Col>
                        </Row>
                    </Space>
                </Card>
            </div>
        </>
    )
}

export default DetailBar