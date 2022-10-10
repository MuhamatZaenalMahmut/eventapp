import Axios from "axios";
import { base_uri, api_key } from "@constants/BASE_URL";

export const airing_today   = payload => Axios.get(base_uri + `tv/airing_today?api_key=` + api_key +`&language=en-US&page=1`)
export const on_the_air     = payload => Axios.get(base_uri + `tv/on_the_air?api_key=` + api_key +`&language=en-US&page=1`)
export const popular        = payload => Axios.get(base_uri + `tv/popular?api_key=` + api_key +`&language=en-US&page=1`)
export const top_rated      = payload => Axios.get(base_uri + `tv/top_rated?api_key=` + api_key +`&language=en-US&page=1`)
export const detail         = payload => Axios.get(base_uri + `tv/` + payload + `?api_key=` + api_key +`&language=en-US&page=1`)