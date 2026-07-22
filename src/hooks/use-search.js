import { useMemo, useState } from "react";

export const useSearch = todos => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTodos = useMemo(() =>
        todos.filter(todo => todo.text.toLowerCase().includes(searchQuery.toLowerCase())),
        [todos, searchQuery]
    )

    return {
        searchQuery,
        setSearchQuery,
        filteredTodos
    };
};
