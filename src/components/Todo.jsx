import TodoCard from "./TodoCard";
import {
  useGetCategoriesQuery,
  useGetTodosQuery,
} from "../app/features/todo/todoApi";
import { useState } from "react";

import { useSelector } from "react-redux";

const Todo = () => {
  const { user } = useSelector((state) => state.auth);
  const { filterCategory: category, searchTitle: title } = useSelector(
    (state) => state.todo
  );
  // console.log(user);
  const { email } = user || {};
  const queryParams = [];

  if (category.length > 0) {
    queryParams.push(
      `category=${category.map((cat) => encodeURIComponent(cat)).join(",")}`
    );
  }
  if (title) {
    queryParams.push(`title=${encodeURIComponent(title)}`);
  }

  const queryString = queryParams.join("&");
  const { data: todos } = useGetTodosQuery({ email, queryString });
  const { data: categories } = useGetCategoriesQuery();
  return (
    <div className="mt-8 overflow-y-scroll h-[550px]">
      <div className="grid grid-cols-2 w-3/4  gap-4  mx-auto">
        {todos?.todos?.map((t) => (
          <TodoCard key={t?._id} todo={t} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
