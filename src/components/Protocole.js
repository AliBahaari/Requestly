import Input from "./Input";
import '../styles/Protocole.css';

function Protocole(props) {

    const addFields = () => {

        console.log('Add More Fields');

        document.getElementsByClassName(props.className)[0].append(<div>Test</div>);

    }

    return (
        <div className={props.className}>
            <h2>{props.title}</h2>

            <div>
                <Input placeholder="Param Name" />
                <Input placeholder="Value" />
            </div>

            <span onClick={addFields}>Add More Fields</span>
        </div>
    );
}

export default Protocole;