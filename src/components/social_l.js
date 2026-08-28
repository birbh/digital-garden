import Image from "next/image";



export default function SocialLinks(){
    return(
        <div className="mt-8 flex gap-5">
        <a href="https://www.linkedin.com/in/thebirajh3ak3r/" target="_blank"
rel="noopener noreferrer">
    <Image 
        src="/assets/LinkedIn_icon.png" 
        alt="Linkedin" 
        width={30} 
        height={20} 
      />
        </a>
        <a href="https://www.github.com/birbh" target="_blank"
rel="noopener noreferrer">
            <Image 
        src="/assets/github-logo.png" 
        alt="github" 
        width={32} 
        height={20} 
      />
        </a>
        <a href="https://www.instagram.com/bir.__bht/" target="_blank"
rel="noopener noreferrer">
            <Image 
        src="/assets/insta_logo.png" 
        alt="Instagram" 
        width={32} 
        height={20} 
      />
        </a>

        <a href="https://linktr.ee/birbh" target="_blank"
rel="noopener noreferrer">
            <Image 
        src="/assets/linktree_logo.png" 
        alt="Linktree" 
        width={25} 
        height={10} 
      />
        </a>

        <a href="https://www.facebook.com/profile.php?id=100086725935941https://www.facebook.com/profile.php?viewas=100000686899395&id=100086725935941" target="_blank"
rel="noopener noreferrer">
            <Image 
        src="/assets/facebook-logo.png" 
        alt="facebook" 
        width={32} 
        height={20} 
      />
        </a>
        
        </div>
    );
}


