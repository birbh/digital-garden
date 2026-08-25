import ProfileCard from "@/components/profile_card";
import ContactAction from "@/components/contacts";
import SocialLinks from "@/components/social_l";
import ProjectCards from "@/components/project_cards";
import Footer from "@/components/footer";

export default function Home() {
  return (
      <main className="min-h-screen bg-black px-6 py-16 text-white">
        <div className="mx-auto flex max-w-2xl flex-col items-center"> 
        <ProfileCard
        name="Biraj Bhattarai"
        tag="Developer, learner, and builder of digital things"
        address="Kathmandu, Nepal"
        alias="BB"/>
        <ContactAction/>
        <SocialLinks/>
        <ProjectCards/>
        </div>
        <Footer/>
      </main>
  );
}
