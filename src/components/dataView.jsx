import styles from './dataView.module.css';

export default function DataView (props) {
    const { data, title, type } = props;

    return (
        <>
        <article className={styles.header}>
            <h1 className={styles.h1}>{title}</h1>
        </article>
        <article className={styles.info}>
            {data.map(function(element) {
                return (
                    <>
                    <div className={styles.actions}>
                        <p><b>{element.startDate} - {element.endDate}</b></p>
                        <div>
                            <button className={styles.deleteButton}>
                                Del
                            </button>
                            <button className={styles.editButton}>
                                Edit
                            </button>
                        </div>
                    </div>
                    <div className={styles.content}>
                        { type === "education" ?
                            <>
                                <h1>{element.institution}</h1>
                                <h3>{element.field}</h3>
                            </>
                        : type === "professional" &&
                            <>
                                <h1>{element.companyName}</h1>
                                <h2>{element.positionTitle}</h2>
                                <p>{element.description}</p>
                            </>
                        }
                    </div>
                    </>
                )
            })}
            
        </article>
        </>
    )
}