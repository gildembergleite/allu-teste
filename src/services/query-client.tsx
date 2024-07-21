// import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { QueryClient } from '@tanstack/react-query'
// import { persistQueryClient } from '@tanstack/react-query-persist-client'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchInterval: 1000 * 60 * 60 * 1,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      retryDelay: 1000,
    },
  },
})

// persistQueryClient({
//   queryClient,
//   persister: createSyncStoragePersister({
//     storage: typeof window !== 'undefined' ? window.localStorage : undefined,
//   }),
//   maxAge: Infinity,
// })

export { queryClient }
