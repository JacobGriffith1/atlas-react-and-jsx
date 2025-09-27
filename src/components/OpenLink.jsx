import openIcon from "../assets/open.svg";

export default function OpenLink({ link }) {
  return (
    <a
      className="open-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open link in a new tab"
      title="Open in new tab"
    >
      <img src={openIcon} alt="Open icon" width={20} height={20} />
    </a>
  );
}