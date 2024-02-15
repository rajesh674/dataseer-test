import Card from "../Card/index";
import List from "../List/index";
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import { useState } from "react";

const catgegory = ['available', 'panding', 'assigned', 'complete']
export type inputDataType = {
  id: number;
  uuid: string;
  title: string;
  subtitle: string;
  updatedAt: string;
}
const Incorporate = () => {
  const itemsNormal = {
    available: [
      {
        id: 1,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a4477",
        title: "Task List",
        subtitle: "Lorem Ipsum is simply dummy",
        updatedAt: "6 days ago",
      },
      {
        id: 2,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a448",
        title: "Task List 1",
        subtitle: "Lorem Ipsum is simply dummy",
        updatedAt: "6 days ago",
      },
      {
        id: 3,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a449",
        title: "Task List 2",
        subtitle: "Lorem Ipsum is simply dummy",
        updatedAt: "6 days ago",
      },
    ],

    assigned: [
      {
        id: 5,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a450",
        title: "Task List 3",
        subtitle: "Lorem Ipsum is simply dummy",
        updatedAt: "6 days ago",
      },
      {
        id: 6,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a451",
        title: "Task List 4",
        subtitle: "Lorem Ipsum is simply dummy",
        updatedAt: "2 days ago",
      },
    ],
    panding: [
      {
        id: 7,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a452",
        title: "Task List 7",
        subtitle: "Lorem Ipsum is simply dummy",
        updatedAt: "6 days ago",
      },
      {
        id: 8,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a453",
        title: "Task List 8",
        subtitle: "Lorem Ipsum is simply dummy",
        updatedAt: "2 days ago",
      },
    ],
    complete: [
      {
        id: 9,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a454",
        title: "Task List 9",
        subtitle: "Lorem Ipsum is simply dummy",
        updatedAt: "6 days ago",
      },
      {
        id: 10,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a455",
        title: "Task List 10",
        subtitle: "Lorem Ipsum is simply dummy",
        updatedAt: "2 days ago",
      },
    ],
  };

  const [items, setItems] = useState(itemsNormal);
  const { available, panding, assigned, complete } = items;
  //let localData = JSON.parse(localStorage.getItem('data') as 'string | null')
  //let updataavailable = localData === null ? [...available] : [...available, ...localData];


  console.log(items)

  const removeFromList = (list: any, index: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
  };

  const addToList = (list: any, index: any, element: any) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      console.log(result);
      return;
    }
    const listCopy: any = { ...items };
    const sourceList = listCopy[result.source.droppableId];
    console.log('sourceList',sourceList)
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;

    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );
    setItems(listCopy);
  };



  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="md:flex p-12">
          {catgegory.map((el, i) => {
            let titleName = `${el.charAt(0).toUpperCase()}${el.slice(1)} Tasks`;
            let data = el === 'available' ? available : el === 'panding' ? panding : el === 'assigned' ? assigned : complete;
            return <List key={i} title={titleName} onDragEnd={onDragEnd} name={el}>
              {data?.map((item, index) => (
                <Draggable key={index} draggableId={item.id + ""} index={index}>

                  {(
                    provided: DraggableProvided | any,
                    snapshot: DraggableStateSnapshot
                  ) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card data={item} />
                    </div>
                  )}
                </Draggable>
              ))}
            </List>
          })}
        </div>
      </DragDropContext>
    </>
  );
};

export default Incorporate;
