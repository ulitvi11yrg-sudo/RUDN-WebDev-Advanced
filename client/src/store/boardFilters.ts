import { create } from 'zustand'; /*create -функция из библиотеки zustand, позволяет создавать хранилища для управления состоянием приложения. Заменяет UseState*/

type BoardFiltersStore = { /*создаем новый тип*/
  hideDone: boolean; /* в хранилище 1 переменная, которая может быть true или false */
  toggleHideDone: () => void; /*функция, которая не принимает аргументы и не возвращает ничего. она будет использоваться для переключения состояния hideDone между true и false. */
};  

export const useBoardFiltersStore = create<BoardFiltersStore>((set) => ({ /* константа - экспортируем её, чтобы другие компоненты могли её импортировать.*/  
hideDone: false, /*начальное значение hideDone установлено в false, что означает, что по умолчанию карточки не скрыты.*/
  toggleHideDone: () => set((state) => ({ hideDone: !state.hideDone })), /*toggleHideDone - изменяет состояние hideDone на противоположное, использует функцию set чтобы обновить состояние. из false в true и наоборот*/
}));