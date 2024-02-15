import React from "react";
import {
  Droppable,
  DragDropContext,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";

type ListProps = {
  children?: React.ReactNode;
  title: string;
  onDragEnd: (data: any) => void;
  name: string;
};

const List = ({ children, title, onDragEnd, name }: ListProps) => {
  return (
    <div className="md:flex md:flex-col md:w-6/12">
      <h2 className="text-2xl font-bold mb-2 mx-5">{title}</h2>
      <div className="">
        <Droppable droppableId={name}>
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <div ref={provided.innerRef} className="h-screen">
              <div className="p-5 rounded-md min-h-max bg-blue-50 mx-2 gap-y-3 flex flex-col h-screen" style={{overflow:'auto'}}>
                {children}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default List;
