import clsx from "clsx";
import styles from "./Results.module.scss";

const Results = ({ title, photos }) => {
    if (photos) {
        return (
            <div className={clsx(styles.container)}>
                <h1 className={clsx(styles.title)}>{title} Pictures</h1>
                <div className={clsx(styles.list)}>
                    {photos.map((item) => (
                        <div className={styles.image} key={item.id}>
                            <img
                                className={clsx(styles.img)}
                                src={`https://farm66.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
                                alt={item}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className={clsx(styles.container)}>
                <h1 className={clsx(styles.title)}>No pictures is found</h1>
            </div>
        );
    }
};

export default Results;
