export function Todos({ todos }) {
    console.log("Todos received in component:", todos);
    
    if (!todos || todos.length === 0) {
        return <div>No todos found</div>;
    }

    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed ? "Completed" : "Mark as Complete"}</button>
                </div>
            ))}
        </div>
    );
}