
export default function ProfileCard({alias,name,tag,address,intro}) {
  return (
        <section className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center shadow-[0_0_40px_rgba(110,231,183,0.25)] rounded-full border border-emerald-300 bg-emerald-300 text-4xl font-bold text-black">
            {alias}
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            {name}
          </h1>

          <p className="mt-4 text-emerald-400 text-lg">
            {tag} 
          </p>

          <p className="mt-2 text-zinc-500">
            {address}
          </p>
          <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-zinc-400">
            {intro}
          </p>
        </section>
  );
}
