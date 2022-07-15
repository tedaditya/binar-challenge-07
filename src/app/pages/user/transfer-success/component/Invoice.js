import {Card, Button, Row, Col, Space, Typography} from "antd";
import {Worker, Viewer} from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import invoice from './invoice.pdf'
import {DownloadOutlined} from '@ant-design/icons';

const {Text, Title} = Typography;

const Invoice = () => {

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
                    <Row style={{marginBottom: 10}}>
                        <Col span={12}>
                            <Title level={5} style={{fontSize: 14, margin: 0}}>Invoice</Title>
                        </Col>
                        <Col span={12} align="right">

                            <a href={invoice} download="proposed_file_name"><Button type="submit" style={{
                                border: "1px solid #0D28A6",
                                borderRadius: 2,
                                color: "#0D28A6"
                            }}><DownloadOutlined/>Unduh</Button></a>
                        </Col>
                    </Row>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
                        <div
                            style={{
                                border: '1px dashed #D0D0D0',
                                borderRadius: 4,
                                height: '300px',
                            }}
                        >
                            <Viewer fileUrl={invoice}/>
                        </div>
                    </Worker>

                </Space>
            </Card>
        </>
    )
}

export default Invoice