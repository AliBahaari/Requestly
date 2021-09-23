import '../styles/Input.css';

function Input(props) {
    return (
        <input type="text" placeholder={props.placeholder} className="optionsInput" />
    );
}

export default Input;