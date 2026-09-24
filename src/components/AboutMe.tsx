import "../components/AboutMe.modules.css";

export function AboutMe() {
  return (
    <div className="container-aboutme">
      <div>
        <h2>
          <span className="aboutme">// SOBRE MIM</span>
        </h2>

        <p className="aboutme-text">
          Olá! Meu nome é <span>Leonardo Szarblewski</span>, sou formado em
          <span> Análise e Desenvolvimento de Sistemas</span> e atuo na área de
          tecnologia há mais de 3 anos. <br /> <br /> Minha trajetória começou
          no desenvolvimento web, onde construí minha base em programação e
          desenvolvimento de aplicações. Com o tempo, direcionei minha carreira
          para <span>Quality Assurance (QA)</span>, área na qual venho me
          especializando por meio de cursos e projetos práticos. Entre eles,
          destaco a <span>Masterclass QAzando</span>, com certificado
          reconhecido pelo MEC, além de outras formações voltadas à qualidade e
          aos testes de software. <br />
          <br /> Possuo experiência com ferramentas e tecnologias como{" "}
          <span>
            Cypress, Playwright, Postman, Gherkin (BDD), TypeScript, SQL, React
            e Docker{" "}
          </span>
          , além de conhecimentos em Git, versionamento de código e integração
          com pipelines de desenvolvimento (CI/CD).
        </p>
      </div>
      <div className="timeline-aboutme">
        <div className="timeline-content">
          <h3>Competências Técnicas</h3>
          <p>
            <span>- Testes de Software:</span> Testes manuais e automatizados,
            testes funcionais, regressão, integração, exploratórios e validação
            de APIs. <br /> <br /> <span>- Desenvolvimento & Ferramentas:</span>{" "}
            Git, GitHub, Docker, TypeScript e integração com pipelines de CI/CD.{" "}
            <br /> <br /> <span>- Metodologias Ágeis:</span> Scrum, Kanban e
            BDD. <br /> <br /> <span>- Fundamentos:</span> Formação em Análise e
            Desenvolvimento de Sistemas, com conhecimentos em lógica de
            programação, algoritmos, estruturas de dados e desenvolvimento de
            software.
          </p>
        </div>
      </div>
    </div>
  );
}
