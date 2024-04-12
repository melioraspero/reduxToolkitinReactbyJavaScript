//пример простого использования Redux Toolkit в React-приложении на языке JavaScript:

javascript
Copy code
// Импорт необходимых функций из Redux Toolkit
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Создание начального состояния для счетчика
const initialState = {
  value: 0,
};

// Создание среза (slice) для счетчика с использованием createSlice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    // Дополнительный редуктор для установки значения счетчика
    setValue(state, action) {
      state.value = action.payload;
    },
  },
});

// Создание хранилища Redux с помощью configureStore
const store = configureStore({
  reducer: counterSlice.reducer,
});

// Экспорт действий (actions) счетчика
export const { increment, decrement, setValue } = counterSlice.actions;

// Экспорт хранилища Redux
export default store;
//Этот код создает Redux Slice (срез) для управления счетчиком в React-приложении. Он включает в себя действия для инкремента, декремента и установки значения счетчика. Также он создает хранилище Redux с помощью функции configureStore.

//Этот код написан на языке программирования JavaScript и использует библиотеку Redux Toolkit для управления состоянием в React-приложении.
