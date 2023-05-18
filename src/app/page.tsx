import styles from './page.module.css'
import Header from "./Components/Header/page";
import About from "./Components/About/page";
import Skills from "./Components/Skills/page";
import Albums from "./Components/Albums/page";

//finish all sections
//responsive design
//animation?

export default function Home() {
  return (<div className={styles.home}>
    <Header />
    <About />
    <Skills />
    <Albums />
  </div>);
}
