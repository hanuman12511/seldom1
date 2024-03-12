function PrimaryInput(props){
    return(
        <div>
            <label>{props.text}</label>
            <input placeholder={props.placeholder}/>
            <img src={props.icon} width={50} height={50}/>
        </div>
    )
}
export default PrimaryInput;