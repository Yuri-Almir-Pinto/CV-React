import styles from './showArea.module.css';

export default function ShowArea (props) {
    const { basicData } = props;

    return (
        <>
        { basicData.name !== "" &&
        <article className={styles.header}>
            <h1 className={styles.h1}>{basicData.name}</h1>
        </article>
        }
        <article className={styles.basicInfo}>
            <div className={styles.basicInfoDescription}>
                <p>{basicData.description}</p>
            </div>
            <div className={styles.basicInfoContact}>
                { basicData.email !== "" &&
                    <p><b>Email: </b>{basicData.email}</p>
                }
                { basicData.phoneNumber !== "" &&
                    <p><b>Phone number: </b>{basicData.phoneNumber}</p>
                }
                { basicData.address !== "" &&
                    <p><b>Address: </b>{basicData.address}</p>
                }
            </div>
        </article>
        </>
    )
}