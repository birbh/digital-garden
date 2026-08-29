import next from "next";

export default function CurrentFocus(){
    return(
        <section className="mt-16 w-full border-l-2 border-emerald-400 pl-5">
              <p className="text-sm uppercase tracking-widest text-emerald-300">
                Currently exploring:
              </p>
              <h2 className="mt-3 text-2xl font-bold">
                Hardware design and Full-stack Development
              </h2>
              <p className="mt-3 leading-7 text-zinc-400">
                I am learning how to design better hardware systems while building practical web applications with modern development tools.
              </p>

        </section>
    );
}
