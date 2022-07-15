import {Layout, Menu, Button, Typography, Space} from 'antd';
import {Facebook, Instagram, LogoBlue, Mail, Twitch, Twitter} from "../../assets/media";
import {Row, Col} from 'antd';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../setup/redux/action/AuthAction";
import Cookies from "js-cookie";

const {Text, Link} = Typography;
const {Header, Content, Footer} = Layout;

const UserMasterLayout = (props) => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoading, dataAuth} = useSelector((state) => state.auth);

    function handleLogout() {
        Cookies.remove('token')
        Cookies.remove('role')
        navigate('/login')
    }

    return (
        <>
            <Layout className="layout">
                <Header style={{backgroundColor: "#F1F3FF", width:"100%"}}>
                    <div style={{margin: "0 136px"}}>
                        <img src={LogoBlue} alt=""/>
                        <div style={{float: "right"}}>
                            <Space size={32}>
                                <Text>Our Services</Text>
                                <Text>Why Us</Text>
                                <Text>Testimonial</Text>
                                <Text>FAQ</Text>
                                <Button style={{
                                    height: 36,
                                    backgroundColor: "#FA2C5A",
                                    borderRadius: 2,
                                    color: "white"
                                }} onClick={handleLogout}>Logout</Button>
                            </Space>
                        </div>
                    </div>
                </Header>
                <Content style={{minHeight: "100vh", backgroundColor: "white"}}>
                    {props.content}
                </Content>
                <Footer style={{backgroundColor: "white"}}>
                    <div style={{margin: "0 136px"}}>
                        <Row>
                            <Col span={6}>
                                <Space direction="vertical" size={16} style={{display: 'flex'}}>
                                    <Text>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</Text>
                                    <Text>binarcarrental@gmail.com</Text>
                                    <Text>081-233-334-808</Text>
                                </Space>
                            </Col>
                            <Col span={6}>
                                <Space direction="vertical" size={16} style={{display: 'flex'}}>
                                    <Text strong>Our services</Text>
                                    <Text strong>Why Us</Text>
                                    <Text strong>Testimonial</Text>
                                    <Text strong>FAQ</Text>
                                </Space>
                            </Col>
                            <Col span={6}>
                                <Space direction="vertical" size={16} style={{display: 'flex'}}>
                                    <Text>Connect with us</Text>
                                    <Space>
                                        <img src={Facebook} alt="facebook"/>
                                        <img src={Instagram} alt="instagran"/>
                                        <img src={Twitter} alt="twitter"/>
                                        <img src={Mail} alt="mail"/>
                                        <img src={Twitch} alt="twitch"/>
                                    </Space>
                                </Space>
                            </Col>
                            <Col span={6}>
                                <Space direction="vertical" size={16} style={{display: 'flex'}}>
                                    <Text>Copyright Binar 2022</Text>
                                    <img src={LogoBlue} alt=""/>
                                </Space>
                            </Col>
                        </Row>
                    </div>
                </Footer>
            </Layout>
        </>
    )
}

export default UserMasterLayout