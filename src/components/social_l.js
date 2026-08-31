import Image from "next/image";
import "../css/social_l.css";

export default function SocialLinks() {
 return (
   <div className="social-links">
     <a
       className="social-link"
       href="https://www.linkedin.com/in/thebirajh3ak3r/"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="LinkedIn"
     >
       <Image
         className="social-icon"
         src="/digital-garden/assets/LinkedIn_icon.png"
         alt="LinkedIn"
         width={32}
         height={32}
       />
     </a>

     <a
       className="social-link"
       href="https://www.github.com/birbh"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="GitHub"
     >
       <Image
         className="social-icon"
         src="/digital-garden/assets/github-logo.png"
         alt="GitHub"
         width={32}
         height={32}
       />
     </a>

     <a
       className="social-link"
       href="https://www.instagram.com/bir.__bht/"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Instagram"
     >
       <Image
         className="social-icon"
         src="/digital-garden/assets/insta_logo.png"
         alt="Instagram"
         width={32}
         height={32}
       />
     </a>

     <a
       className="social-link"
       href="https://linktr.ee/birbh"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Linktree"
     >
       <Image
         className="social-icon social-icon--linktree"
         src="/digital-garden/assets/linktree_logo.png"
         alt="Linktree"
         width={28}
         height={28}
       />
     </a>

     <a
       className="social-link"
       href="https://www.facebook.com/profile.php?id=100086725935941"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Facebook"
     >
       <Image
         className="social-icon"
         src="/digital-garden/assets/facebook-logo.png"
         alt="Facebook"
         width={32}
         height={32}
       />
     </a>
   </div>
 );
}
