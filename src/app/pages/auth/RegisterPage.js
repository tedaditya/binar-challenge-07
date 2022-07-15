import {Row, Col, Button, Space} from 'antd';
import {BackgroundCar} from "../../../assets/media";
import AuthForm from "./component/AuthForm";
import {Link} from "react-router-dom";

const RegisterPage = () => {
    return (
        <>
            <Row justify="space-around" align="middle" style={{height: "100vh"}}>
                <Col span={17} style={{backgroundColor: "darkblue"}}>
                    <img src={BackgroundCar} style={{objectFit: "cover", height: "100vh", width: "100%"}}
                         alt="Gambar Mobil"/>
                </Col>
                <Col span={7}>
                    <div style={{margin: "0 55px"}}>
                        <Space direction="vertical" size={32} style={{display: 'flex'}}>
                            <AuthForm title="Create new Account" page="Sign Up"/>
                        </Space>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default RegisterPage