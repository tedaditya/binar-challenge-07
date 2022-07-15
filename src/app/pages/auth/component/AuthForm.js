import {Typography, Input, Space, Button, Divider} from 'antd';
import {Google, Logo} from "../../../../assets/media";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {authLogin, authRegister} from "../../../../setup/redux/action/AuthAction";

const {Title, Text} = Typography;

const AuthForm = (props) => {
    let navigate = useNavigate()
    const [input, setInput] = useState([])
    const dispatch = useDispatch()
    const {isLoading, dataAuth, error} = useSelector((state) => state.auth);

    const handleChange = (event) => {
        dispatch({
            type: `ERROR`,
            error: null,
        })
        let value = event.target.value
        let name = event.target.name

        setInput({...input, [name]: value})
    }

    const handleSubmit = () => {
        props.page === "Sign In" ?
            dispatch(authLogin(input.email, input.password, navigate)) :
            dispatch(authRegister(input.email, input.password, navigate))
    }

    return (
        <>
            <Space direction="vertical" size={32} style={{display: 'flex'}}>
                <img src={Logo} alt=""/>
                <Title level={3} style={{margin: 0}}>{props.title}</Title>
                {error === null ? "" :
                    <div style={{backgroundColor: '#fbe7e9', padding: '12px 16px', borderRadius: 5}}>
                        <Text style={{color: '#D00C1A'}}>Masukkan username dan password yang benar. Perhatikan
                            penggunaan huruf kapital. Kalau tetap tidak bisa, API sedang maintenance</Text>
                    </div>}
                <Space direction="vertical" size={16} style={{display: 'flex'}}>
                    <Space direction="vertical" size={8} style={{display: 'flex'}}>
                        <Text>Email</Text>
                        <Input placeholder="Email"
                               style={{
                                   height: 38,
                                   borderRadius: 5,
                                   border: "2px solid rgba(0, 0, 0, 0.1)"
                               }}
                               name="email" type="email" value={input.email}
                               onChange={handleChange}/>
                    </Space>
                    <Space direction="vertical" size={8} style={{display: 'flex'}}>
                        <Text>Password</Text>
                        <Input type="password" placeholder="Password"
                               style={{
                                   height: 38,
                                   borderRadius: 5,
                                   border: "2px solid rgba(0, 0, 0, 0.1)"
                               }}
                               name="password"
                               value={input.password} onChange={handleChange} required/>
                    </Space>
                </Space>
                <Space direction="vertical" size={8} style={{display: 'flex'}}>
                    <Button
                        type="primary"
                        style={{
                            width: "100%",
                            height: 36,
                            backgroundColor: "#0D28A6",
                            borderRadius: 2
                        }}
                        onClick={handleSubmit}
                        loading={isLoading}
                    >
                        {props.page}
                    </Button>
                    {props.page === "Sign In" ?
                        <p className="sign-in">New Here? <Link to="/register">Create an Account</Link></p> :
                        <p className="sign-in">Already have an account? <Link to="/">Sign In</Link></p>}
                    <Divider plain>atau</Divider>
                    <Button
                        type="primary"
                        style={{
                            width: "100%",
                            height: 36,
                            backgroundColor: "#FFFFFF",
                            borderRadius: 2,
                            color: "black",
                            border: "2px solid rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        <img src={Google} alt=""
                             style={{height: 20, marginRight: 10, backgroundSize: "cover"}}/>
                        {props.page} with Google
                    </Button>
                </Space>
            </Space>
        </>
    )
}

export default AuthForm