import axios from 'axios';
//c14ac1132c5b4fabac7ee0bb1818ea79
const KEY = 'c14ac1132c5b4fabac7ee0bb1818ea79';

export default axios.create({
  baseURL: `https://newsapi.org/v2/top-headlines?country=tw&apiKey=${KEY}`,
});
