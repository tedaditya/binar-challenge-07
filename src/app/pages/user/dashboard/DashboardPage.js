import Home from "./component/Home";
import SearchCar from "./component/SearchCar";
import PieChart from "./component/PieChart";
import {Col} from "antd";
import {useEffect} from "react";
import {getAllCar} from "../../../../setup/redux/action/CarAction";
import {useDispatch} from "react-redux";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

const DashboardPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if(Cookies.get('role') !== 'customer') {
            navigate("/admin")
        }
    }, []);

    return (
        <>
            <Home/>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    marginTop: -80,
                }}
            >
                <SearchCar/>
            </div>
            <Col align="center">
                <div
                    style={{
                        marginTop: 80,
                        left: 0,
                        right: 0,
                        width: 500
                    }}
                >
                    <PieChart/>
                </div>
            </Col>

        </>
    )
}

export default DashboardPage