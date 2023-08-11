

const PriceGraph = ({ stockCode }) => {
    const priceData = useQuery(["price", stockCode], () => {
        return axios.get(`http://localhost:8080/stock/${stockCode}/price`)
            .then((res) => {
                return res.data
            })
    }
    )

    return (
        <div className={""}>
            Graph
        </div>
    )
}

export default PriceGraph