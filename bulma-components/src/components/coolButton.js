import './coolButton.css';
function CoolButton(props){
    return(
        <div>
        <a class={props.state} href={props.link}>
        {props.name}
        </a>
        </div>
    )
}
export default CoolButton;