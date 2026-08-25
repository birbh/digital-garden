
export default function ProfileCard({alias,name,tag,address}) {
  return (
        <section className="mx-auto max-w-md text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-zinc-400 text-3xl font-bold text-black">
            
            {alias}
          </div>

          <h1 className="text-4xl font-bold">
            {name}
          </h1>

          <p className="mt-3 text-zinc-400">
            {tag} 
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            {address}
          </p>
        </section>
  );
}
