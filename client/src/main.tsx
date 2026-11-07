/* main это соединение app и библиотек чтоб мой весь кодичек работал, способ его запуска*/
import { StrictMode } from "react"; /*проверяет код на потенциальные проблемы */
import { createRoot } from "react-dom/client";/*подключение react к html */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; /* это все (вроде) библиотеки*/
import "./index.css"; 
import App from "./App.tsx"; /* в нем вся структура страницы!*/

const queryClient = new QueryClient();/*он для хранения данных, работает с запросами */

createRoot(document.getElementById("root")!).render(  
  /*то самое соединение react приложения и html. Браузер берет файл index.html и ищет в нем тег с id="root". 
  ! - он там точно есть. 
  
  createroot-"Возьми эту пустую коробку (div с id="root"), и сделай из неё свой корень (Root)". 
  
  render - берет то что мы передали превращает его в готовый HTML и вставляет внутрь моего createRoot. */
  
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
