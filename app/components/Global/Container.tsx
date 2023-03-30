export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto py-6 px-6 sm:px-6 lg:px-8 pt-20 pb-28 min-h-[calc(100vh-124px)]">
      <div className="flex-grow">{children}</div>
    </div>
  );
};
