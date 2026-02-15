import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import GitHubRepos from "./components/GitHubRepos";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <GitHubRepos />
      <Skills />
      <Education />
      <Footer />
    </main>
  );
}
