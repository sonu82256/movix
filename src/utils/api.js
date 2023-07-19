import axios from "axios"

// https://api.themoviedb.org/3/movie/popular
// https://api.themoviedb.org/3/movie/popular
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGE0NTRjNThkNjg0YmM2MDIzOTI2Mzk2ZWYzNTEwMSIsInN1YiI6IjY0YTE3M2Y5YzM5MGM1MDEyZDE2Y2M5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lrV5tlArfmDBc5JlZpeHYr6DyuffJRtmnZaeNhzohMY";

const headers = {
    Authorization: "bearer " + 
    TMDB_TOKEN,
};

export const fetchDataFromApi = async(url, params) => {
    try{
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
        }catch (err){
            console.log(err);
            return err;
    }
}