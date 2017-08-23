import axios from "axios";

const API_KEY = "adabf3cfbe7bb164b1f845f7cbf3fbe1";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = "fetchWeather";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}