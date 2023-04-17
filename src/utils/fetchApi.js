import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '06cd6205f6msh402875ef53385c2p1fb0edjsnb679ba4cc9ea'
    },
  });
    
  return data;
}