const GreetingsSkeleton = () => {
  return (
    <div className="w-full py-2">
      <div className="animate-pulse flex space-x-1">
        <div className="rounded-full bg-gray-300 h-6 w-6"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-gray-300 rounded"></div>
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-gray-300 rounded col-span-2"></div>
              <div className="h-2 bg-gray-300 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetingsSkeleton;
