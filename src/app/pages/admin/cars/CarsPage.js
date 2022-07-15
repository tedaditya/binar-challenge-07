import {Typography, Table, Space, Breadcrumb, Button, Col, Row} from 'antd'
import {Link, useNavigate} from "react-router-dom";
import {CaretRight} from "phosphor-react";
import {css} from "@emotion/css";
import ProductCard from "./component/ProductCard";
import {PlusOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import Cookies from "js-cookie";

const {Title, Text} = Typography;

const CarsPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if(Cookies.get('role') !== 'admin') {
            navigate("/")
        }
    }, []);

    const columns = [
        {
            title: 'No',
            dataIndex: 'no',
            key: 'no',
            render: text => <a>{text}</a>,
        },
        {
            title: 'User Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Car',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Start Rent',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Finish Rent',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Price',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Status',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    const data = []

    const tableCSS = css({
        backgroundColor: 'white',
        '& thead > tr > th': {
            backgroundColor: '#CFD4ED',
            color: 'black',
            fontWeight: 'bold'
        },
        '& thead > tr': {
            borderWidth: '2px',
            borderColor: 'yellow',
            borderStyle: 'solid'
        }
    });

    return (
        <>
            <Breadcrumb style={{marginBottom: 24}} separator={<CaretRight size={16} weight="bold"/>}>
                <Breadcrumb.Item>Cars</Breadcrumb.Item>
                <Breadcrumb.Item>List Car</Breadcrumb.Item>
            </Breadcrumb>
            <Row style={{width: "100%"}}>
                <Col span={12}>
                    <Title level={3} style={{marginBottom: 24}}>List Car</Title>
                </Col>
                <Col span={12} align="right">
                    <Link to="/input">
                        <Button type="submit" style={{
                            background: "#0D28A6",
                            borderRadius: 2,
                            color: "white"
                        }}><PlusOutlined/>Add New Car</Button>
                    </Link>
                </Col>
            </Row>
            <ProductCard/>
        </>
    )
}

export default CarsPage