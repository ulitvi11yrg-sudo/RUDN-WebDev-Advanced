import styles from "./BoardCard.module.css";

type BoardCardProps = {
  title: string;
  isDone: boolean;
};

export function BoardCard({ title, isDone }: BoardCardProps) {  /*сразу вытаскиваем title и isDone из props.*/
  return <div 
  className={isDone ?   
    styles.isDone : 
    styles.card
  }>
    {title}
  </div>;
}
