import React from 'react';
import { FaCss3Alt, FaNodeJs, FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import {
  SiStyledcomponents,
  SiRedux,
  SiMysql,
  SiDocker,
  SiHtml5,
} from 'react-icons/si';
import { CenterHome, Skill } from './styled';
import { Container } from '../../styles/GlobalStyles';
import Projects from '../Projects';
import About from '../About';
import Contact from '../Contact';

export default function Home() {
  return (
    <Container>
      <CenterHome>
        <div className="box2">
          <img src="./photos.png" alt="photos" />
        </div>
        <div className="box1">
          <div className="titles">
            <span>Tudo</span>
            <span>Se</span>
            <span>Conecta</span>
          </div>
          <span className="desc">Basta apenas um clique...</span>

          <div className="btn">
            <a href="#about"> I`M Lailton</a>{' '}
          </div>
        </div>
      </CenterHome>

      <Skill>
        <h4>Skills</h4>
        <DiJavascript1 className="allIcons" size={200} />
        <SiHtml5 className="allIcons" size={200} />
        <FaCss3Alt className="allIcons" size={200} />
        <FaReact className="allIcons" size={200} />
        <SiStyledcomponents className="allIcons" size={200} />
        <SiRedux className="allIcons" size={200} />
        <FaNodeJs className="allIcons" size={200} />
        <SiMysql className="allIcons" size={200} />
        <SiDocker className="allIcons" size={200} />
      </Skill>

      <Projects />

      <About />

      <Contact />
    </Container>
  );
}
