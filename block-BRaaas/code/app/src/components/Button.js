function Button(props) {
    function clicker(name) {
        alert("Hi "+name);
    }
    return (
        <button onClick={() => clicker(props.name)} >{props.name}</button>
    )
}

export default Button;