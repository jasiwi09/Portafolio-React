export default function Project({path, title}) {
    return (
        <div className="project-box">
            <div className="project-img">
                <img src={`${path}`} alt="" />
            </div>
            <div className="project-info">
                <h3>{title}</h3>
            </div>
        </div>
    );
}