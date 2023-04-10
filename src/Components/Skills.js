import { useState } from "react";
import PrintSkills from "./PrintSkills";


const Skills = (props) => {

    const {skills , setSkills} = props;
    const [skillName, setSkillName] = useState('');

    const saveSkillName = async(e) => {
        setSkillName(e.target.value);
    }
    const resetValue= () => {
        setSkillName('');
    }

    const saveSkills = async() => {
        if(skillName === ''){
            return;
        }
        console.log('000',skillName);
        const obj = {};
        obj.key = skills.length + 1;
        obj.skills = skillName;
        skills.push(obj);
        await resetValue();
    }

    return (
        <div>
            <PrintSkills skills={skills} setSkills={setSkills} />
            <div className="skill-div">
                    <div class="col-md-12">
                        <label for="inputMarks" class="form-label">Enter Skills</label>
                        <input type="text" class="form-control" id="inputMarks" onChange={saveSkillName} placeholder="Enter Skills you have"/>
                    </div>
                    <button type="reset" href="#" class="btn btn-primary" onClick={()=>saveSkills()}> Add </button>
            </div>
        </div>
    )
}

export default Skills;