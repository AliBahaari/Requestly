import '../styles/Protocole.css';
import { useState } from 'react';

function Protocole(props) {

	const [inputElements, setInputElements] = useState([
		<>
			<input type="text" placeholder={props.placeholder} className="optionsInput" />
			<input type="text" placeholder={props.placeholder} className="optionsInput" />
		</>
	]);

    const addFields = () => {

        const component =
			<>
				<input type="text" placeholder={props.placeholder} className="optionsInput" />
				<input type="text" placeholder={props.placeholder} className="optionsInput" />
			</>;
        const addedElements = [...inputElements, component];
        setInputElements(addedElements);

    }

    const removeFields = () => {
		
    }

    return (
        <div className={props.className}>
            <h2>{props.title}</h2>

			{

				inputElements.map((el, i) => (
					<div key={i} className="inputElements">
						{el}
					</div>
				))

			}

			{
				inputElements.length > 1 ?
					<span className="removeButton" onClick={removeFields}>Remove a Field</span>
				:
					''
			}

            <span className="addButton" onClick={addFields}>Add a Field</span>
        </div>
    );
}

export default Protocole;