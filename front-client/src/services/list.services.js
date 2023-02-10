import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`/`);
    return res.data || [];
  },
  add: async (title,description,category,price,datetime) => {
    let res = await axios.post(`/record`, { title,description,category,price,datetime })
    return res.data || {};
  },
}