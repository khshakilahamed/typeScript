import { useCallback, useReducer, useRef } from 'react';
import './App.css';
import Lists from './components/Lists';
import Practice from './components/Practice';

// const Box: React.FunctionComponent<{title: string}> = ({title}) =>{
//   return <div></div>
// };

interface Todo{
  id: number,
  text: string,
}
type ActionType = {type: "ADD"; text: string} | {type:"REMOVE"; id: number};

function App() {
  function reducer(state:Todo[], action: ActionType){
    switch(action.type){
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
          },
        ];
      case "REMOVE":
        return state.filter(({id}) => id !== action.id);
    }
  }

  // useReducer
  const [todos, dispatch] = useReducer(reducer, []);

  // [{}, {}, {}]
  const newTodoRef = useRef<HTMLInputElement>(null);

  // useCallback
  const onAddTodo = useCallback(()=>{
    if(newTodoRef.current){
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value
      });
      newTodoRef.current.value = "";
    }
  }, []) ;

  // const onRemoveTodo


  return (

    <div className="App">
      {/* <Box title='hello'>adkfjasdjf</Box> */}
      {/* <Lists></Lists> */}

      {/* <input type="text" ref={newTodoRef}/>
      <button onClick={onAddTodo}>Add</button>
      {
        todos.map((todo) => (
          <div key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch({type:'REMOVE', id: todo.id})}>Remove</button>
          </div>
        ))
      } */}

      <Practice></Practice>
    </div>
  );
}

export default App;
