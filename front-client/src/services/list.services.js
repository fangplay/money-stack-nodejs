import axios from 'axios';


  // getAll: async () => {
  //   let res = await axios.get(`/api`);
  //   return res.data || [];
  // },
  // add: async (title,description,category,price,datetime) => {
  //   let res = await axios.post(`/api/record`, { title,description,category,price,datetime })
  //   return res.data || {};
  // },
  // get: async (datetime) => {
  //   let res = await axios.get(`/api/records?date=:datetime`,{ datetime });
  //   return res.data || [];
  // }

export default axios.create({
  baseURL: "http://localhost:8000/",
});

