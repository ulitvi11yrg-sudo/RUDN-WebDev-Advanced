import type { Card } from "../../types/card";
import { BoardCard } from "../BoardCard/BoardCard";
import styles from "./BoardColumn.module.css";

type Props = { 
  cards: Card[];  
}

export function BoardColumn(props: Props) { /* Объявляю компонент BoardColumn, который принимает пропсы типа Props, а Props - это объект с массивом карточек (выше)*/
  return (  
    <section className={styles.column}>
      <h2 className={styles.title}>К выполнению</h2>
      <div className={styles.cards}>
        {props.cards.map(card =>  /*props.cards - массив карточек, map - метод для того чтобы пройтись по каждому элементу массива и выполнить функцию для каждого элемента */
        <BoardCard 
          title={card.title} 
          isDone={card.isDone} 
          />)}
      </div>
    </section>
  );
}
