import Title from "./Components/Title";
import {Subtitle} from "./Components/Subtitle";
import styles from "./App.module.css";
import StatusText from "./Components/Status";
export default function App(){
  const tech = "React";
  return (
    <div className={styles.app}>
      <Title text={tech} />
      <Subtitle />
      <StatusText />
    </div>
  )
}