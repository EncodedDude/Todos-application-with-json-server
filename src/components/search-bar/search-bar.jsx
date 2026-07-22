import { useState, useEffect } from "react";
import { Button } from "../button/button";
import styles from "./search-bar.module.css";

export const SearchBar = ({ onChange }) => {
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        if (searchValue === "") {
            onChange("");
        }
    }, [searchValue, onChange]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!searchValue) return;
        onChange(searchValue);
    };

    const resetSearch = () => {
        setSearchValue("");
        onChange("");
    };

    return (
        <form className={styles["form-search"]} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Введите фразу"
                className={styles.input}
                value={searchValue}
                onChange={({ target }) => setSearchValue(target.value)}
            />
            <Button type="submit">Найти</Button>
            {searchValue && <Button onClick={resetSearch}>Отменить</Button>}
        </form>
    );
};
