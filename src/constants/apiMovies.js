import Axios from "axios";
import { base_uri, api_key } from "@constants/BASE_URL";

export const now_playing    = payload => Axios.get(base_uri + `movie/now_playing?api_key=` + api_key +`&language=en-US&page=1`)
export const popular        = payload => Axios.get(base_uri + `movie/popular?api_key=` + api_key +`&language=en-US&page=1`)
export const top_rated      = payload => Axios.get(base_uri + `movie/top_rated?api_key=` + api_key +`&language=en-US&page=1`)
export const upcoming       = payload => Axios.get(base_uri + `movie/upcoming?api_key=` + api_key +`&language=en-US&page=1`)
export const detail         = payload => Axios.get(base_uri + `movie/` + payload + `?api_key=` + api_key +`&language=en-US&page=1`)