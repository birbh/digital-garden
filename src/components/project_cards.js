const projects=[
    {
        title:"PrintSafe",
        description:"A smart biometric storage system designed for students and teachers to securely store their personal belongings.",
        url:"https://github.com/birbh/print_safe",
        type:"Hardware"
    },
    {
        title:"HydroNode",
        description:"An ESP32 based smart irrigation and plant monitoring system which is designed to automate watering using industrial grade solenoid feed valve.",
        url:"https://github.com/birbh/hydro-node",
                type:"Hardware"

    },
    {
        title:"SmartTap",
        description:"A sleek, credit card thin(.8mm) personal card powered entirely by NFC and its energy harvesting tech. i.e no battery required!!!",
        url:"https://github.com/birbh/SmartTap",
        type:"Hardware"
    },
    {
        title:"INTmap",
        description:"Interactive map of Nepal to professionally showcase the country’s geography, cultural heritage, and administrative divisions.",
        url:"https://github.com/birbh/INTmap",
        type:"Software"
    }
];
export default function ProjectCards(){
    return(
        <section className="mx-auto mt-12 max-w-2xl">
            <h2 className="mb-6 text-2xl font-bold">Featured projects..</h2>
            <div className="grid gap-5 sm:grid-cols-2">
                {projects.map((project)=>(
                    <article className="rounded-xl border border-zinc-800 bg-zinc-950 p-5" key={project.title}>
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-400">{project.description}</p>
                        <a className="mt-4 inline-block font-semibold text-cyan-400" href={project.url} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                        <p className="mt-3 text-xs uppercase tracking-wide text-zinc-500">Type: {project.type}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}