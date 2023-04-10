import { useState } from "react";
import PrintEducation from "./PrintEducation";


const Education = (props) => {
  const {education, setEducation} = props;
  const [college ,setCollege] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [marks, setMarks] = useState('');

//   college name saved
  const saveCollege = async(e) => {
    e.preventDefault();
    await setCollege(e.target.value);
  }

// course name  saved
  const saveCourse = async(e) => {
    e.preventDefault();
    await setCourse(e.target.value);
  }

//   marks saved
  const saveMarks = async(e) => {
    e.preventDefault();
    await setMarks(e.target.value);
  } 

//   year saved
  const saveYear = async(e) => {
    e.preventDefault();
    await setYear(e.target.value);
  }  


  const resetValue =() => {
    setCollege('');
    setCourse('');
    setMarks('');
    setYear('');
  }
  

  const addEducation = async() => {
    if(college === '' || course === ''){
        return;
    }
    console.log(college , course , year , marks);
    const obj = {};
    obj.key = education.length + 1;
    obj.college = college;
    obj.course = course;
    obj.year = year;
    obj.marks = marks;
    education.push(obj);
    console.log(education);
    setEducation(education);
    await resetValue();
    console.log(college , course , year , marks);
  }



    return (
            <div>
                <PrintEducation education={education} setEducation={setEducation} />
                <div class="card">
                    <h5 class="card-header">Add Education</h5>
                    <div class="card-body">
                        <div className="ed-div">
                            <div class="col-md-3">
                                <label for="inputUniv" class="form-label">Univerity/College</label>
                                <input type="text" class="form-control" id="inputUniv" onChange={saveCollege} required/>
                            </div>
                            <div class="col-md-3">
                                <label for="inputCourse" class="form-label">Course</label>
                                <input type="text" class="form-control" id="inputCourse" onChange={saveCourse} required/>
                            </div>
                            <div class="col-md-2">
                                <label for="inputYear" class="form-label">Year</label>
                                <input type="number" class="form-control" id="inputYear" onChange={saveYear} required/>
                            </div>
                            <div class="col-md-2">
                                <label for="inputMarks" class="form-label">Percentage</label>
                                <input type="number" class="form-control" id="inputMarks" onChange={saveMarks} required/>
                            </div>
                        </div>
                        <button type="reset" class="btn btn-primary" onClick={()=> addEducation()}> Add </button>
                    </div>
                </div>
            </div>
    )
}

export default Education;