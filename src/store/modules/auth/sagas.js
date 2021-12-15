import { all, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as types from '../types';
import axios from '../../../services/axios';

function* contactRequest({ payload }) {
  const { name, lastname, email, message } = payload;

  try {
    yield call(axios.post, '/contact', {
      name,
      lastname,
      email,
      message,
    });
    toast.success(
      'Uma mensagem foi enviado com Sucesso, obrigado por entrar em contato'
    );
  } catch (e) {
    const status = get(e, 'response.state', 0);
    const errors = get(e, 'response.data.errors', []);

    if (status === 400) {
      toast.error('Bad Request');
    }

    if (errors.length > 0) {
      errors.map((err) => toast.error(err));
    } else {
      toast.error(
        'Ocorreu um erro amigo, tento entrar em contato usando outras opções, vou verificar este erro IMEDIATAMENTE!!!'
      );
    }
  }
}

export default all([takeLatest(types.CONTACT_REQUEEST, contactRequest)]);
