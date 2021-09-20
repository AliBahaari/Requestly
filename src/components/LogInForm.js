import { useState } from "react";
import { useDispatch } from "react-redux";
import { adminAction } from '../actions/adminAction';
import '../styles/LogInForm.css';
import Error from './Error';

function LogInForm() {

    const dispatch = useDispatch();

    const [admin, setAdmin] = useState('');
    const [error, setError] = useState(false);

    const formSubmit = (e) => {
        e.preventDefault();

        if (admin.length > 2) {
            dispatch(adminAction(admin));
        } else {
            setError(true);
        }

    }

    const closeError = () => {

        setError(false);

    }

    return (
        <div className="logInForm">
            <h2>Enter your name:</h2>
            <form onSubmit={formSubmit}>
                <input type="text" onChange={(e) => setAdmin(e.target.value)} />
                <button>Log In</button>
            </form>

            {
                error ?
                <Error text="Enter your name." closeError={closeError} /> :
                ''
            }

        </div>
    );
}

export default LogInForm;