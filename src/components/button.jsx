import styles from './button.module.css';

export default function SelectButton (props) {
    const { children, clickHandler, id } = props;

    return (
        <>
        <button className={styles.button} onClick={() => {clickHandler(id)}}>
            {children}
        </button>
        </>
    )
}