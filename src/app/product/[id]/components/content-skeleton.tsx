import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function ProductDetailsContentSkeleton() {
  return (
    <main className="w-full h-full min-h-[calc(100vh-160px)] max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col gap-8">
        <div className="mb-6">
          <Skeleton className="w-full max-w-2xl h-8" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="w-full h-full max-h-[400px] px-12">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="flex flex-col justify-between gap-6">
            <div>
              <Skeleton className="w-full max-w-48 h-8" />
              <div className="space-y-2 mt-2">
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-full h-4" />
              </div>
            </div>
            <div className="space-y-4">
              <Skeleton className="w-full max-w-32 h-8" />
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <Skeleton className="w-full max-w-32 h-8" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline gap-2">
                      <Skeleton className="w-full max-w-56 h-8" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Skeleton className="w-full h-8" />
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <Skeleton className="w-full max-w-32 h-8" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline gap-2">
                      <Skeleton className="w-full max-w-56 h-8" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Skeleton className="w-full h-8" />
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
