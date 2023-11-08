import React, {useState} from "react";

interface Item {
    id: number;
    text: string;
    completed: boolean;
}

export const TodoList: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [todos,setTodos] = useState<Item[]>([
        {id: 1, text: "Code", completed: false},
        {id: 2, text: "Improve code", completed: false}
    ])
    const [input,setInput] = useState<string>("");
    const handleToggle = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed};
                }
                return todo;
            })
        );
    };

    const handleClick = () => {
        const newTodo: Item = {id: Date.now(), text:input, completed:false}
        setTodos([...todos, newTodo]);
    }
    return (
        <div className="main-container">
            <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;lang=en" />
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} onClick={() => handleToggle(todo.id)} style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</li>
                ))}
            </ul>
            <input type="text" placeholder="Add a todo item" onChange={(e) => setInput(e.currentTarget.value)}/>
            <button onClick={handleClick}>Add</button>
        </div>
    );

};