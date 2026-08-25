"use client";


export default function ContactAction(){
    function downloadCnt(){
        const contact= `BEGIN:VCARD
        VERSION:3.0
        FN: Biraj Bhattarai
        TEL:+9779841384296
        EMAIL:birajbh65@gmail.com
        ADR:Kathmandu, Nepal
        END:VCARD`;
        const file=new Blob([contact],{type:"text/vcard"});
        const url=URL.createObjectURL(file);
        const link= document.createElement("a");
        link.href=url;
        link.download="contact_birbh.vcf";
        link.click();

        URL.revokeObjectURL(url);
    }
    return(
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="tel:+9779841384296" className="rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-black">
                Call me
            </a>
            <button type="button" onClick={downloadCnt} className="rounded-lg border border-zinc-700 px-5 py-3 font-semibold text-white ">
                Wanna save contact?
            </button>
            <a href="mailto:birajbh65@gmail.com" className="rounded-lg border border-zinc-700 px-5 py-3 font-semibold text-white">
                Email me
            </a>
        </div>
    );
}
