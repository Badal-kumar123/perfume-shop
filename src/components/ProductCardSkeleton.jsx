export default function ProductCardSkeleton() {
  return (
    <div className="bg-black rounded-lg overflow-hidden shadow animate-pulse">
      <div className="h-64 bg-gray-200" />
      <div className="p-4 space-y-2">
        <div className="h-6 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="mt-2 flex items-center justify-between">
          <div className="h-5 w-20 bg-gray-200 rounded" />
          <div className="h-8 w-20 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
