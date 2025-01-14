import './formField.css';
function FormField(props){
    return(
        <div class="field">
        <label class="label">
        {props.name}
        </label>
        <div class="control">
            <input class="input" type={props.type} placeholder={props.placeholder} />
        </div>
        </div>
    )
}

export default FormField;