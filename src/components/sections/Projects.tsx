import "./Projects.modules.css";

import { Button } from "../Button";

export function Projects() {
  return (
    <div className="container-projects">
      <div className="container-title">
        <span>Projetos</span>
        <h1>Desenvolvimento e Automação</h1>
        <div className="text-title">
          <p>
            Projetos de automação de testes de APIs e aplicações web com
            Cypress, além de projetos de desenvolvimento com React, JavaScript,
            HTML e CSS.
          </p>
        </div>

        <div className="container-card">
          <div className="cards">
            <div className="title-card-project">
              <h3>QazandoShop</h3>
              <strong className="category">Automação E2E</strong>
            </div>
            <div>
              <p className="text-project">
                Projeto de automação de testes E2E com Cypress e TypeScript para
                demonstrar boas práticas de QA.
              </p>
              <div className="stacks-all">
                <button className="stacks">TypeScript</button>
                <button className="stacks">Cypress</button>
                <button className="stacks">GitHub Actions</button>
              </div>
            </div>
            <Button children="Repositório" />
          </div>

          <div className="cards">
            <div className="title-card-project">
              <h3>bookerAutomationApi</h3>
              <strong className="category">Automação API</strong>
            </div>
            <div>
              <p className="text-project">
                Projeto de automação de testes API para demonstrar boas práticas
                de QA
              </p>
              <div className="stacks-all">
                <button className="stacks">Cypress</button>
                <button className="stacks">Postman</button>
                <button className="stacks">GitHub Actions</button>
              </div>
            </div>
            <Button children="Repositório" />
          </div>

          <div className="cards">
            <div className="title-card-project">
              <h3>agendamento-pet</h3>
              <strong className="category">React</strong>
            </div>
            <div>
              <p className="text-project">
                Projeto de agendamento pet, feito para fins de estudo
              </p>
              <div className="stacks-all">
                <button className="stacks">React</button>
                <button className="stacks">Node</button>
              </div>
            </div>
            <Button children="Repositório" />
          </div>

          <div className="cards">
            <div className="title-card-project">
              <h3>RESTful-api-automacao</h3>
              <strong className="category">Automação API</strong>
            </div>
            <div>
              <p className="text-project">
                Projeto idealizado pela QAzando, tem como objetivo testar a api
                RESTful-api utilizando os métodos http mais usados em testes
              </p>
              <div className="stacks-all">
                <button className="stacks">Cypress</button>
                <button className="stacks">Postman</button>
                <button className="stacks">GitHub Actions</button>
                <button className="stacks">Git</button>
              </div>
            </div>
            <Button children="Repositório" />
          </div>

          <div className="cards">
            <div className="title-card-project">
              <h3>cypress-intermediario</h3>
              <strong className="category">Cypress</strong>
            </div>
            <div>
              <p className="text-project">
                Testes automatizados com Cypress - Intermediário
              </p>
              <div className="stacks-all">
                <button className="stacks">Cypress</button>
                <button className="stacks">E2E</button>
                <button className="stacks">API</button>
                <button className="stacks">Postman</button>
                <button className="stacks">GitHub Actions</button>
                <button className="stacks">Git</button>
              </div>
            </div>
            <Button children="Repositório" />
          </div>

          <div className="cards">
            <div className="title-card-project">
              <h3>cypress-do-zero-a-nuvem</h3>
              <strong className="category">Cypress</strong>
            </div>
            <div>
              <p className="text-project">
                Projeto de estudo sobre testes automatizados do curso Talking
                About Testing, comandos básicos e iniciando na automação com
                cypress
              </p>
              <div className="stacks-all">
                <button className="stacks">Cypress</button>
                <button className="stacks">E2E</button>
                <button className="stacks">Postman</button>
                <button className="stacks">GitHub Actions</button>
                <button className="stacks">Git</button>
              </div>
            </div>
            <Button children="Repositório" />
          </div>
        </div>
      </div>
    </div>
  );
}
