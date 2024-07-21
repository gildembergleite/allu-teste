import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { ChangeEvent } from 'react'

export function SearchProducts({
  searchFn,
}: {
  searchFn: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div className="relative w-full">
      <SearchIcon className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Buscar produtos..."
        onChange={searchFn}
        className="w-full bg-background shadow-none appearance-none pl-8"
      />
    </div>
  )
}
