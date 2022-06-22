import API from './webapi.services';
import { BASE_URL } from './urls';

export const register = async (param) => {
  try {
    return await API.post(`${BASE_URL}/register`, param).then(
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

export const login = async (param) => {
  try {
    return await API.post(`${BASE_URL}/login`, param).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log('Login: ',error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const logout = async () => {
  try {
    return await API.post().then(
      (response) => {
        console.log('Response: ',response.data);
        return response.data;
      },
      (error) => {
        console.log('Login: ',error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};
