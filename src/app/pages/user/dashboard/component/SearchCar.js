import {Card, Row, Col, Select, Typography, Space, Button, DatePicker, TimePicker} from 'antd';
import { useNavigate } from "react-router-dom";
import styles from './Dashboard.module.css'
import cx from 'classname'

const {Text} = Typography;
const {Option} = Select;

const SearchCar = (props) => {
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
                        {props.search ? <Text className="label-text"
                                              style={{fontWeight: "bold", fontSize: 14}}>Pencarianmu</Text> : ""}
                        <Row gutter={16} justify="space-between" align="bottom">
                            <Col className="gutter-row" span={5}>
                                <Space direction="vertical" size={4} style={{display: 'flex'}}>
                                    <Text className={styles.labelText}>Tipe Driver</Text>
                                    <Select
                                        className={styles.inputStyle}
                                        showSearch
                                        placeholder={<Text className={styles.labelPlaceholder}>Pilih Tipe Driver</Text>}
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onSearch={onSearch}
                                        bordered={false}
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="jack">Dengan Sopir</Option>
                                        <Option value="lucy">Tanpa Sopir (Lepas Kunci)</Option>
                                    </Select>
                                </Space>
                            </Col>
                            <Col className="gutter-row" span={5}>
                                <Space direction="vertical" size={4} style={{display: 'flex'}}>
                                    <Text className={styles.labelText}>Tanggal</Text>
                                    <DatePicker
                                        className={cx(styles.inputStyle, styles.labelPlaceholder)}
                                        placeholder="Pilih Tanggal"
                                        onChange={onChange}
                                    />
                                </Space>
                            </Col>
                            <Col className="gutter-row" span={5}>
                                <Space direction="vertical" size={4} style={{display: 'flex'}}>
                                    <Text className={styles.labelText}>Waktu Jemput/Ambil</Text>
                                    <TimePicker
                                        className={cx(styles.inputStyle, styles.labelPlaceholder)}
                                        placeholder="Pilih Waktu"
                                        // defaultValue={moment('00:00:00', 'HH:mm:ss')}
                                        format="HH:mm"
                                        onChange={onChangeTime}
                                    />
                                </Space>
                            </Col>
                            <Col className="gutter-row" span={5}>
                                <Space direction="vertical" size={4} style={{display: 'flex'}}>
                                    <Text className={styles.labelText}>Jumlah Penumpang (optional)</Text>
                                    <Select
                                        className={styles.inputStyle}
                                        showSearch
                                        placeholder={<Text className={styles.labelPlaceholder}>Jumlah Penumpang</Text>}
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onSearch={onSearch}
                                        bordered={false}
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="1">1</Option>
                                        <Option value="2">2</Option>
                                        <Option value="3">3</Option>
                                        <Option value="4">4</Option>
                                    </Select>
                                </Space>
                            </Col>
                            <Col className="gutter-row" span={4}>
                                {props.search ?
                                    <Button
                                        style={{
                                            background: "white",
                                            borderRadius: 2,
                                            border: "1px solid #0D28A6",
                                            color: "#0D28A6",
                                            fontWeight: 700,
                                            width: "100%",
                                            height: 36
                                        }}
                                        onClick={handleSubmit}
                                    >
                                        Edit
                                    </Button>
                                    :
                                    <Button
                                        style={{
                                            background: "#5CB85F",
                                            borderRadius: 2,
                                            color: "white",
                                            fontWeight: 700,
                                            width: "100%",
                                            height: 36
                                        }}
                                        onClick={handleSubmit}
                                    >
                                        Cari Mobil
                                    </Button>
                                }
                            </Col>
                        </Row>
                    </Space>
                </Card>
            </div>
        </>
    )
}

export default SearchCar