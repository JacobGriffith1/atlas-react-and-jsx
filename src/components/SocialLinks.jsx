import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";

export default function SocialLinks({
  linkedinUrl = "https://www.linkedin.com/in/jacobgriffith1",
  repoUrl = "https://github.com/JacobGriffith1/atlas-react-and-jsx",
}) {
  return (
    <div className="social-links">
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open LinkedIn profile"
        title="LinkedIn"
      >
        <img src={linkedinIcon} alt="LinkedIn profile" width={28} height={28} />
      </a>

      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open project repository on GitHub"
        title="GitHub"
      >
        <img src={githubIcon} alt="GitHub repository" width={28} height={28} />
      </a>
    </div>
  );
}