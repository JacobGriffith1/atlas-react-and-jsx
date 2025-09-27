import Portrait from "../assets/portrait.jpg";

export default function AboutMe({
  name = "Jacob Griffith",
  spec = "Full-Stack",
  trimester = "Trimester 5",
  favorites = "React, Tailwind.css, and Node.js",
  goals = "find a stable job that will set me on a path to provide for myself and my family",
  hobbies = "playing games with friends and building model kits",
}) {
  return (
    <div className="about-me">
      <img
        src={Portrait}
        alt={`Professional headshot of ${name}`}
        width={200}
        height={200}
      />
      <p>
        Hello, I'm {name}. I'm in {trimester} of the {spec} spec at Atlas School. I enjoy working with {favorites}. After graduation, I want to {goals}. Outside of school and work, I enjoy {hobbies}.
      </p>
    </div>
  );
}