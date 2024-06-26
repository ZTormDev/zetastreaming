import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air',
}

const tmdbApi = {
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type] + '?language=es-ES';
        return axiosClient.get(url, params);
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type] + '?language=es-ES';
        return axiosClient.get(url, params);
    },
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, {params: {}});
    },
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },
    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id + '?language=es-ES';
        return axiosClient.get(url, params);
    },
    getEpisodeDetails: (cate, id, seasonNumber, episodeNumber, params, ) => {
        const url = category[cate] + '/' + id + '/season/' + seasonNumber + '/episode/' + episodeNumber + '?language=es-ES';
        return axiosClient.get(url, params);
    },
    getSeasonDetails: (cate, id, seasonNumber, params, ) => {
        const url = category[cate] + '/' + id + '/season/' + seasonNumber + '?language=es-ES';
        return axiosClient.get(url, params);
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}});
    },
}

export default tmdbApi;