import ModuleOne from "./components/ModuleOne";
import ModuleTwo from "./components/ModuleTwo/ParentComponent";
import ModuleThree from "./components/ModuleThree/MainComponent";
import ModuleFour from "./components/ModuleFour";

// Comment/Uncomment each Module

function App() {
  return (
    <div className="container">
      {/* JSX */}
      {/* <ModuleOne /> */}
      {/* State & Props */}
      {/* <ModuleTwo /> */}
      {/* Function & Class Components */}
      {/* <ModuleThree /> */}
      {/* HTML & CSS in React */}
      <ModuleFour />
    </div>
  );
}

export default App;
