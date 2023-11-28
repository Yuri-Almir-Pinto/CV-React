import './button.css';

export default function SelectButton (props) {
    const { children, clickHandler, id } = props;

    return (
        <>
        <button onClick={() => {clickHandler(id)}}>
            {children}
        </button>
        </>
    )
}