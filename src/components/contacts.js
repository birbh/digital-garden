
export default function ContactAction() {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
      <a
        href="tel:+9779841384296"
        className="rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-black transition-colors duration-300 hover:bg-emerald-300 focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-emerald-300"
      >
        Call me
      </a>
      <a
        href="./contact_birbh.vcf"
        download="contact_birbh.vcf"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-zinc-700 px-5 py-3 font-semibold text-white transition-colors duration-300 hover:border-emerald-300 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
      >
        Wanna save contact?
      </a>
      <a
        href="mailto:birajbh65@gmail.com"
        className="rounded-lg border border-zinc-700 px-5 py-3 font-semibold text-white transition-colors duration-300 hover:border-emerald-300 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
      >
        Email me
      </a>
    </div>
  );
}

