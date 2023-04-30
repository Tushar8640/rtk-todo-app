import TodoCard from "./TodoCard";
import {
  useGetCategoriesQuery,
  useGetTodosQuery,
} from "../app/features/todo/todoApi";
import { useState } from "react";

import { useSelector } from "react-redux";
import SkeletonLoader from "./SkeletonLoader";
import { Alert } from "flowbite-react";

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
  const {
    data: todos,
    isLoading,
    isError,
  } = useGetTodosQuery({ email, queryString });
  const { data: categories } = useGetCategoriesQuery();

  let content;
  if (isLoading && !isError) {
    content = (
      <div className="grid grid-cols-2 w-3/4  gap-1  mx-auto">
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
      </div>
    );
  }
  if (!isLoading && isError) {
    content = (
      <div className="p-4">
        <Alert color="failure" withBorderAccent={true}>
          <span>
            <span className="font-medium">Something Wrong!</span> Wait sometimes
            and try again.
          </span>
        </Alert>
      </div>
    );
  }
  if (!isLoading && !isError) {
    content = (
      <div className="grid grid-cols-2 w-3/4  gap-4  mx-auto">
        {todos?.todos?.map((t) => (
          <TodoCard key={t?._id} todo={t} />
        ))}
      </div>
    );
  }

  return <div className="mt-8 overflow-y-scroll h-[550px]">{content}</div>;
};

export default Todo;
