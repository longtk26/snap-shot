import clsx from "clsx";
import styles from "./Results.module.scss";

const Results = ({ title }) => {
    const fakeDatas = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    return (
        <div className={clsx(styles.container)}>
            <h1 className={clsx(styles.title)}>{title}</h1>
            <div className={clsx(styles.list)}>
                {fakeDatas.map((item) => (
                    <div className={styles.image} key={item}>
                        <img
                            className={clsx(styles.img)}
                            src="https://farm66.staticflickr.com/65535/52605157555_9083c8f9b3_m.jpg"
                            alt={item}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Results;
