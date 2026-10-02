import "./Career.mdoules.css";

type Props = {
  id: string;
};

export function Career({ id }: Props) {
  return (
    <section id={id} className="career-section">
      <div className="career-header">
        <span>Trajetória Profissional</span>
        <h1>Experiência Profissional</h1>
        <p>
          Minha evolução no mercado de garantia de qualidade e automação de
          testes.
        </p>
      </div>

      <article className="career-card">
        <div className="career-card-header">
          <div className="career-role">
            <h2>Contato Seguro</h2>
            <span className="career-company">Estagiário de TI</span>
          </div>

          <div className="career-meta">
            <span className="career-badge">Remoto</span>
            <span className="career-badge">Junho 2026</span>
          </div>
        </div>

        <div className="career-body">
          <p>
            Atuação em QA com foco em automação de testes, criação de cenários
            de teste, execução de testes funcionais e identificação de bugs.
            Durante 3 meses, também atuei no desenvolvimento front-end com React
            e TypeScript, contribuindo na implementação e manutenção de
            funcionalidades.
          </p>

          <ul className="career-points">
            <li>
              Criação e manutenção de testes automatizados E2E com Cypress e
              Typescript
            </li>
            <li>Execução de testes de API com Postman</li>
            <li>Planejar, criar, executar e manter casos e planos de teste</li>
            <li>Escrita de cenários BDD utilizando Gherkin</li>
            <li>Acompanhamento de métricas de qualidade</li>
            <li>
              Suporte ao time de desenvolvimento na identiﬁcação e correção de
              bugs
            </li>
            <li>
              Experiência em desenvolvimento front-end com React e Typescript
            </li>
          </ul>
        </div>

        <div className="career-techs" aria-label="Tecnologias utilizadas">
          <span>Cypress</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>Postman</span>
          <span>Docker</span>
          <span>Testes Automatizados</span>
          <span>Testes Funcionais</span>
          <span>Testes de Regressão</span>
          <span>Testes de Integração</span>
          <span>Testes de Segurança</span>
        </div>
      </article>

      <article className="career-card">
        <div className="career-card-header">
          <div className="career-role">
            <h2>Compliance Station</h2>
            <span className="career-company">Estagiário de QA</span>
          </div>

          <div className="career-meta">
            <span className="career-badge">Remoto</span>
            <span className="career-badge">Julho 2025</span>
          </div>
        </div>

        <div className="career-body">
          <p>
            Atuação como QA na automação e execução de testes, contribuindo para
            a qualidade das aplicações por meio da criação de cenários de teste,
            identificação de bugs e acompanhamento de indicadores de qualidade.
          </p>

          <ul className="career-points">
            <li>Desenvolver e manter automações de testes Web e APIs</li>
            <li>Acompanhamento de métricas de qualidade</li>
            <li>
              Suporte ao time de desenvolvimento na identiﬁcação e correção de
              bugs
            </li>
            <li>
              Definir estratégias de testes, critérios de aceite e análise de
              riscos.
            </li>
          </ul>
        </div>

        <div className="career-techs" aria-label="Tecnologias utilizadas">
          <span>Cypress</span>
          <span>Testes Automatizados</span>
          <span>Testes Funcionais</span>
          <span>Testes de Regressão</span>
          <span>Testes de Integração</span>
          <span>Testes de Segurança</span>
        </div>
      </article>
    </section>
  );
}
