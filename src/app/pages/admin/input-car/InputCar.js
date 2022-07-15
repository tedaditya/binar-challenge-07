import {Breadcrumb, Button, Card, Col, Form, Input, Row, Space, Typography, message, Upload} from "antd";
import {CaretRight} from "phosphor-react";
import {Link, useNavigate} from "react-router-dom";
import {UploadOutlined} from "@ant-design/icons";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {newCar} from "../../../../setup/redux/action/CarAction";

const {Title, Text} = Typography;
const layout = {
    labelCol: {
        span: 3,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    marginTop: 200,
    wrapperCol: {
        span: 16,
    },
};

const InputCar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [fileList, setFileList] = useState({})
    const [form] = Form.useForm();
    const {isLoading, error} = useSelector((state) => state.car);

    const props = {
        onChange({fileList}) {
            setFileList({fileList})
        },
    };

    const onFinish = async (values) => {
        console.log(values)
        let img = fileList.fileList[0].originFileObj
        let formData = new FormData();
        formData.append('image', img)
        formData.append('name', values.name)
        formData.append('category', "small")
        formData.append('price', values.price)
        formData.append('status', false)
        await dispatch(newCar(formData))
        if (error) {
            message.error('Data Gagal Disimpan,');
        } else {
            message.success('Data Berhasil Disimpan');
            navigate('/admin')
        }
    };

    const onReset = () => {
        form.resetFields();
    };
    return (
        <>
            <Breadcrumb style={{marginBottom: 24}} separator={<CaretRight size={16} weight="bold"/>}>
                <Breadcrumb.Item>Cars</Breadcrumb.Item>
                <Breadcrumb.Item>List Car</Breadcrumb.Item>
                <Breadcrumb.Item>Add New Car</Breadcrumb.Item>
            </Breadcrumb>
            <Space direction="vertical" size={16} style={{width: "100%"}}>
                <Title level={3} style={{marginBottom: 24}}>List Car</Title>
                <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} labelAlign="left">
                    <Card bordered={false}
                          style={{
                              width: "100%",
                              // boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                              borderRadius: 8,
                          }}>
                        <Form.Item
                            name="name"
                            label="Nama"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input style={{border: "1px solid #D0D0D0", borderRadius: 2,}}/>
                        </Form.Item>
                        <Form.Item
                            name="price"
                            label="Harga"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input type="number"/>
                        </Form.Item>
                        <Form.Item
                            name="photo"
                            label="Foto"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            {/*<input type="file" name="myImage" onChange={onImageChange} title=" "/>*/}
                            <Upload {...props} beforeUpload={() => false}>
                                <Button icon={<UploadOutlined/>}>Click to Upload</Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item
                            name="photo"
                            label="Start Rent"
                            rules={[
                                {
                                    required: false,
                                },
                            ]}
                        >
                            -
                        </Form.Item>
                        <Form.Item
                            name="photo"
                            label="Finish Rent"
                            rules={[
                                {
                                    required: false,
                                },
                            ]}
                        >
                            -
                        </Form.Item>
                        <Form.Item
                            name="photo"
                            label="Created At"
                            rules={[
                                {
                                    required: false,
                                },
                            ]}
                        >
                            -
                        </Form.Item>
                        <Form.Item
                            name="photo"
                            label="Updated At"
                            rules={[
                                {
                                    required: false,
                                },
                            ]}
                        >
                            -
                        </Form.Item>
                    </Card>
                    <footer>
                        <Form.Item {...tailLayout}>
                            <Space style={{marginTop: 20}}>
                                <Link to="/admin">
                                    <Button style={{border: "1px solid #0D28A6", color: "#0D28A6"}} htmlType="button"
                                            onClick={onReset}>
                                        Cancel
                                    </Button>
                                </Link>
                                <Button style={{background: "#0D28A6", borderRadius: 2}} type="primary"
                                        htmlType="submit">
                                    Save
                                </Button>
                            </Space>
                        </Form.Item>
                    </footer>
                </Form>
            </Space>
        </>
    )
}

export default InputCar