import styles from "./Button.module.css";
export const Button = (props) => {
  return (
    <button type="button" className={styles.error}>
      {props.title}
    </button>
  );
};
