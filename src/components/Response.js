import '../styles/Response.css';

function Response(props) {
    return (
        <div className="response">
            <h2>Response</h2>
            <code>

                {props.children}

            </code>
        </div>
    );
}

export default Response;