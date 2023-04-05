import ClassComp from "./components/ClassComp";
import FuncComp from "./components/FuncComp";

function App() {
  return (
    <div className="bg-red-200 h-20 flex flex-col text-2xl items-center justify-center">
      <ClassComp />
      <FuncComp />
    </div>
  );
}

export default App;
