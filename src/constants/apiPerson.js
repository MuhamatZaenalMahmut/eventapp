import Axios from "axios";
import { base_uri, api_key } from "@constants/BASE_URL";

export const popular    = payload => Axios.get(base_uri + `person/popular?api_key=` + api_key +`&language=en-US&page=1`)