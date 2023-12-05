import styles from './dataView.module.css';

export default function DataView (props) {
    const { data, setData, title, type, setEdit, setIndex, setCurrentEditPanel, currentEditPanel } = props;
    
    function edit(index) {
        setEdit(data[index]);
        setIndex(index);
        setCurrentEditPanel(currentEditPanel);
    }

    function del(index) {
        let obj = structuredClone(data);
        obj.splice(index, 1);

        setData(obj);
    }

    return (
        <>
        <article className={styles.header}>
            <h2 className={styles.h2}>{title}</h2>
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
                            <div className={styles.buttonDiv}>
                                <button className={styles.deleteButton} onClick={() => { del(index) }}>
                                    <img src="/trash.png"></img>
                                </button>
                                <button className={styles.editButton} onClick={() => { edit(index) }}>
                                    <img src="/botao-editar.png"></img>
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