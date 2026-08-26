const skills=[
    "Embedded Software & Systems", 
    "Computer-Aided Design (CAD)", 
    "Printed Circuit Board (PCB) Design",
    "Full-Stack Development(Currently learning)"
];

export default function Skills(){
    return(
        <section className="mt-16 w-full">
            <h2 className="mb-5 text-2xl font-bold">
               Core Skills
            </h2>
            <div className="grid gap-3 sm:grid-cols-3">
                {skills.map((skill)=>(
                    <div key={skill} className="border border-zinc-800 bg-zinc-950 p-4 text-sm text-zinc-300">
                        ◦ {skill}
                    </div>
                ))}
            </div>
        </section>

    );
}