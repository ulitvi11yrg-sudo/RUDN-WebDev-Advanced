import type { Card } from "../../types/card";
import { BoardCard } from "../BoardCard/BoardCard";
import styles from "./BoardColumn.module.css";
import { useBoardFiltersStore } from "../../store/boardFilters"; /* Импортируем наше хранилище, чтобы узнать, включен ли фильтр */

type Props = { 
  cards: Card[];  
}

export function BoardColumn(props: Props) { /* Объявляю компонент BoardColumn, который принимает пропсы типа Props, а Props - это объект с массивом карточек (выше)*/
  
  const hideDone = useBoardFiltersStore((state) => state.hideDone); /* Достаем из стора только значение hideDone */

  const visibleCards = hideDone   /* Вычисляем отфильтрованный список прямо во время рендера, создаем переменную. Если hideDone = true, оставляем только карточки, где isDone = false */
    ? props.cards.filter(card => !card.isDone) 
    : props.cards;

  return (  
    <section className={styles.column}>
      <h2 className={styles.title}>К выполнению</h2>
      <div className={styles.cards}>
        {/* Теперь перебираем отфильтрованный массив visibleCards, а не props.cards */}
        {visibleCards.map(card => 
        <BoardCard 
          key={card.id} /* Добавила key, React требует его для списков, чтобы не было ошибок в консоли */
          title={card.title} 
          isDone={card.isDone} 
          />)}
      </div>
    </section>
  );
}