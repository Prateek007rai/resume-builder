const PrintSkills = (props) => {
    const {skills , setSkills} = props;

    const deleteEdu = async (key) => {
        const arr = skills.filter(data => data.key !== key);
        setSkills(arr);
        console.log(arr);
    }

    return (
        <div className="print-skills-div">
            {skills.map((data) => (
                <div>
                    <span>{data.skills}</span>
                    <span><img src="https://cdn-icons-png.flaticon.com/128/1632/1632708.png" alt="skill-del-pic" onClick={() => deleteEdu(data.key)} /></span>
                </div>
            ))}
        </div>
    )
}

export default PrintSkills;