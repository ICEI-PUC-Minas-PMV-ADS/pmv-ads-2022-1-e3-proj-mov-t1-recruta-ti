import API from './webapi.services';
import { BASE_URL } from './urls';

export const getPerfil = async () => {
  try {
    return await API.get(`${BASE_URL}/660/perfis`).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log('Erro GET perfil',error);
        return null;
      }
    );
  } catch (error) {
    console.log('Erro GET perfil',error);
    return null;
  }
};


export const insertPerfil = async (param) => {
  try {
    return await API.post(`${BASE_URL}/660/perfis`, param).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updatePerfil = async (param) => {
  try {
    return await API.put(`${BASE_URL}/660/perfis/${param.id}`, param).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};
