import {Row, Col} from "antd";
import Detail from "./component/Detail";
import SearchCar from "../dashboard/component/SearchCar";
import Car from "./component/Car";

const DetailPage = () => {

    return (
        <>
            <div
                style={{
                    position: "relative"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        marginTop: 170,
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    <SearchCar search={true}/>
                </div>
                <div style={{background: "#F1F3FF", height: 266}}/>
            </div>
            <div style={{margin: "111px 13%"}}>
                <Row gutter={32}>
                    <Col className="gutter-row" span={14}>
                        <Detail/>
                    </Col>
                    <Col className="gutter-row" span={10}>
                        <Car/>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default DetailPage