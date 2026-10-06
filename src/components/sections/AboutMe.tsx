import "./AboutMe.modules.css";
import { Button } from "../Button";
import minhaFoto from "../../assets/minhafoto.jpeg";
import githubIcon from "../../assets/ícons/github.svg";
import linkedinIcon from "../../assets/ícons/linkedin.svg";
import instagramIcon from "../../assets/ícons/instagram.svg";
import reactIcon from "../../assets/ícons/react.svg";
import typescriptIcon from "../../assets/ícons/typescript.svg";
import cypressIcon from "../../assets/ícons/cypress.svg";
import playwrightIcon from "../../assets/ícons/playwright.svg";
import postmanIcon from "../../assets/ícons/postman.svg";
import gitIcon from "../../assets/ícons/git.svg";
import sqlIcon from "../../assets/ícons/sql.svg";
import mysqlIcon from "../../assets/ícons/mysql.svg";
import k6Icon from "../../assets/ícons/k6.svg";
import javascriptIcon from "../../assets/ícons/javascript.svg";
import htmlIcon from "../../assets/ícons/html.svg";
import cssIcon from "../../assets/ícons/css.svg";
import insomniaIcon from "../../assets/ícons/insomnia.svg";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/leonardoszarblewski",
    icon: githubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/leonardoszarblewski/",
    icon: linkedinIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/leonardo_szarblewski/",
    icon: instagramIcon,
  },
];

const stacks = [
  { name: "React", icon: reactIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "Cypress", icon: cypressIcon },
  { name: "Git", icon: gitIcon },
  { name: "Playwright", icon: playwrightIcon },
  { name: "Postman", icon: postmanIcon },
  { name: "SQL", icon: sqlIcon },
  { name: "K6", icon: k6Icon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "Insomnia", icon: insomniaIcon },
];

export function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <h1 className="about-me-title">
          Olá, me chamo Leonardo Szarblewski{" "}
          <span>
            Desenvolvo software, automatizo testes e entrego soluções com
            qualidade.
          </span>
        </h1>
        <p className="about-me-description">
          Trabalho na área de qualidade de software, com testes manuais e
          automação utilizando Cypress e Playwright. Também atuo no
          desenvolvimento com React, formado em Análise e Desenvolvimento de
          Sistemas pela Uniasselvi.
        </p>
        <div className="about-me-buttons">
          <Button children="Meus projetos" href="#projetos" />
          <Button
            children="Meus certificados"
            color="secondary"
            href="#cursos"
          />
        </div>
      </div>

      <aside className="about-me-profile" aria-label="Perfil profissional">
        <div className="profile-heading">
          <img
            className="profile-avatar"
            src={minhaFoto}
            alt="Foto de Leonardo Szarblewski"
          />
          <div>
            <h2>Leonardo Szarblewski</h2>
            <p>QA & Desenvolvedor</p>
          </div>
        </div>

        <div className="profile-section">
          <h3>Redes sociais</h3>
          <div className="profile-socials">
            {socials.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Acessar ${name}`}
              >
                <img src={icon} alt="" />
                <span>{name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="profile-section">
          <h3>Linguagens e ferramentas</h3>
          <ul className="profile-stacks">
            {stacks.map(({ name, icon }) => (
              <li key={name}>
                <img src={icon} alt="" />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}
