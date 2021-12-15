import React from 'react';
import { CenterAbout } from './styled';

export default function About() {
  return (
    <CenterAbout>
      <h4 id="about">Sobre</h4>
      <div className="about">
        <img src="./photouser.jpeg" alt="photouser" />
        <span>
          <p>
            Prazer!!! Sou Lailton,apaixonado por tecnologia, desenvolverdor
            FullStack, uso ReactJS e NodeJS, também sou professor de TI. Percebi
            que quanto mais estudamos mais poderes temos :){' '}
          </p>

          <br />
          <p>
            Neste site quero aprensentar alguns projetos pessoais, compartilhar
            minha experiência e claro aprender com você :)
          </p>
        </span>
      </div>
    </CenterAbout>
  );
}
