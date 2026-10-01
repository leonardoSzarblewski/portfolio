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
              <li>Experiência profissional</li>
              <li>Cursos</li>
              <li>Projetos</li>
            </ul>
          </div>
          <div className="nav-items">
            <Button>Baixe meu curriculo</Button>
          </div>
        </div>
      </nav>

      <header>
        <div className="container">
          <div className="container-header">
            <div className="text-header">
              <span>QA Automation Engineer</span>
            </div>
            <h1>
              Garantindo robustez, automação e qualidade de
              <span> ponta a ponta</span>
            </h1>
            <p>
              Especialista em automação de testes E2E com Playwright & Cypress,
              validação de APIs REST, BDD com Gherkin e integração contínua
              (CI/CD). Formação superior em andamento na Uniasselvi e
              especialização Masterclass Qazando.
            </p>

            <div className="btns-header">
              <Button>Ver projetos de automação</Button>
              <button className="btn-formation">Certificados & Formação</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
