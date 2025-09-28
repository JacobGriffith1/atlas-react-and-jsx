import links from "../assets/links.json";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <ul className="footer-links">
        {Array.isArray(links) &&
        links.map(({ label, link }, idx) => (
          <li key={idx}>
            <a href={link}>{label}</a>
          </li>
        ))}
      </ul>
      <div>© {year} Atlas School</div>
    </footer>
  );
}