import ProfileCard from "@/components/profile_card";
import ContactAction from "@/components/contacts";
import SocialLinks from "@/components/social_l";
import ProjectCards from "@/components/project_cards";
import Footer from "@/components/footer";
import About from "@/components/about";
import Skills from "@/components/skills";
import CurrentFocus from "@/components/curr_focus";

export default function Home() {
  return (
      <main className="min-h-screen bg-black px-6 py-16 text-white">
        <div className="stagger-stack mx-auto flex max-w-2xl flex-col items-center">
        <ProfileCard
        name="Biraj Bhattarai"
        tag="Embedded Systems and Hardware Developer"
        intro="I build hardware and software products that solve real-world problems."
        address="Kathmandu, Nepal"
        alias="BB"/>
        <About/>
        <CurrentFocus/>
        <ContactAction/>
        <SocialLinks/>
        <Skills/>
        <ProjectCards/>
        </div>
        <Footer/>
      </main>
  );
}
