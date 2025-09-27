import Greeting from "./Greeting.jsx";
import SocialLinks from "./SocialLinks.jsx";

export default function Header({ linkedinUrl, repoUrl }){
  return (
    <nav className="header">
      <Greeting />
      <SocialLinks linkedinUrl={linkedinUrl} repoUrl={repoUrl} />
    </nav>
  );
}