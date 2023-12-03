import styles from './showArea.module.css';
import { basicDemo, basicTemplate } from '../data/basicData';

export default function ShowArea (props) {
    const { basicData = basicTemplate } = props;

    return (
        <>
        <article className={styles.header}>
            <h1 className={styles.h1}>{basicData.name}</h1>
        </article>
        <article className={styles.basicInfo}>
            <div className={styles.basicInfoDescription}>
                <p>{basicData.description}</p>
            </div>
            <div>
                <p><b>Email: </b>{basicData.email}</p>
                <p><b>Phone number: </b>{basicData.phoneNumber}</p>
                <p><b>Address: </b>{basicData.address}</p>
            </div>
        </article>
        </>
    )
}