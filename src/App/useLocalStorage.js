import { useState } from "react";

function useLocalStorage(itemName, initialValue) {
  let parsedItem;
  //persistencia con local storage
  const localStorageItem = localStorage.getItem(itemName);
  //todos convertidos a json, es decir, array traidos de local storage

  if (localStorageItem) {
    parsedItem = JSON.parse(localStorageItem);
  } else {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }

  const [item, setItem] = useState(parsedItem);
  //funcion para modificar el estado y el local storage, parametro=nuevo array a actualizar
  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };

  return [item, saveItem];
}

export { useLocalStorage };
