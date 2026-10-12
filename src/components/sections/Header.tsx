import "./Header.modules.css";
import quality from "../../assets/quality.svg";

export function Header() {
  return (
    <>
      <nav>
        <div className="container-nav">
          <div className="text-nav">
            <img className="img-icon" src={quality} alt="imagem de inseto" />
            <div>
              <h3>Leonardo Szarblewski</h3>
              <strong>QA Engineer | Software Developer</strong>
            </div>
          </div>

          <div className="nav-items">
            <ul>
              <a href="#experiencia-profissional">
                <li>Experiência profissional</li>
              </a>

              <a href="#cursos">
                <li>Certificados</li>
              </a>

              <a href="#projetos">
                <li>Projetos</li>
              </a>
            </ul>
          </div>

          <a className="curriculum" href="">
            Meu currículo
          </a>
        </div>
      </nav>
    </>
  );
}
