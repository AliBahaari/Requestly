import Input from "./Input";
import '../styles/Protocole.css';
import { useState } from 'react';

function Protocole(props) {

	const [inputElements, setInputElements] = useState([<><Input placeholder="Param Name" /><Input placeholder="Value" /></>]);

    const addFields = () => {
        const component = <><Input placeholder="Param Name" /><Input placeholder="Value" /></>;
        const addedElements = [...inputElements, component];
        setInputElements(addedElements);
    }

    const removeFields = () => {
    	const removedElements = [inputElements.pop()];
    	setInputElements(removedElements);
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