import { useGetTodosQuery } from "./app/features/todo/todoApi";

function App() {
  const {data} = useGetTodosQuery()
  console.log(data);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
