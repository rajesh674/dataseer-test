import { useState } from "react";
import Incorporate from "./components/Incorporate";
export type inputDataType = any
function App() {
  const [toggle, setToggle] = useState(false);
  const [inputData, setInputData] = useState<inputDataType>([{
    id: 10,
    uuid: '',
    title: '',
    subtitle: '',
    updatedAt: ''
  }])

  const haldleinput = (e: string, type: string) => {
    let update = [...inputData];

    //console.log(update)
    update[0].id = update[0].id + 1;
    if (type === 'title') {
      update[0].title = e
    } else {
      update[0].subtitle = e
    }
    setInputData(update)
  }

  const haldleCreateList = () => {
    if(inputData[0].title.length > 0){
      setToggle(false)
      let d = JSON.parse(localStorage.getItem('data') as any);
      let u = d === null ? inputData : [...d, ...inputData];
      let dd = JSON.stringify(u)
      localStorage.setItem('data', dd)
    } else{
      alert('All fields is required')
    }
   
  }

  return (
    <>
      <div className="flex flex-col items-center bg-blue-300 min-h-screen">
        <h1 className="text-3xl font-bold mt-5 mb-5">
          To Do Lists
        </h1>
        <button onClick={() => setToggle(true)} type="button" className="border-blue-500 border-2 rounded-lg p-2 bg-blue-200">Add Tasks</button>

        <Incorporate />
      </div>
      <div className={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${!toggle ? 'hidden' : ''}`} id="modal">
        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
          <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <label className="font-medium text-gray-800">Task Title</label>
              <input type="text" onChange={(e) => haldleinput(e.target.value, 'title')} className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" />
              <label className="font-medium text-gray-800">Comment</label>
              <textarea onChange={(e) => haldleinput(e.target.value, 'comment')} className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3 resize-none">

              </textarea>
            </div>
            <div className="bg-gray-200 px-4 py-3 text-right">
              <button type="button" onClick={() => setToggle(false)} className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"><i className="fas fa-times"></i> Cancel</button>
              <button type="button" onClick={haldleCreateList} className="py-2 px-4 bg-blue-500 text-white rounded font-medium hover:bg-blue-700 mr-2 transition duration-500"><i className="fas fa-plus"></i> Create list</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
