import axios from "axios"

const moviesInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
     method: "GET",
    headers: { Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTBkN2MyY2M2ZjI4NzE3ZjNlNzUwZGIwZmUxODM5NiIsIm5iZiI6MTcyOTYyODM0Ni45NTAxNzUsInN1YiI6IjY3MTgwNTg2NzY5MTA3ZDc3YjQ3NDVkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8Y3tIuZat93iFf6_VbdIsgE64sm9KB6aIR3pn4PwRkU"}` },
    params: {
        include_adult: false,
        language: "en-US",
    }
});

export const getMovies = async (params ) => {
    const { data } = await moviesInstance.get("/trending/movie/day", { params });
    return data.results;
}

export const detailsMovies = async (id) => {
    const { data } = await moviesInstance.get(`/movie/${id}`);
    return data;
}

export const moviesCast = async (id) => {
    const { data } = await moviesInstance.get(`/movie/${id}/credits`);
    return data.results;
}

export const moviesReviews = async (id) => {
    const { data } = await moviesInstance.get(`/movie/${id}/reviews`);
    return data;
}

export const searchMovies = async (query) => {
    const { data } = await moviesInstance.get(`/search/movie`, { params: {query} });
    return data.results;
}