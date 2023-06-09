import styles from './page.module.css'
import Header from "./Components/Header/page";
import About from "./Components/About/page";
import Skills from "./Components/Skills/page";
import Albums from "./Components/Albums/page";
import Projects from "./Components/Projects/page";

  //albums: sliding window animation
  //scroll animation?
//albums: link data fetching
//skills: data fetching for icons

export default function Home() {
  return (<div className={styles.home}>
    <Header />
    <About />
    <Skills />
    <Albums />
    <Projects />
  </div>);
}
