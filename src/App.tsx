import quality from "./assets/quality.svg";
import { Button } from "./components/Button";

function App() {
  return (
    <header>
      <nav>
        <div className="container-nav">
          <div className="text-nav">
            <img className="img-icon" src={quality} alt="imagem de inseto" />
            <div>
              <h4>@LeonardoSzarblewski</h4>
              <strong>Quality assurance</strong>
            </div>
          </div>

          <div>
            <ul>
              <li>Sobre mim</li>
              <li>Experiência profissional</li>
              <li>Formação</li>
              <li>Projetos</li>
              <li>Stack</li>
            </ul>
          </div>
          <Button>Baixe meu curriculo</Button>
        </div>
      </nav>
    </header>
  );
}

export default App;
