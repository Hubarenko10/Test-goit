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