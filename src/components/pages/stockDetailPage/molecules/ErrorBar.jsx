const ErrorBar = () => {
  return (
    <div
      className={
        "error-bar flex h-full w-[20px] flex-shrink-0 transform flex-col items-center justify-center border-2 border-red-700 bg-red-300"
      }
    >
      <div className={"font-sm font-bold text-red-600"}>!</div>
    </div>
  );
};

export default ErrorBar;
