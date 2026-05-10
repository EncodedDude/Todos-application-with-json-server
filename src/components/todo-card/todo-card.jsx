import { useState } from 'react';
import styles from './todo-card.module.css';

export const TodoCard = ({ id, index, text, deleteTodo, editTodo }) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const [editText, setEditText] = useState(text);

    const updateTodo = () => {
        setIsUpdating(!isUpdating);
    }

    const saveUpdateTodo = (id) => {
        setIsUpdating(!isUpdating);
        editTodo(id, editText);
    }

    const cancelUpdateTodo = () => {
        setIsUpdating(!isUpdating);
        setEditText(text);
    }

    return (
        <div className={styles['item-todo']}>
            <div className={styles['item-todo__title']}>Задача №{index + 1}</div>
            {isUpdating
                ? <input className={styles['item-todo__edit']} value={editText} onChange={(event) => setEditText(event.target.value)} />
                : <p className={styles['item-todo__text']}>{text}</p>
            }
            <div className={styles['item-todo__actions']}>
                <button className={styles['item-todo__action']} onClick={() => deleteTodo(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="2d2d2d" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z" /></svg>
                </button>
                {isUpdating ? (
                <>
                    <button className={styles['item-todo__action']} onClick={() => saveUpdateTodo(id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#2d2d2d" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                    </button>
                    <button className={styles['item-todo__action']} onClick={() => cancelUpdateTodo(id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#2d2d2d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"/></svg>
                    </button>
                </> ) : (
                    <button className={styles['item-todo__action']} onClick={updateTodo}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="2d2d2d" d="m14.06 9l.94.94L5.92 19H5v-.92zm3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"/></svg>
                    </button> )
                }
            </div>
        </div>
    )
}