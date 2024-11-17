import './About.css';


export default function About() {
    return (
        <div className="container-about" id="about">
            <h2>Sobre mi</h2>
            <div className="about-box">
                <i className="fa-solid fa-circle-info"></i>
                <div className="desc-box">
                    <p>Soy un estudiante de 21 años de grado superior de DAW en IES Emili Darder apasionado por la programación y la informática desde pequeño. Me encanta los sistemas, el scripting y hacer páginas webs. Considero que tengo muy buenas habilidades tanto con lenguajes de cliente como de servidor y me puedo desenvolver correctamente en un proyecto como desarrollador fullstack. Esta pasión empezó cuando tenía aproximadamente 12 años ya que jugaba bastante al Minecraft y quería hacer plugins para venderlos. Luego aprendí muchos lenguajes de forma autodidacta (mi forma favorita de aprender) y hasta ahora, que estoy formándome para tener títulos y seguir avanzando en el sector.</p>
                    <div className="socialmedia-box">
                        <a href="https://github.com/jasiwi09" target="_blank" rel="noreferrer" data-text="GitHub" className="tooltip"><i className="fa-brands fa-github"></i></a>
                        <a href="https://twitter.com/SrDixiMax" target="_blank" rel="noreferrer" data-text="X" className="tooltip"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="https://gist.github.com/jasiwi09/e6aa076c107fc5ec2653e809d55fade7#file-gistfile1-txt" data-text="Discord" className="tooltip" target="_blank" rel="noreferrer"><i className="fa-brands fa-discord"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}