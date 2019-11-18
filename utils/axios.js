import axios from "axios";
import data from '../services/data.json';

export default axios.create({
  baseURL: data.constants.site_url,
  responseType: "json"
});