

const PrintExperience = (props) => {
    const {experience, setExperience} = props;

    const deleteEdu = async (key) => {
        const arr = experience.filter(data => data.key !== key);
        setExperience(arr);
        console.log(arr);
    }

    return (
        <div className="print-ed-div">
            {experience.map((data) => (
                <div>
                    <span><b>University/College :</b> {data.company}</span>
                    <span><b>Course : </b>{data.designation}</span>
                    <span><b>Year : </b>{data.year}</span>
                    <span><b>Marks Obtained : </b>{data.ctc}</span>
                    <span><button class="btn btn-outline-danger" onClick={() => deleteEdu(data.key)}>Delete</button></span>
                </div>
            ))}
        </div>
    )
}

export default PrintExperience;