import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { SearchIcon } from "../../Icons";
import Results from "../Results";
import styles from "./Search.module.scss";

const NAVS_DATA = ["mountain", "beaches", "birds", "food"];

const Search = () => {
    const [searchText, setSearchText] = useState("");
    return (
        <>
            <div className={clsx(styles.container)}>
                <input
                    type="text"
                    className={clsx(styles.search)}
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className={clsx(styles.submit)}>
                    <SearchIcon />
                </button>
            </div>
            <ul className={clsx(styles.lists)}>
                {NAVS_DATA.map((item) => (
                    <li key={item}>
                        <Link to={`/${item}`} className={clsx(styles.item)}>
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
            <Results title="Mountains Pictures" />
        </>
    );
};

export default Search;
