export const Overlay = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center -z-10">
      <div className="absolute inset-0 bg-gray-900"></div>
      <div className="animate-fade-in">
        <div className="absolute blur-[300px] bg-blue-500 w-64 h-64 top-0 right-0"></div>
        <div className="absolute blur-[200px] bg-blue-500 w-[400px] h-64 top-64 left-64"></div>
        <div className="absolute blur-[100px] bg-blue-700 w-[400px] h-64 top-0 right-96"></div>

        <div className="absolute blur-[150px] bg-purple-900 w-64 h-64 bottom-0 left-0"></div>
        <div className="absolute blur-[300px] bg-purple-700 w-[500px] h-64 bottom-0 left-96"></div>
      </div>
    </div>
  );
};
