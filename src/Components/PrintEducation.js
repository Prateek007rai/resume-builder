

const PrintEducation = (props) => {
    const {education, setEducation} = props;

    const deleteEdu = async (key) => {
        const arr = education.filter(data => data.key !== key);
        setEducation(arr);
        console.log(arr);
    }

    return (
        <div className="print-ed-div">
            {education.map((data) => (
                <div>
                    <span><b>University/College :</b> {data.college}</span>
                    <span><b>Course : </b>{data.course}</span>
                    <span><b>Year : </b>{data.year}</span>
                    <span><b>Marks Obtained : </b>{data.marks}</span>
                    <span><button class="btn btn-outline-danger" onClick={() => deleteEdu(data.key)}>Delete</button></span>
                </div>
            ))}
        </div>
    )
}

export default PrintEducation;