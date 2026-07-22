import {useMemo, useState} from 'react';
import {sortTodosByText} from '../utils/sort-todos';

export const useSort = todos => {
    const [sortOrder, setSortOrder] = useState('');

    const sortedTodos = useMemo(() => sortTodosByText(todos, sortOrder), [todos, sortOrder]);

    return {
        sortOrder,
        setSortOrder,
        sortedTodos,
    }
}