import axios from "axios";

let api_url="http://backend.wagedifferentials.org/api/v1/"
export const img_url="http://backend.wagedifferentials.org/blogImage/"

export const AllBlogs=()=>{
    return axios.get(api_url+'blogs/')
}

export const AllCountries=()=>{
    return axios.get(api_url+'country/')
}