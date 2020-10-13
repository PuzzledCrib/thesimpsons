import axios from 'axios'; 

const instance = axios.create({
	baseURL: 'https://thesimpsonsquoteapi.glitch.me/',
	headers: { 'Content-Type': 'applicaton/json' },
});

export default instance;
