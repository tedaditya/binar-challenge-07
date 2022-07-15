import ProductCard from "./component/ProductCard";
import SearchCar from "../dashboard/component/SearchCar";

const ResultPage = () => {
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
            <div style={{marginTop: 111, padding:"0 13%"}}>
                <ProductCard/>
            </div>
        </>
    )
}

export default ResultPage