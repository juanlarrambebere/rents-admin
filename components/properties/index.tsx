const Properties = () => {
  return (
    <>
      <div className="flex items-center w-full p-8 space-x-8">
        <div className="flex flex-col bg-white rounded-2xl h-96 w-80"></div>
        <div className="flex flex-grow bg-gray-400 h-80"></div>
      </div>
      <div className="flex items-center justify-center w-full p-8 space-x-16">
        <div className="flex flex-col bg-white rounded-2xl h-96 w-80"></div>
        <div className="flex flex-col bg-white rounded-2xl h-96 w-80"></div>
        <div className="flex flex-col bg-white rounded-2xl h-96 w-80"></div>
      </div>
      <div className="flex items-center justify-center w-full p-8 space-x-16">
        <div className="flex flex-col flex-grow-0 bg-white rounded-2xl h-36 w-120"></div>
      </div>
    </>
  );
};

export default Properties;
