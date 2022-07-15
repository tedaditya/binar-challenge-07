import {Button, Card, Space, Typography, Collapse, Input, message, Upload} from "antd";
import Radio from "antd/es/radio/radio";
import SubmitButton from "../../../component/ButtonSubmit";
import {InboxOutlined} from '@ant-design/icons';
import {useParams} from "react-router-dom";

const {Dragger} = Upload;
const {Text, Title} = Typography;
const {Panel} = Collapse;

const ConfirmationUpload = () => {
    let {id} = useParams();

    const props = {
        onChange(info) {
            const {status} = info.file;

            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }

            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    }

    return (
        <>
            <Card
                bordered={false}
                style={{
                    width: "100%",
                    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                    borderRadius: 8
                }}>
                <Space direction="vertical" size={16} style={{display: 'flex'}}>
                    <Title level={5} style={{fontSize: 14, margin: 0}}>Konfirmasi Pembayaran</Title>
                    <Text>Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu
                        kurang lebih 10 menit untuk mendapatkan konfirmasi.</Text>
                    <Title level={5} style={{fontSize: 14, margin: 0}}>Upload Bukti Pembayaran</Title>
                    <Text>Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</Text>
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                            band files
                        </p>
                    </Dragger>
                    <SubmitButton text="Upload" onClick={false} linkTo={`/success/${id}`}/>
                </Space>
            </Card>
        </>
    )
}

export default ConfirmationUpload