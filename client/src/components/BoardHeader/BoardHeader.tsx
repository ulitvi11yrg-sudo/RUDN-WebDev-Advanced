import styles from "./BoardHeader.module.css";

export function BoardHeader() { /*ОбъявляЮ компонент BoardHeader*/
  return ( /*return завершает работу функции и отдает результат тому, кто эту функцию вызвал.*/
    <header className={styles.header}>
      <h1 className={styles.title}>Канбан-доска</h1>
      <div className={styles.controls}>
        {/* Место для будущих элементов управления: фильтры, профиль пользователя */}
      </div>
    </header>
  );
}
