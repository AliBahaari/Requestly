import '../styles/Dashboard.css';
import Select from 'react-select';
import { useState } from 'react';
import Error from './Error';
import Protocole from './Protocole';
import Response from './Response';

const options = [
    { value: 'post', label: 'POST' },
    { value: 'get', label: 'GET' },
];

function Dashboard() {

    const [selectedOption, setSelectedOption] = useState(null);
    const [url, setUrl] = useState('');
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [data, setData] = useState(null);
    const [response, setResponse] = useState(false);
    const [firstInputs, setFirstInputs] = useState([]);
	const [secondInputs, setSecondInputs] = useState([]);
    const [formData, setFormData] = useState({});

    const submitForm = (e) => {
        e.preventDefault();

        setResponse(false);
        setData(null);

        for (let i = 0; i < firstInputs.length; i++) {

            setFormData({...formData,
                [firstInputs[i]]: secondInputs[i]
            });

        }

        if (selectedOption !== null) {
            setError(false);
            if (url.length > 0) {
                setError(false);
                if (/[a-z0-9-]+(\.\w+)+/g.test(url)) {
                    setError(false);
                    
                    if (!url.includes('http://') || !url.includes('https://')) {

                        try {

                            if (selectedOption.value === 'post') {

                                fetch(url, {
                                    method: selectedOption.value,
                                    body: formData
                                })
                                .then(response => response.json())
                                .then(data => {
                                    
                                    setResponse(true);
                                    setData(data);
                                    
                                });

                            } else if (selectedOption.value === 'get') {
                                
                                const newUrl = new URL(url);
                                
                                for (let key in formData) {
                                    newUrl.searchParams.append(key, formData[key]);
                                }

                                fetch(newUrl, {
                                    method: selectedOption.value
                                })
                                .then(response => response.json())
                                .then(data => {
                                    
                                    setResponse(true);
                                    setData(data);
                                    
                                });                     

                            }

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

    const firstInputsMethod = (e) => {
		setFirstInputs([...firstInputs, e.target.value]);
	}

	const secondInputsMethod = (e) => {
		setSecondInputs([...secondInputs, e.target.value]);
	}

    return (
        <div className="dashboard">
            <div className="requestSection">

                <h1>URL Status by Requestly!</h1>

                <form onSubmit={submitForm}>
                    <div>
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            className="selectComponent"
                        />
                    </div>

                    <input type="text" placeholder="URL..." onChange={(e) => setUrl(e.target.value)} />
                    
                    <button>
                        Request
                    </button>
                </form>

                {
                    error ?
                        <Error text={errorText} closeError={closeError} />
                    :
                        ''
                }

            </div>
            <div className="optionsSection">
                <div>
                    <h2>Response</h2>
                    {
                        response ?
                            <Response>
                                {
                                    data ?
                                        JSON.stringify(data, null, 2)
                                    :
                                        ''
                                }
                            </Response>
                        :
                            <p className="responseInfo">No Data Yet...</p>
                    }

                </div>
                <div>
                    {
                        selectedOption !== null ?
                        (
                            selectedOption.value === 'post' ?
                                <h2>Data</h2>
                            :
                                <h2>Params</h2>
                        ) 
                    :
                        <h2>Data & Params</h2>
                    }
                    
                    {
                        selectedOption !== null ?
                            (
                                selectedOption.value === 'post' ?
                                    <Protocole className="postData" title="Post Data" method={[firstInputsMethod, secondInputsMethod]} />
                                :
                                    <Protocole className="getParams" title="Get Params" method={[firstInputsMethod, secondInputsMethod]} />
                            ) 
                        :
                            <p className="protocoleInfo">Choose the protocole to enable options...</p>
                    }            
                </div>
            </div>
        </div>
    );
}

export default Dashboard;