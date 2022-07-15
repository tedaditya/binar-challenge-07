import {Space, Typography} from "antd";
const {Text} = Typography;

const Step = (props) => {

    return(
        <>
            <Space>
                <div style={{
                    backgroundColor: props.progress? "#0D28A6" : "white",
                    border: props.progress? "" : "1px solid #0D28A6",
                    width: 16,
                    height: 16,
                    fontSize: 10,
                    borderRadius: 999,
                    color: props.progress? "white" : "black",
                    paddingLeft: 4.5,
                    paddingTop: 0.7
                }}>{props.index}</div>
                <Text>{props.text}</Text>
            </Space>
        </>
    )
}

export default Step