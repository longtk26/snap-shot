import { useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import clsx from "clsx";

import { SearchIcon } from "../../Icons";
import { useImagesList } from "../../hooks";
import { NAVS_DATA } from "../../UI";
import Results from "../Results";
import styles from "./Search.module.scss";

const Search = () => {
    const { location } = useParams();
    const [photos, dataState] = useImagesList(location);
    const inputRef = useRef();
    const navigate = useNavigate();

    return (
        <>
            <div className={clsx(styles.container)}>
                <input
                    ref={inputRef}
                    type="text"
                    className={clsx(styles.search)}
                    placeholder="Search..."
                />
                <button
                    className={clsx(styles.submit)}
                    onClick={() =>
                        navigate(`/search/${inputRef.current.value}`)
                    }
                >
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
            {dataState.isLoading ? (
                <div className={styles.loader}></div>
            ) : (
                <Results title={location ?? "mountain"} photos={photos} />
            )}
        </>
    );
};

export default Search;
