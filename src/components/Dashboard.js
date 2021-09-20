import { useSelector } from 'react-redux';
import '../styles/Dashboard.css';
import Select from 'react-select';
import { useState } from 'react';
import Error from './Error';

const options = [
    { value: 'post', label: 'POST' },
    { value: 'get', label: 'GET' },
];

function Dashboard() {

    const adminReducer = useSelector(state => state.adminReducer)
    const [selectedOption, setSelectedOption] = useState(null);
    const [url, setUrl] = useState('');
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [data, setData] = useState(null);
    const [response, setResponse] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();

        if (selectedOption !== null) {
            setError(false);
            if (url.length > 0) {
                setError(false);
                if (/[a-z0-9-]+(\.\w+)+/g.test(url)) {
                    setError(false);
                    
                    if (!url.includes('http://') || !url.includes('https://')) {
                        
                        try {

                            fetch(url, {
                                method: selectedOption.value
                            })
                            .then(response => response.json())
                            .then(data => {
                                
                                setResponse(true);
                                setData(data);
                                
                            });

                            setResponse(true);

                        } catch (err) {
                            console.log(err);
                        }
                    
                    }

                } else {
                    setErrorText('The URL isn\'t compatible.');
                    setError(true);
                }
            } else {
                setErrorText('The URL must be filled.');
                setError(true);            
            }
        } else {
            setErrorText('Select the protocole.');
            setError(true);
        }

    }

    const closeError = () => {

        setError(false);

    }

    return (
        <div className="dashboard">

            <h1>Welcome {adminReducer.admin} to Requestly!</h1>

            <form onSubmit={submitForm}>
                <div>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        className="selectComponent"
                    />
                </div>

                <input type="text" onChange={(e) => setUrl(e.target.value)} />
                
                <button>
                    Request
                </button>
            </form>

            {
                error ?
                <Error text={errorText} closeError={closeError} /> :
                ''
            }

            {
                response ?
                <div className="dashboardResponse">
                    <h2>Response</h2>
                    <code>

                        {
                            data ?
                            JSON.stringify(data, null, 2) :
                            ''
                        }

                    </code>
                </div> :
                ''
            }

        </div>
    );
}

export default Dashboard;