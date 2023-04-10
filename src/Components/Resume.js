

const Resume = (props) => {
    
    const {resume} = props;

    return (
        <div className="resume-div">
            
            {/* Header details */}
            <div className="heading">
                <img src="https://cdn-icons-png.flaticon.com/128/1946/1946429.png" alt="resume-img"/>
                <div>
                    <h2>{resume.name}</h2>
                    <h5>Software Developer - Fresher</h5>
                    <p className="small-details"> 
                       <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="email-img"/>  {resume.email}
                    </p> 
                    <p className="small-details"> 
                       <img src="https://cdn-icons-png.flaticon.com/128/3059/3059590.png" alt="call-img"/>  {resume.phone}
                    </p> 
                    <p className="small-details">
                       <img src="https://cdn-icons-png.flaticon.com/128/684/684908.png" alt="location-img"/>  {resume.address}
                    </p> 
                </div>
            </div>

            {/* Introduction details */}
            <div className="intro-div">
               <h3 className="small-headings">Introduction</h3>
               <p>{resume.introduction}</p>
            </div>

            {/* Education part */}
            <h3 className="small-headings">Education</h3>
            <div className="resume-ed-div">   
                <ul>
                    {resume.education.map((data)=>(
                        <li>
                                <div className="ed-obj-data">
                                <p className="res-p">University/College Name : <span>{data.college}</span></p>
                                <p className="res-p">Course Type/Specialisation : <span>{data.course}</span></p>
                                <p className="res-p">Passout Year : <span>{data.year}</span></p>
                                <p className="res-p">Marks(Percentage) : <span>{data.marks}</span></p>
                                </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Experience part */}
            <h3 className="small-headings">Experience</h3>
            <div className="resume-ed-div">   
                <ul>
                    {resume.experience.map((data)=>(
                        <li>
                                <div>
                                <p className="res-p">Company Name : <span>{data.company}</span></p>
                                <p className="res-p">Designation/Job Role : <span>{data.designation}</span></p>
                                <p className="res-p">Work Time : <span>{data.year}</span> year</p>
                                <p className="res-p">Current CTC (lpa/year) : <span>{data.ctc}</span></p>
                                </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Skills part */}
            <h3 className="small-headings">Skills</h3>
            <div className="resume-ed-div">   
                <ul>
                    {resume.skills.map((data)=>(
                        <li>
                                <div>
                                <p className="res-p"><span>{data.skills}</span></p>
                                </div>
                        </li>
                    ))}
                </ul>
            </div>
            <h5 className="thank">-- Thank You --</h5>
        </div>
    )
}

export default Resume;