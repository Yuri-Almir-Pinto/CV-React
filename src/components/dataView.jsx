import styles from './dataView.module.css';

export default function DataView (props) {
    const { data, setData, title, type, setEdit, setIndex } = props;
    
    function edit(index) {
        setEdit(data[index]);
        setIndex(index);
    }

    function del(index) {
        let obj = structuredClone(data);
        obj.splice(index, 1);

        setData(obj);
    }

    return (
        <>
        <article className={styles.header}>
            <h1 className={styles.h1}>{title}</h1>
        </article>
        <article className={styles.info}>
            {data.map(function(element, index) {
                return (
                    <div key={element.id} className={styles.repeat}>
                        <div className={styles.actions}>
                            <p>
                                <b className={styles.date}>{element.startDate} - {element.endDate}</b>
                                <span className={styles.address}>{element.address}</span>
                            </p>
                            <button className={styles.deleteButton} onClick={() => { del(index) }}>
                                Del
                            </button>
                            <button className={styles.editButton} onClick={() => { edit(index) }}>
                                Edit
                            </button>
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
                                    <h3>{element.positionTitle}</h3>
                                    <p>{element.description}</p>
                                </>
                            }
                        </div>
                    </div>
                    
                )
            })}
            
        </article>
        </>
    )
}