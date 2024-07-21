import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonCard() {
  return (
    <div className="flex flex-col bg-card h-full rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border">
      <Skeleton className="min-w-[300px] min-h-[200px]" />
      <div className="flex flex-col h-full justify-between p-4">
        <div className="w-full space-y-2">
          <Skeleton className="w-full h-5" />
          <Skeleton className="w-32 h-5" />
        </div>
        <div className="my-2 space-y-2">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-8 w-28" />
        </div>
      </div>
    </div>
  )
}
