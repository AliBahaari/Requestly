import '../styles/Error.css';

function Error(props) {
    return (
        <div className="error">
            <p>{ props.text }</p>
            <p className="timesSign" onClick={props.closeError}>×</p>
        </div>
    );
}

export default Error;