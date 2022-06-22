import API from './webapi.services';
import { BASE_URL } from './urls';

export const getIdiomas = async () => {
  try {
    return await API.get(`${BASE_URL}/660/idiomas`).then(
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

export const insertIdioma = async (param) => {
  try {
    return await API.post(`${BASE_URL}/660/idiomas`, param).then(
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
export const updateIdioma = async (param) => {
  try {
    return await API.put(`${BASE_URL}/660/idiomas/${param.id}`, param).then(
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
export const deleteIdioma = async (id) => {
  try {
    return await API.delete(`${BASE_URL}/660/idiomas/${id}`).then(
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
