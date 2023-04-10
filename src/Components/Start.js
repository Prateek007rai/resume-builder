import { Link } from "react-router-dom";


const Start = () => {

    return (
        <div className="start-div">
                <div className="quote">
                    <p>
                    "Your <span>Resume</span> is an extension <br /> of yourself. Make one that's truly you"
                    </p>
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-vector/hr-manager-looking-through-magnifying-glass_441769-313.jpg?size=626&ext=jpg" alt="resume-img" />
                    <Link to='/Home'> <button>Build Your Resume </button> </Link>
                </div>
        </div>
    )
}

export default Start;