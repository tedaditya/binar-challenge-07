import {Button, Layout, Menu, Space, Typography, Input} from 'antd';
import {Administrator, Home, LogoBlue, LogoRectangle, LogoRectangleV2} from "../../assets/media";
import {Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../setup/redux/action/AuthAction";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

const {Search} = Input;
const {Text, Title} = Typography;
const {Header, Content, Footer, Sider} = Layout;

const AdminMasterLayout = (props) => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const {isLoading, dataAuth} = useSelector((state) => state.auth);

    function handleLogout() {
        Cookies.remove('token')
        Cookies.remove('role')
        navigate('/login')
    }

    const menu = (
        <Menu
            items={[
                {
                    label: (
                        <a onClick={handleLogout}>
                            Logout
                        </a>
                    ),
                    key: '0',
                },
            ]}
        />
    )
    return (
        <>
            <Layout>
                <Sider
                    style={{backgroundColor: "#0D28A6"}}
                    width={70}
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <img src={LogoRectangle} style={{margin: 18}} alt=""/>
                    <img src={Home} alt=""/>
                    <img src={Administrator} alt=""/>
                </Sider>
                <Layout>
                    <Content style={{minHeight: "100vh"}}>
                        <Layout className="layout">
                            <Header style={{backgroundColor: "#FFFFFF"}}>
                                <div style={{margin: "0", display: "inline", boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)"}}>
                                    <img src={LogoRectangleV2} alt=""/>
                                    <div style={{float: "right"}}>
                                        <Space size={32}>
                                            <Dropdown overlay={menu} placement="bottomLeft" arrow>
                                                <Space>
                                                    <div style={{
                                                        backgroundColor: "#CFD4ED",
                                                        height: 38,
                                                        width: 38,
                                                        borderRadius: 999
                                                    }}/>
                                                    <Text>Unis Badris</Text>
                                                    <DownOutlined/>
                                                </Space>
                                            </Dropdown>
                                        </Space>
                                    </div>
                                </div>
                            </Header>
                            <Content style={{minHeight: "100vh"}}>
                                <Layout>
                                    <Sider
                                        style={{backgroundColor: "#FFFFFF"}}
                                        width={220}
                                    >
                                        <Title level={5} style={{color: "#8A8A8A", margin: "35px 0 30px 24px"}}>DASHBOARD</Title>
                                        <Menu
                                            mode="inline"
                                            defaultSelectedKeys={['1']}
                                            style={{color: "#B0B0B0"}}
                                        >
                                            <Menu.Item key="1" style={{color: "black", fontWeight: "bold"}}>Dashboard</Menu.Item>
                                        </Menu>
                                    </Sider>
                                    <Layout>
                                        <Content style={{minHeight: "100vh", backgroundColor: "#f4f5f7"}}>
                                            <Layout className="layout">
                                                <Content style={{padding: '25px 32px', minHeight: "100vh"}}>
                                                    {props.content}
                                                </Content>
                                            </Layout>
                                        </Content>
                                        <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                                    </Layout>
                                </Layout>
                            </Content>
                        </Layout>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default AdminMasterLayout