import axios from 'axios';

export default function Service(title,description,category,price,datetime){
  getAll: async () => {
    let res = await axios.get(`/api`);
    return res.data || [];
  },
  add: async (title,description,category,price,datetime) => {
    let res = await axios.post(`/api/record`, { title,description,category,price,datetime })
    return res.data || {};
  },
  getAll: async (datetime) => {
    let res = await axios.get(`/api/records?date=:datetime`,{ datetime });
    return res.data || [];
  }
}