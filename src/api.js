import axios from "axios";

axios.defaults.baseURL = "https://644ab01979279846dcef9f61.mockapi.io/"

export const getUsers = async () =>{
try {
const {data} = await axios.get("/profile")
return data
} catch (error) {
    console.log("error")
}
}

export const updateUser = async (userId, credentials) => {
    try {
      const { data } = await axios.put(`/profile/${userId}`, credentials);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };