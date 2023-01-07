import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import clsx from "clsx";

import { SearchIcon } from "../../Icons";
import { useImagesList } from "../../hooks";
import Results from "../Results";
import styles from "./Search.module.scss";

const NAVS_DATA = ["mountain", "beaches", "birds", "food"];

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const [showLoader, setShowLoader] = useState(false);
    const { location } = useParams();
    const photos = useImagesList(location, setShowLoader);

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
            {showLoader ? (
                <div className={styles.loader}></div>
            ) : (
                <Results title={location ?? "mountain"} photos={photos} />
            )}
        </>
    );
};

export default Search;
