import React, { useState } from 'react';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SiMinutemailer, SiWhatsapp } from 'react-icons/si';
import { FaAngleDoubleUp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import * as actions from '../../store/modules/auth/actions';
import { CenterContact } from './styled';

export default function Contact() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let flagError = false;

    if (name.length < 3 || name.length > 50) {
      flagError = true;
      toast.error('Nome precisa ter entre 3 a 50');
    }

    if (lastname.length < 3 || lastname.length > 50) {
      flagError = true;
      toast.error('Sobrenome precisa ter entre 3 a 50');
    }

    if (!isEmail(email)) {
      flagError = true;
      toast.error('E-mail invalido');
    }

    if (message.length < 5 || message.length > 250) {
      flagError = true;
      toast.error('A messagem precisa ter entre 5 a 250');
    }

    if (flagError) return;

    dispatch(actions.contactRequest({ name, lastname, email, message }));
  };

  return (
    <CenterContact>
      <div className="about">
        <h4>Vamos entrar em contato</h4>
        <p>
          Estamos abertos para qualquer sugestão ou apenas para bater um papo
        </p>

        <span>
          <SiWhatsapp className="icons" size={60} />
          (81) 9 7121-0044
        </span>
        <span>
          <FaInstagram className="icons" size={60} />
          lailtonnx
        </span>
        <span>
          <SiMinutemailer className="icons" size={60} />
          <a href="mailto:lailtonxavier123@gmail.com">
            lailtonxavier123@gmail.com
          </a>
        </span>
        <span>
          <FaLinkedin className="icons" size={60} />
          <a
            href="https://www.linkedin.com/in/lailton-da-silva-xavier-4b8a68208/"
            target="_blank"
            rel="noreferrer"
          >
            Meu LinkediIn lailton-da-silva-xavier
          </a>
        </span>
      </div>

      <div className="containerForm">
        <h4 id="contact">Entre em contato</h4>
        <form onSubmit={handleSubmit}>
          <div className="inptRow">
            <label htmlFor="name">
              Nome <br />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Fulano ou Company"
              />
            </label>

            <label htmlFor="lastname">
              Sobrenome <br />
              <input
                type="text"
                id="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Xavier"
              />
            </label>
          </div>

          <label htmlFor="email">
            Email <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
            />
          </label>

          <label htmlFor="textarea">
            Mensagem <br />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Poderia falar um pouco a seu respeito?"
            />
          </label>

          <button type="submit">Enviar</button>
        </form>
      </div>
      <AnchorLink className="up" href="#home">
        {' '}
        <FaAngleDoubleUp />
      </AnchorLink>
    </CenterContact>
  );
}
