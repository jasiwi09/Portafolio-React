import './Skills.css';


export default function Skills() {
    return (
        <div className="container-skills" id="skills">
            <h2>mis skills</h2>
            <div className="skills-box">
                <i className="fa-solid fa-chart-simple"></i>
                <div className="skills-icons">
                    <span data-text="HTML5" className="tooltip"><i className="fa-brands fa-html5"></i></span>
                    <span data-text="CSS3" className="tooltip"><i className="fa-brands fa-css3"></i></span>
                    <span data-text="JavaScript" className="tooltip"><i className="fa-brands fa-js"></i></span>
                    <span data-text="TailWind" className="tooltip"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                        <path d="M9.782.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231C14.488 3.365 13.551.6 9.782.72ZM4.8 6.979A4.772 4.772 0 0 0 0 11.151a3.43 3.43 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231C9.51 9.623 8.573 6.853 4.8 6.979Z"/>
                    </svg></span>
                    <span data-text="Bootstrap" className="tooltip"><i className="fa-brands fa-bootstrap"></i></span>
                    <span data-text="PHP" className="tooltip"><i className="fa-brands fa-php"></i></span>
                    <span data-text="NodeJS" className="tooltip"><i className="fa-brands fa-node"></i></span>
                    <span data-text="NPM" className="tooltip"><i className="fa-brands fa-npm"></i></span>
                    <span data-text="Python" className="tooltip"><i className="fa-brands fa-python"></i></span>
                    <span data-text="Java" className="tooltip"><i className="fa-brands fa-java"></i></span>
                    <span data-text="GIT" className="tooltip"><i className="fa-brands fa-git"></i></span>
                    <span data-text="GitHub" className="tooltip"><i className="fa-brands fa-github"></i></span>
                    <span data-text="MYSQL" className="tooltip"><i className="fa-solid fa-database"></i></span>
                </div>
            </div>
        </div>
    );
}