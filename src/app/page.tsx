import { Icon } from "@iconify/react/dist/iconify.js";

export default function Home() {
  return (
    <main className="flex items-center flex-col justify-center w-full">
      <div className="flex items-center justify-center gap-3">
        <Icon icon="mdi:anvil" className="size-12 text-blue-500" />
        <h1 className="text-3xl font-semibold -mt-3">
          Lifeforge
          <span className="text-blue-500 text-5xl pl-1">.</span>
        </h1>
      </div>
      <p className="text-zinc-400 dark:text-zinc-500 mt-2 mb-6 text-lg">
        An all-in-one platform for managing your life.
      </p>
      <p className="mt-20 text-3xl uppercase tracking-widest">Coming Soon!</p>
    </main>
  );
}
