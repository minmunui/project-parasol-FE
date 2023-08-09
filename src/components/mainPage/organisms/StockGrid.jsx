import StockCard from "../atoms/StockCard";

const StockGrid = ({ stocks }) => {
  return (
    <div className="stock-grid grid w-full max-w-[1296px] grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {stocks.map((stock, index) => (
        <StockCard stock={stock} key={index} />
      ))}
    </div>
  );
};

export default StockGrid;
