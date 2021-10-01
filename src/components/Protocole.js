import '../styles/Protocole.css';
import { useState } from 'react';

function Protocole(props) {

	const [inputElements, setInputElements] = useState([]);

    const addFields = () => {

        const component =
			<>
				<input type="text" placeholder="Parameter" className="optionsInput" onChange={props.method[0]} />
				<input type="text" placeholder="Value" className="optionsInput" onChange={props.method[1]} />
			</>;
        const addedElements = [...inputElements, component];
        setInputElements(addedElements);

    }

    return (
        <div className={props.className}>

			{

				inputElements.map((el, i) => (
					<div key={i} className="inputElements">
						{el}
					</div>
				))

			}

            <span className="addButton" onClick={addFields}>Add a Field</span>
        </div>
    );
}

export default Protocole;