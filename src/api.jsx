import axios from "axios";
export const url = `https://preactice-todo-fulstack.onrender.com`;
const getAllData = (setTodos) => {
  axios.get(`${url}/alltodo`).then((data) => {
    let todoapi = data.data;
    setTodos(todoapi);
  });
};

const insertTodo = (text, setText, setTodos,todo) => {
  axios
    .post(`${url}/addTodo`, { text })
    .then((data) => {
      getAllData(setTodos);
      setText("")
      console.log(data)
    })
    .catch((err) => console.log(err));
};

export { getAllData, insertTodo };
