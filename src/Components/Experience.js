import { useState } from "react";
import PrintExperience from "./PrintExperience";



const Experience = (props) => {
    const {experience, setExperience} = props;
    const [company, setCompany] = useState('');
    const [designation, setDesignation] = useState('');
    const [expYear, setExpYear] = useState('');
    const [ctc, setCtc] = useState('');

    //   company name saved
    const saveCompany = async(e) => {
        e.preventDefault();
        await setCompany(e.target.value);
    }

    // designation  saved
    const saveDesignation= async(e) => {
        e.preventDefault();
        await setDesignation(e.target.value);
    }

    //   ctc saved
    const saveCtc= async(e) => {
        e.preventDefault();
        await setCtc(e.target.value);
    } 

    //  exp. year saved
    const saveExpYear = async(e) => {
        e.preventDefault();
        await setExpYear(e.target.value);
    }

    const resetValue =() => {
        setCompany('');
        setDesignation('');
        setCtc('');
        setExpYear('');
      }

    const addExperience = async() => {
        if(company === '' || designation === ''){
            return;
        }
        console.log(company , designation , expYear , ctc);
        const obj = {};
        obj.key = experience.length + 1;
        obj.company = company;
        obj.designation = designation;
        obj.year = expYear;
        obj.ctc = ctc;
        experience.push(obj);
        console.log(experience);
        setExperience(experience);
        await resetValue();
    }

    return (
        <div>
            <PrintExperience experience={experience} setExperience={setExperience} />
            <div class="card">
                <h5 class="card-header">Add Experience</h5>
                <div class="card-body">
                <div className="ed-div">
                    <div class="col-md-3">
                        <label for="inputUniv" class="form-label">Company Name</label>
                        <input type="text" class="form-control" id="inputUniv" onChange={saveCompany} required/>
                    </div>
                    <div class="col-md-3">
                        <label for="inputCourse" class="form-label">Designation</label>
                        <input type="text" class="form-control" id="inputCourse" onChange={saveDesignation} placeholder="ex: React Developer" required/>
                    </div>
                    <div class="col-md-2">
                        <label for="inputYear" class="form-label"> Experience Year</label>
                        <input type="number" class="form-control" id="inputYear" onChange={saveExpYear} placeholder="In year" required/>
                    </div>
                    <div class="col-md-2">
                        <label for="inputMarks" class="form-label">Annual CTC</label>
                        <input type="number" class="form-control" id="inputMarks" onChange={saveCtc} required placeholder="lakh/year"/>
                    </div>
                </div>
                <button type="reset" class="btn btn-primary" onClick={()=> addExperience()}> Add </button>
                </div>
            </div>
        </div>
    )
}

export default Experience;