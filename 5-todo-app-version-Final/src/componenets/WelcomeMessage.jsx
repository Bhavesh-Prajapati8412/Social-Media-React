import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  return (
    <p className={styles.welcome}>
      <span class="badge text-bg-success">ENJOY YOUR DAY!</span>
    </p>
  );
};

export default WelcomeMessage;
