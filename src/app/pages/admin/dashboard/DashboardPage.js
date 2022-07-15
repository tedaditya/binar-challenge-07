import {Typography, Table, Space, Breadcrumb} from 'antd'
import {Rectangle} from "../../../../assets/media";
import {CaretRight} from "phosphor-react";
import {css} from "@emotion/css";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import Cookies from "js-cookie";

const {Title, Text} = Typography;

const DashboardPage = () => {
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
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>

            <Title level={3} style={{marginBottom: 24}}>Dashboard</Title>
            <Space style={{marginBottom: 24}}>
                <img src={Rectangle} alt=""/>
                <Title level={5} style={{margin: 0}}>List Order</Title>
            </Space>
            <Table columns={columns} style={{
                borderRadius: 8,
                overflow: "hidden",
                boxShadow: "0 0 0 1px #CED4DA",
                cursor: "pointer"
            }} className={tableCSS} dataSource={data}/>
        </>
    )
}

export default DashboardPage