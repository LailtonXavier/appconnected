import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MyProjects } from './styled';

export default function Projects() {
  const fullScrean = (e) => {
    const el = e.target;
    console.log(el);
  };
  return (
    <MyProjects>
      <h4 id="projects">Meus Projetos</h4>
      <div className="projects">
        {/* class */}
        <div className="v1">
          <div className="desc">
            <p className="title">CRUD + autenticação JWT, connsumindo API</p>{' '}
            <br />
            <p>
              React + Redux + Axios
              <br /> NodeJs + mariaDB
              <br />
            </p>
            <br />
            <span>
              Esse eu diria que foi o prijeto mais completo e complexo, por
              possui o CRUD (create, Read, Update, and Delete) e autenticação
              JWT consumindo a API, muito interessante fazer todo esses sistema
              usando Redux.
              <br />
            </span>
            <br />
            <a
              className="as"
              target="_blank"
              href="https://github.com/LailtonXavier/classreact"
              rel="noreferrer"
            >
              App <FaGithub />
            </a>
            <a
              className="as"
              target="_blank"
              href="https://github.com/LailtonXavier/api_couser-nodejs-mysql"
              rel="noreferrer"
            >
              Api <FaGithub />
            </a>
          </div>
          <video
            width="680"
            height="580"
            autoPlay
            disablePictureInPicture
            muted
            loop
            onClick={fullScrean}
          >
            <source src="./movclass.mov" type="video/mp4" />
          </video>
        </div>

        {/* organize */}
        <div className="v1">
          <div className="desc">
            <p className="title">Landing Page + Envio de email (nodemailer)</p>{' '}
            <br />
            <p>
              React + Redux + Axios
              <br /> NodeJs + nodemailer
              <br />
            </p>
            <br />
            <span>
              Projeto bem completo, com sistema de enviar email funcional, os
              dados estão sendo salvos em um banco pessoal (mariaDB),
              <br />
            </span>
            <br />
            <a
              className="as"
              target="_blank"
              href="https://github.com/LailtonXavier/organize"
              rel="noreferrer"
            >
              App <FaGithub />
            </a>
            <a
              className="as"
              target="_blank"
              href="https://github.com/LailtonXavier/apiorganize"
              rel="noreferrer"
            >
              Api <FaGithub />
            </a>
          </div>
          <video
            width="680"
            height="580"
            autoPlay
            disablePictureInPicture
            muted
            loop
            onClick={fullScrean}
          >
            <source src="./movorganize.mov" type="video/mp4" />
          </video>
        </div>

        {/* omdb */}
        <div className="v1">
          <div className="desc">
            <p className="title">
              Consumindo{' '}
              <a
                target="_blank"
                href="http://www.omdbapi.com/"
                rel="noreferrer"
              >
                OMDb API
              </a>{' '}
              e salvando em BD (mariaDB)
            </p>{' '}
            <br />
            <p>
              React + Redux + Axios <br /> NodeJs + nodemailer
              <br />
            </p>
            <br />
            <span>
              Projeto bem completo, com sistema de enviar email funcional, os
              dados estão sendo salvos em um banco pessoal (mariaDB),
              <br />
            </span>
            <br />
            <a
              className="as"
              target="_blank"
              href="https://github.com/LailtonXavier/app_filmes"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 120 }}
            >
              App <FaGithub />
            </a>
            <a
              className="as"
              target="_blank"
              href="https://github.com/LailtonXavier/api_filmes"
              rel="noreferrer"
            >
              Api <FaGithub />
            </a>
          </div>
          <video
            width="680"
            height="580"
            autoPlay
            disablePictureInPicture
            muted
            loop
          >
            <source src="./movfiles.mov" type="video/mp4" />
          </video>
        </div>

        {/* api github  */}
        <div className="v1">
          <div className="desc">
            <p className="title">Consumindo API do GitHub</p> <br />
            <p>
              React + Redux + Axios
              <br />
              <br />
            </p>
            <br />
            <span>
              Muito interessante de fazer, nesse projeto usei alguns endpoinst
              que a API do GitHub disponibiliza, como: repos e stared. <br />
              Para finalizar Usei o Redux para salvar o estado da aplicação, ou
              seja, estou salvando o nome digitador pelo usuario.
              <br />
            </span>
            <br />
            <a
              className="as"
              target="_blank"
              href="https://github.com/LailtonXavier/avaliacaocompasso"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 120 }}
            >
              App <FaGithub />
            </a>
          </div>
          <video
            width="680"
            height="580"
            autoPlay
            disablePictureInPicture
            muted
            loop
          >
            <source src="./movapigit.mov" type="video/mp4" />
          </video>
        </div>
      </div>
    </MyProjects>
  );
}
