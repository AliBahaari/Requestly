import '../styles/Response.css';

function Response(props) {
    return (
        <div className="response">
            <code>

                {props.children}

            </code>
        </div>
    );
}

export default Response;