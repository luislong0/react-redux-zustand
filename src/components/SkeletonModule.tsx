export function SkeletonModule() {
  return (
    <div className="group animate-pulse">
      <div className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-900 text-xs"></div>

        <div className="flex flex-col gap-2 text-left">
          <div className="h-2 w-40 bg-zinc-600"></div>
          <div className="h-2 w-16 bg-zinc-600"></div>
        </div>
      </div>
      <div>
        <nav className="relative flex flex-col gap-4 p-6">
          <div className="flex justify-between items-center gap-4 text-sm text-zinc-400 data-[active=true]:text-emerald-400 data-[active=true]:font-bold enabled:hover:text-zinc-100">
            <div className="h-2 w-8 bg-zinc-600"></div>
            <div className="h-2 w-full bg-zinc-600"></div>
            <div className="h-2 w-8 bg-zinc-600"></div>
          </div>

          <div className="flex justify-between items-center gap-4 text-sm text-zinc-400 data-[active=true]:text-emerald-400 data-[active=true]:font-bold enabled:hover:text-zinc-100">
            <div className="h-2 w-8 bg-zinc-600"></div>
            <div className="h-2 w-full bg-zinc-600"></div>
            <div className="h-2 w-8 bg-zinc-600"></div>
          </div>
        </nav>
      </div>

      <div className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-900 text-xs"></div>

        <div className="flex flex-col gap-2 text-left">
          <div className="h-2 w-40 bg-zinc-600"></div>
          <div className="h-2 w-16 bg-zinc-600"></div>
        </div>
      </div>
      <div>
        <nav className="relative flex flex-col gap-4 p-6">
          <div className="flex justify-between items-center gap-4 text-sm text-zinc-400 data-[active=true]:text-emerald-400 data-[active=true]:font-bold enabled:hover:text-zinc-100">
            <div className="h-2 w-8 bg-zinc-600"></div>
            <div className="h-2 w-full bg-zinc-600"></div>
            <div className="h-2 w-8 bg-zinc-600"></div>
          </div>

          <div className="flex justify-between items-center gap-4 text-sm text-zinc-400 data-[active=true]:text-emerald-400 data-[active=true]:font-bold enabled:hover:text-zinc-100">
            <div className="h-2 w-8 bg-zinc-600"></div>
            <div className="h-2 w-full bg-zinc-600"></div>
            <div className="h-2 w-8 bg-zinc-600"></div>
          </div>
        </nav>
      </div>
    </div>
  );
}
