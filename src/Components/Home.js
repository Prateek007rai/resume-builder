import { useState } from "react";
import { Link } from "react-router-dom";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";



const Home = (props) => {

    const {resume , setResume} = props;
    const [name ,setName] = useState('');
    const [email, setEmail] = useState('');
    const [address ,setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [introduction, setIntrduction] = useState('');
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [skills , setSkills] = useState([]);


    // name saved
    const saveName = async(e) => {
        e.preventDefault();
        await setName(e.target.value);
    }

    // email saved
    const saveEmail = async(e) => {
        e.preventDefault();
        await setEmail(e.target.value);
    }

    // Address saved
    const saveAddress = async(e) => {
        e.preventDefault();
        await setAddress(e.target.value);
    }

    // Phone no. saved
    const savePhone = async(e) => {
        e.preventDefault();
        await setPhone(e.target.value);
    }

    // introduction saved
    const saveIntroduction = async(e) => {
        e.preventDefault();
        await setIntrduction(e.target.value);
    }


    const makeResume = () => {
       console.log(name , phone ,skills ,experience, email ,education , introduction);
       resume.name = name;
       resume.phone = phone;
       resume.skills = skills;
       resume.experience = experience;
       resume.email = email;
       resume.education = education;
       resume.address = address;
       resume.introduction = introduction;
       setResume(resume);
       console.log('it is the data',resume);
    }

    return (
        <div className="Home">
           <p>Enter Details :</p>

           <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputName4" class="form-label">Name</label>
                    <input type="text" class="form-control" id="inputName4" onChange={saveName}/>
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" onChange={saveEmail}/>
                </div>
                <div class="col-md-6">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" onChange={saveAddress} placeholder="1234 Main St"/>
                </div>
                <div class="col-md-6">
                    <label for="MobileNumber" class="form-label">Mobile No</label>
                    <input type="number" class="form-control" id="MobileNumber" onChange={savePhone} placeholder="ex: 73761XXXXX"/>
                </div>

                <p>Introduction</p>
                <div class="input-group">
                    <span class="input-group-text">Your Journey</span>
                    <textarea class="form-control" aria-label="With textarea" onChange={saveIntroduction} ></textarea>
                </div>

                <p>Educational Details:</p>
                <Education education={education} setEducation={setEducation} />

                <p>Experience Details:</p>
                <Experience experience={experience} setExperience={setExperience} />

                <p>Skills:</p>
                <Skills skills={skills} setSkills={setSkills} />

                
                <div class="col-12" className="submit-detail" >
                    <Link to='/resume'><button type="submit" class="btn btn-primary" onClick={() => makeResume()}>Submit Details</button></Link>
                </div>
            </form>
        </div>
    )
}


export default Home;