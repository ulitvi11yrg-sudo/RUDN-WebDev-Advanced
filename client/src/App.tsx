import { BoardHeader } from "./components/BoardHeader/BoardHeader"; 
import { BoardColumn } from "./components/BoardColumn/BoardColumn";
import { NewCardForm } from "./components/NewCardForm/NewCardForm"; 
import styles from "./App.module.css";
import { useQuery } from "@tanstack/react-query"; /* Импорт хук для запросов*/
import { fetchCards } from "./api/cards"; /* Импорт функцию загрузки с сервера*/

function App() {
  const { data: cards = [], isLoading, isError } = useQuery({ /* useQuery для получения карточек с сервера*/
    queryKey: ["cards"],
    queryFn: fetchCards, /* Вызываю функцию из api/cards.ts*/
  });

  return ( 
    <div className={styles.app}>
      <BoardHeader />
      <main className={styles.board}>
        <NewCardForm />
        <div className={styles.columns}>
          {isLoading ? (
            <p>Загрузка карточек...</p>
          ) : isError ? (
            <p>Ошибка при загрузке карточек</p> /*это все проверка на загрузку и ошибку*/
          ) : (
            <BoardColumn cards={cards} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;