import {useParams} from "react-router-dom";

const StockDetailPage = () => {
    const id = useParams().id;
    return (
        <div className={"stock-detail-page page w-max-[1024px] flex flex-col"}>
            StockDetailPage
        </div>
    )
}

export default StockDetailPage;