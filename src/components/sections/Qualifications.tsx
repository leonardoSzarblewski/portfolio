import { Cards } from "../Cards";

import "./Qalification.modules.css";

import masterclass from "../../assets/certificates/masterclass.png";
import apiqazando from "../../assets/certificates/apiqazando.png";
import cypressintermediario from "../../assets/certificates/cypressintermediario.png";
import git from "../../assets/certificates/git.png";
import jsparatester from "../../assets/certificates/jsparatester.png";
import conceitosbasicosapi from "../../assets/certificates/conceitosbasicosapi.png";
import apicomcypress from "../../assets/certificates/apicomcypress.png";
import cypressdozeroanuvem from "../../assets/certificates/cypressdozeroanuvem.png";
import fundamentoshtmlcss from "../../assets/certificates/fundamentoshtmlcss.png";
import gitegithub from "../../assets/certificates/gitegithub.png";
import javascriptrocketseat from "../../assets/certificates/javascriptrocketseat.png";

type Props = {
  id: string;
};

export function Qualifications({ id }: Props) {
  return (
    <div id={id} className="container-qualification">
      <div className="title-qualification">
        <span>Qualificações & Aprendizado</span>
        <h1>Formações e Certificados</h1>
        <p>
          Destaque para a Masterclass Qazando e formação superior em andamento
          na Uniasselvi.
        </p>
      </div>

      <div className="container-cards">
        <Cards
          title="Masterclass QAzando"
          year="2025"
          description="Destaque"
          img={masterclass}
        />

        <Cards
          title="Git para tester"
          year="2026"
          description="Git"
          img={git}
        />

        <Cards
          title="API com Cypress"
          year="2025"
          description="API / Cypress"
          img={apicomcypress}
        />

        <Cards
          title="Cypress do Zero à Nuvem"
          year="2025"
          description="Cypress / E2E"
          img={cypressdozeroanuvem}
        />

        <Cards
          title="JavaScript para tester"
          year="2025"
          description="JavaScript"
          img={jsparatester}
        />

        <Cards
          title="Conceitos básicos de API"
          year="2025"
          description="API"
          img={conceitosbasicosapi}
        />

        <Cards
          title="Git e Github Rocketseat"
          year="2024"
          description="Git / Github"
          img={gitegithub}
        />

        <Cards
          title="JavaScript Rocketseat"
          year="2024"
          description="JavaScript"
          img={javascriptrocketseat}
        />

        <Cards
          title="Fundamentos básicos de Html e Css"
          year="2024"
          description="Fundamentos HTML / CSS"
          img={fundamentoshtmlcss}
        />

        <Cards
          title="Automação de teste de API com Cypress"
          year="2025"
          description="Cypress / api"
          img={apiqazando}
        />

        <Cards
          title="Automação de teste intermediário com Cypress"
          year="2025"
          description="Cypress"
          img={cypressintermediario}
        />
      </div>
    </div>
  );
}
