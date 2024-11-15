import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContanier";

function App() {
  return (
    <>
      <div className={styles.calculator}>
        <Display></Display>
        <ButtonsContainer></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
