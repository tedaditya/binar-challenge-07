import {
    BrowserRouter,
    Routes,
    Route, Navigate,
} from "react-router-dom";
import Cookies from 'js-cookie';
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import DashboardPage from "../pages/user/dashboard/DashboardPage";
import {default as AdminDashboardPage} from "../pages/admin/dashboard/DashboardPage";
import UserMasterLayout from "../layout/UserMasterLayout";
import AdminMasterLayout from "../layout/AdminMasterLayout";
import ResultPage from "../pages/user/search-result/ResultPage";
import DetailPage from "../pages/user/detail-car/DetailPage";
import PaymentPage from "../pages/user/payment/PaymentPage";
import TransferPage from "../pages/user/transfer/TransferPage";
import TransferSuccessPage from "../pages/user/transfer-success/TransferSuccessPage";
import CarsPage from "../pages/admin/cars/CarsPage";
import InputCar from "../pages/admin/input-car/InputCar";

const RouteIndex = () => {
    function useAuth() {
        return Cookies.get('token') === undefined;
    }

    const PrivateRoute = ({children}) => {
        const auth = useAuth()
        return auth ? <Navigate to="/login"/> : children
    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/" element={
                        <PrivateRoute>
                            <UserMasterLayout content={<DashboardPage/>}/>
                        </PrivateRoute>
                    }/>
                    <Route path="/search" element={
                        <PrivateRoute>
                            <UserMasterLayout content={<ResultPage/>}/>
                        </PrivateRoute>
                    }/>
                    <Route path="/detail/:id" element={
                        <PrivateRoute>
                            <UserMasterLayout content={<DetailPage/>}/>
                        </PrivateRoute>
                    }/>
                    <Route path="/payment/:id" element={
                        <PrivateRoute>
                            <UserMasterLayout content={<PaymentPage/>}/>
                        </PrivateRoute>
                    }/>
                    <Route path="/transfer/:id" element={
                        <PrivateRoute>
                            <UserMasterLayout content={<TransferPage/>}/>
                        </PrivateRoute>
                    }/>
                    <Route path="/success/:id" element={
                        <PrivateRoute>
                            <UserMasterLayout content={<TransferSuccessPage/>}/>
                        </PrivateRoute>
                    }/>
                    <Route path="/admin" element={
                        <PrivateRoute>
                            <AdminMasterLayout content={<CarsPage/>} />
                            {/*<AdminMasterLayout content={<AdminDashboardPage/>} />*/}
                        </PrivateRoute>
                    }/>
                    <Route path="/input" element={
                        <PrivateRoute>
                            <AdminMasterLayout content={<InputCar/>} />
                        </PrivateRoute>
                    }/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouteIndex