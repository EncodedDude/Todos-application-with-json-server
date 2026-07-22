import { useTodos } from "./hooks/use-todos";
import { TodoForm } from "./components/todo-form/todo-form";
import { TodoList } from "./components/todo-list/todo-list";
import { SearchBar } from "./components/search-bar/search-bar";
import { SortSelect } from "./components/sort-select/sort-select";
import styles from "./app.module.css";

function App() {
    const {
        todos,
        isLoading,
        addTodo,
        editTodo,
        deleteTodo,
        searchQuery,
        setSearchQuery,
        sortOrder,
        setSortOrder,
    } = useTodos();

    return (
        <>
            <div className="container">
                <section className={styles["todos-app"]}>
                    <h1 className={styles.title}>Todos application</h1>

                    <div className={styles["todos-bar"]}>
                        <SearchBar onChange={setSearchQuery} />
                        <SortSelect
                            value={sortOrder}
                            onChange={(event) =>
                                setSortOrder(event.target.value)
                            }
                        />
                    </div>

                    {searchQuery && (
                        <h2 className={styles.title}>
                            Результаты поиска по запросу: {searchQuery}
                        </h2>
                    )}

                    <TodoList
                        todos={todos}
                        isLoading={isLoading}
                        onDelete={deleteTodo}
                        onEdit={editTodo}
                    />

                    {!searchQuery && <TodoForm onAdd={addTodo} />}
                </section>
            </div>
        </>
    );
}

export default App;
