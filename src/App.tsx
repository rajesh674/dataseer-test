//import { useState } from "react";
import Incorporate from "./components/Incorporate";
//import Modal from "./components/Modal";
export type inputDataType = any
function App() {
  //const [toggle, setToggle] = useState<boolean>(false);


  return (
    <>
      <div className="lg:max-lg:flex lg:max-lg:flex-col items-center bg-blue-300 min-h-screen">
        <h1 className="text-3xl text-center font-bold pt-5">
          To Do Lists
        </h1>
        {/* <button onClick={() => setToggle(true)} type="button" className="border-blue-500 border-2 rounded-lg p-2 bg-blue-200">Add Tasks</button> */}

        <Incorporate />
      </div>
     {/* <Modal toggle={toggle} setToggle={setToggle} /> */}
    </>
  );
}

export default App;
