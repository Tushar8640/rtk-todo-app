import React from "react";
import TodoCard from "./TodoCard";
import {
  useGetCategoriesQuery,
  useGetTodosQuery,
} from "../app/features/todo/todoApi";

const Todo = () => {
  const email = "admin@gmail.com";
  const { data } = useGetTodosQuery(email);
  const { data: categories } = useGetCategoriesQuery();
  console.log(categories);
  console.log(data);
  return (
    <div className="mt-8 overflow-y-scroll h-[550px]">
      <div className="grid grid-cols-2 w-3/4  gap-4  mx-auto">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default Todo;
