import axios from 'axios'; 

//backend data url
const url = 'http://localhost:3000/profile';

export const getProfiles = () => axios.get(url);
export const createProfile = (newProfile) => axios.post(url, newProfile)