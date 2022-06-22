import API from './webapi.services';
import { BASE_URL } from './urls';

export const getLinguagens = async () => {
  try {
    return await API.get(`${BASE_URL}/660/Linguagens`).then(
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

export const insertLinguagem = async (param) => {
  try {
    return await API.post(`${BASE_URL}/660/Linguagens`, param).then(
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
export const updateLinguagem = async (param) => {
  try {
    return await API.put(`${BASE_URL}/660/Linguagens/${param.id}`, param).then(
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
export const deleteLinguagem = async (id) => {
  try {
    return await API.delete(`${BASE_URL}/660/Linguagens/${id}`).then(
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
