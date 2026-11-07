import styles from "./NewCardForm.module.css";

export function NewCardForm() {
  return ( /*Смотри в boardheader*/
    <div className={styles.form}>
      <input className={styles.input} placeholder="Название карточки" />
      <button className={styles.button} type="button">
        Добавить
      </button>
    </div>
  );
}
