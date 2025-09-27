import copyIcon from "../assets/copy.svg";

export default function CopyLink({ link }) {
  const copyToClipboard = async () => {
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = link;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } finally {
        document.body.removeChild(ta);
      }
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      copyToClipboard();
    }
  };

  return (
    <img
      className="copy"
      src={copyIcon}
      alt="Copy link"
      role="button"
      tabIndex={0}
      title="Copy link to clipboard"
      onClick={copyToClipboard}
      onKeyDown={onKeyDown}
      width={20}
      height={20}
    />
  );
}