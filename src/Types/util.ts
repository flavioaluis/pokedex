import { Api } from 'services/api';
import { IUser } from './authTypes';


// Storage API

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem('u', JSON.stringify(user));
}

export function getUserLocalStorage () {
  const json = localStorage.getItem('u');

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  return user ?? null;
}

export async function LoginRequest (email:string, password:string) {
  try {
    const request = await Api.post('login', {email,password});

    return request.data;
  } catch (error) {
    return null;
  }
}

// Função para deixar a primeira letra maiúscula
export default function Capitalize(str:string) {
  return (str.charAt(0).toUpperCase() + str.slice(1));
}

