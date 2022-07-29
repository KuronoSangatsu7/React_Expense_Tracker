const ChartBar = () => {
  return <div className="m-2 mx-3 h-48 w-6 min-w-0 flex-grow flex-shrink">
    <div className="mx-1 h-44 bg-white border-black rounded-full flex">
        <div className="bg-violet-400 w-full h-76% rounded-full mt-auto"></div>
    </div>
    <div className="m-1 text-xs overflow-hidden">jan</div>
  </div>;
};

export default ChartBar;
