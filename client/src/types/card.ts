export type Card = {  /*тип карточки, который я создала и экспортировала для использования в приложении*/
  
  id: string; 
  title: string;
  isDone: boolean; 
  isUrgent?: boolean;
};
/*все в 1 объекте изза чего логически связаны*/
/*id(identificator we set ourselves), title( имя может быть чем угодно), isDone(true or false), 
isUrgent?(тоже самое) мы задали сами - переменные*/
/*typeScript будет проверять, что любые данные, помеченные как Card, соответствуют этой структуре.*/