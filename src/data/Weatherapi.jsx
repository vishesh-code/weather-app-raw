import axios from 'axios';


const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'd7973d8b6a109fb682c17129a0079657';

export const getWeatherData = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
        return data;
    }catch(error) {
        throw error;
    }
};
export const getWeatherDataloc = async (lat,lon) => {
    {/*https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}*/}
    try{
        const {data} = await axios.get(baseUrl + `lat=${lat}&lon=${lon}&appid=${apiKey}`);
        return data;
    }catch(error) {
        throw error;
    }
};

