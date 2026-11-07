import styles from "./BoardHeader.module.css";
import  {useBoardFiltersStore}  from "../../store/boardFilters"; /*импортируем стили и хранилище из в boardFilters.ts*/

export function BoardHeader() { /*ОбъявляЮ компонент BoardHeader*/
  const hideDone = useBoardFiltersStore((state) => state.hideDone); /*вызываем хук стора и с помощью стрелочной функции достаем только значение */
  const toggleHideDone = useBoardFiltersStore((state) => state.toggleHideDone); /*достаем функцию  которая переключает false на true и обратно. */
  
  return ( /*return завершает работу функции и отдает результат тому, кто эту функцию вызвал.*/
    <header className={styles.header}>
      <h1 className={styles.title}>Канбан-доска</h1>
      <div className={styles.controls}>
        {/* Место для будущих элементов управления: фильтры, профиль пользователя */}
 <button onClick={toggleHideDone}> /*при клике будет смена состояния hideDone на противоположное*/
          {hideDone ? "Показать все" : "Скрыть выполненные"} 
        </button>
      </div>
    </header>
  );
}