import Input from "./Input";
import '../styles/Protocole.css';

function Protocole(props) {
    return (
        <div className={props.className}>
            <h2>{props.title}</h2>

            <div>

                <div>
                    <Input placeholder="Param Name" />
                    <Input placeholder="Value" />
                </div>

            </div>

            <span>ADD</span>
        </div>
    );
}

export default Protocole;