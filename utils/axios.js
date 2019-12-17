import axios from "axios";
import data from '../services/data.json';

export default axios.create({
  baseURL: data.constants.site_url,
  responseType: "json",
  // used below code for only free hosting url
//   withCredentials: true,
//   headers: {
//           Cookie:'__test=1b1cf0780f2f9f754ffe07e34d67a235;expires=Thu, 31-Dec-37 23:55:55 GMT; path=/'
//         },
});
