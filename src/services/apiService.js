import axios from "axios";

let api_url="https://backend.wagedifferentials.org/api/v1/"
export const img_url="https://backend.wagedifferentials.org/blogImage/"
// export const img_url="http://localhost:5000/blogImage/"

// let api_url="http://localhost:5000/api/v1/"

export const AllBlogs=()=>{
    return axios.get(api_url+'blogs/')
}

export const AllCountries=()=>{
    return axios.get(api_url+'country/')
}

export const getBlogDetails=(slug)=>{
    return axios.get(api_url+'blogs/'+slug)
}