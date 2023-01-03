import { useState } from "react";
import clsx from "clsx";

import { SearchIcon } from "../../Icons";
import styles from "./Search.module.scss";

const Search = () => {
    const [searchText, setSearchText] = useState("");

    return (
        <div className={clsx(styles.container)}>
            <input
                type="text"
                className={clsx(styles.search)}
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button className={clsx(styles.icon)}>
                <SearchIcon />
            </button>
        </div>
    );
};

export default Search;
