import "./Header.modules.css";
import quality from "../../assets/quality.svg";
import { Button } from "../Button";

export function Header() {
  return (
    <>
      <nav>
        <div className="container-nav">
          <div className="text-nav">
            <img className="img-icon" src={quality} alt="imagem de inseto" />
            <div>
              <h4>@LeonardoSzarblewski</h4>
              <strong>Quality assurance</strong>
            </div>
          </div>

          <div className="nav-items">
            <ul>
              <a href="#experiencia-profissional">
                <li>Experiência profissional</li>
              </a>

              <a href="#cursos">
                <li>Cursos</li>
              </a>

              <a href="#projetos">
                <li>Projetos</li>
              </a>
            </ul>
          </div>
          <div className="nav-items">
            <Button>Baixe meu curriculo</Button>
          </div>
        </div>
      </nav>
    </>
  );
}
