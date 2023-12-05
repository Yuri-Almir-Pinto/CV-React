import styles from './button.module.css';

export default function SelectButton (props) {
    const { children, clickHandler, id, customStyle, styleId } = props;
    return (
        <>
        <button className={`${styles.button} ${customStyle}`} onClick={() => {clickHandler(id)}} id={styleId}>
            {children}
        </button>
        </>
    )
}