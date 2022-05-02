import React, { useReducer, useRef } from 'react';

interface todo{
    id: number,
    text: string,
};

type actionType = {type: "ADD", text:string} | {type:"REMOVE", id: number};

const Practice = () => {

    const reducer = (state:todo[], action:actionType) =>{
        switch(action.type){
            case 'ADD':
                return [
                    ...state,
                    {
                        id:state.length,
                        text:action.text,
                    }
                ]
            case 'REMOVE':
                return state.filter(({id}) => id !== action.id);
        }

    }
    const [todos, dispatch] = useReducer(reducer, []);

    const newAddTodo = useRef<HTMLInputElement>(null);

    const onAddTodo = () =>{
        if(newAddTodo.current){
            dispatch({
                type:"ADD",
                text: newAddTodo.current.value
            });
            newAddTodo.current.value="";
        };
    };

    const Remove = (id:number) =>{
        dispatch({
            type:"REMOVE",
            id: id,
        })
    }

    return (
        <div>
            <div>
                <input type="text" ref={newAddTodo}/>
                <button onClick={onAddTodo}>ADD</button>
            </div>
            {
                todos.map(todo => (
                    <div key={todo.id}>
                        {todo.text} -- <button onClick={()=> Remove(todo.id)}>Remove</button>
                    </div>
                ))
            }
        </div>
    );
};

export default Practice;