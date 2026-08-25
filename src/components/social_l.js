import Image from "next/image";
export default function SocialLinks(){
    return(
        <div className="mt-8 flex gap-5">
        <a href="https://www.linkedin.com/in/thebirajh3ak3r/" target="_blank"
rel="noopener noreferrer">
    <Image 
        src="/LinkedIn_icon.png" 
        alt="Linkedin" 
        width={30} 
        height={20} 
      />
        </a>
        <a href="https://www.github.com/birbh" target="_blank"
rel="noopener noreferrer">
            <Image 
        src="github_logo.png" 
        alt="Linkedin" 
        width={32} 
        height={40} 
      />
        </a>
        <a href="https://www.instagram.com/bir.__bht/" target="_blank"
rel="noopener noreferrer">
            <Image 
        src="/insta_logo.jpg" 
        alt="Linkedin" 
        width={60} 
        height={20} 
      />
        </a>
        </div>
    );
}