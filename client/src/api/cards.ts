import type { Card } from "../types/card"; /*ну тут все ясно */

export async function fetchCards(): Promise<Card[]> {    /*функция  для получения карточек с сервера, при этом функция работает "на фоне". promise - я верну массив(список) карточек, честна :3  */
  const response = await fetch("/api/cards"); /*response это ответ от сервера ok или not ok ! метод fetch не указан, по умолчанию GET-посмотреть данные */ 
  if (!response.ok) throw new Error("Не удалось загрузить карточки"); 
  return response.json(); /*Распаковываем JSON из ответа и возвращаем данные (карточки)*/
}

export async function createCard(title: string): Promise<Card> { /*функция для создания карточки, честно сделаю */
  const response = await fetch("/api/cards", {  /*тоже самое но уде с настройкой, что мы хотим создать карточку на сервере*/
    method: "POST", /*Post - Возьми вот эти данные и сохрани/создай что-то новое */
    headers: { "Content-Type": "application/json" }, /*говорим серверу, что мы отправляем данные в формате JSON */
    body: JSON.stringify({ title, isDone: false, isUrgent: false }), /*тело запроса, что мы хотим создать карточку с таким-то заголовком, и по умолчанию isDone и isUrgent false title вверху*/
  });
  if (!response.ok) throw new Error("Не удалось создать карточку"); /*! = не */
  return response.json();
}
