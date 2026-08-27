
const projects=[
    {
        title:"PrintSafe",
        description:"A smart biometric storage system designed for students and teachers to securely store their personal belongings.",
        url:"https://github.com/birbh/print_safe",
        type:"Hardware",
        tags:["IOT","C++","CAD"]
    },
    {
        title:"HydroNode",
        description:"An ESP32 based smart irrigation and plant monitoring system which is designed to automate watering using industrial grade solenoid feed valve.",
        url:"https://github.com/birbh/hydro-node",
                type:"Hardware",
                tags:["IOT","C++","Wireless Connectivity","CAD"]

    },
    {
        title:"SmartTap",
        description:"A sleek, credit card thin(.8mm) personal card powered entirely by NFC and its energy harvesting tech. i.e no battery required!!!",
        url:"https://github.com/birbh/SmartTap",
        type:"Hardware",
        tags: ["NFC","PCB","Design","AURA☘️"]
    },
    {
        title:"INTmap",
        description:"Interactive map of Nepal to professionally showcase the country’s geography, cultural heritage, and administrative divisions.",
        url:"https://github.com/birbh/INTmap",
        type:"Software",
        tags:["Interactive","Useful","Information"]
    }
];
export default function ProjectCards(){
    return(
        <section className="mt-16 w-full">
            <div className="mb-6 flex items-center justify-between">
            <h2 className="text-white text-2xl font-bold">Featured projects..</h2>
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Selected Work
            </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                {projects.map((project)=>(
                    <article className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_0_25px_rgba(110,231,183,0.12)]" key={project.title}>
                       <div className="mb-4 flex items-center justify-between">
                        <span className=" rounded-full border border-[var(--border)] bg-black/20 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                        {project.type}
                        </span>
                       </div>
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>

                        <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                            key={tag}
                            className="rounded-full border border-[var(--border)] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]"
                            >
                            {tag}
                            </span>
                        ))}
                        </div>

                        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.description}</p>
                        <a className="mt-6 inline-flex items-center text-sm font-medium text-[var(--accent)] transition-colors duration-300 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300" href={project.url} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                        
                    </article>
                ))}
            </div>
        </section>
    );
}