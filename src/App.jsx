import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useGetTodosQuery } from "./app/features/todo/todoApi";
import { useState } from "react";
import SidebarNav from "./components/Sidebar";
import Modalview from "./components/Modal";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);



  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
