const baseURL = 'https://jsonplaceholder.typicode.com/users';
import axios from "axios";

const list = [
    {
        id:1,
        name:'Nour-Eldeen',
        email:'day3@lab3.com'
    },
    {
        id:2,
        name:'Nasser',
        email:'day3@lab3.com'
    },
    
]

export const  getPosts = async ()=>{
    let posts = []
    try {
        const response = await axios.get(baseURL)
        posts = response.data;
    } catch (error) {
        console.log(error)
    }
    console.log('after resolve')
    return {
        type:'POSTS_LIST',
        payload:posts 
    }

}

export const getPostsDetails = async (id)=>{
    let posts = {}
    try {
        const response = await axios.get(`${baseURL}/${id}`)
        posts = response.data;
    } catch (error) {
        console.log(error)
    }
    console.log('after resolve')
    return {
        type:'POSTS_DETAILS',
        payload:posts 
    }
}

export const clearDetails = ()=>{
    return {
        type:'CLEAR_DETAILS'
    }
}