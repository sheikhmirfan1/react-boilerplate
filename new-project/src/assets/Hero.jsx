//import App from "../App"

const PersonTemplate = ({ name, age,location }) => {
    return (
        <div>
            <h1>Hi My is {name}</h1>
            <p>My age is {age} My location is {location}</p>
            <button>submit</button>
        </div>
    )
}

export default PersonTemplate