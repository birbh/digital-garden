import Image from "next/image";
export default function ProfileCard({alias,name,tag,address,intro}) {
  return (
        <section className="mx-auto max-w-xl rounded-3xl border border-[var(--border)] text-center  sm:p-12 p-8">
          <div className="mx-auto mb-6 flex h-40 w-40 overflow-hidden rounded-full border border-emerald-300 bg-emerald-300 text-4xl font-bold text-black shadow-[0_0_40px_rgba(200,100,183,0.55)]">
            <Image 
            src="/assets/pfp_img.png"
            alt={`${alias} photo`}
            width={200}
            height={200}
            className="h-full w-full object-cover"
            priority/>
          </div>

          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
            Available for interesting projects
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            {name}
          </h1>

          <p className="mt-4 text-emerald-400 text-lg">
            {tag} 
          </p>

          <p className="mt-2 text-zinc-500">
            {address}
          </p>
          <div className="mx-auto mt-6 flex w-full max-w-sm items-center gap-2 sm:flex-row sm:justify-center flex-col">
            <span className="w-full rounded-full border border-[var(--border)] px-3 py-1 text-center text-xs text-[var(--muted)] sm:w-auto">
              Open to collaboration
            </span>
            
            <span className="w-full rounded-full border border-[var(--border)] px-3 py-1 text-center text-xs text-[var(--muted)] sm:w-auto">
              Hardware + Software
            </span>
          </div>

          <p className="mx-auto mt-8 max-w-lg text-base leading-7 text-zinc-400">
            {intro}
          </p>
        </section>
  );
}
