import Header from "./components/Header";
import Section from "./components/Section";
import HelpfulResource from "./components/HelpfulResource";
import AboutMe from "./components/AboutMe";

export default function App() {
  return (
    <main>
      <Header
        linkedinUrl="https://www.linkedin.com/in/jacobgriffith1"
        repoUrl="https://github.com/JacobGriffith1/atlas-react-and-jsx"
      />

      <Section title="What is react?">
        React is a JavaScript library for building UIs out of small, reusable components. You describe the UI with JSX, pass data via props, and manage state inside components—React then updates the browser efficiently for you. It focuses on the view layer, while tools like React Router, TanStack Query, and frameworks like Next.js handle routing, data, and server rendering.
      </Section>

      <Section title="Benefits of react">
        <ul>
          <li>Reusable components cut duplication and speed delivery.</li>
          <li>JSX keeps UI code clear and declarative.</li>
          <li>Virtual DOM makes updates feel fast and efficient.</li>
          <li>One-way data flow keeps state predictable and debuggable.</li>
          <li>Huge ecosystem (Router, Next.js, DevTools, tests) boosts productivity.</li>
        </ul>
      </Section>

      <Section title="Helpful resources">
        <HelpfulResource
          label="React.dev — Quick Start & Learn"
          link="http://react.dev/learn"
        />
        <HelpfulResource
          label="Thinking in React (official docs)"
          link="https://react.dev/learn/thinking-in-react"
        />
        <HelpfulResource
          label="React Crash Course (Traversy Media)"
          link="https://www.youtube.com/watch?v=w7ejDZ8SWv8"
        />
      </Section>

      <AboutMe />
    </main>
  );
}
