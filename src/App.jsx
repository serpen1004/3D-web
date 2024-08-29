import React from "react";
import HeroBanner from "./HeroBanner";
import Header from "./Header";
import ProjectList from "./ProjectList";
import SectionWrapper from "./SectionWrapper";

const links = [
  { text: "Home", href: "#home" },
  { text: "Projects", href: "#projects" },
  { text: "Contact", href: "#contact" },
];

const App = () => {
  return (
    <div>
      <Header links={links} />
      <HeroBanner
        title="Welcome to My Portfolio"
        subtitle="Showcasing My Projects and Skills"
        backgroundImage="path/to/background.jpg"
      />
      <SectionWrapper idName="projects">
        <ProjectList />
      </SectionWrapper>
    </div>
  );
};

export default App;
