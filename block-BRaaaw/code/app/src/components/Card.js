function Card(props) {
    function getFruit(fruit) {
        switch(fruit) {
            case "banana":
                return "🍌";

            case "strawberry":
                return "🍓";

            case "apple":
                return "🐮";

        }
    }
    return (
        <div className= {props.isActive ? "card active" : "card inactive"}>
            <h2>{props.name}</h2>
            <p>{props.gender === 'male' ? "🙋‍♂️" : "🤷‍♀️"}</p>
            <p>{props.company}</p>
            <p>{props.email}</p>
            <p>{props.phone}</p>
            <img src="#" alt="Alt Text"/>
            <p>{props.age}</p>
            <p>{getFruit(props.favoriteFruit)}</p>
        </div>
    )
}

export default Card;