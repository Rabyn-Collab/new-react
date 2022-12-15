import axios from "axios";
import { useMutation, useQuery } from "react-query"


// const minum = {
//   data: [],
//   error: '',
//   isLoading: ''
// };

// const { data, error } = minum;



export const NewsFetch = (query) => {
  return useQuery(['news', query], () => {
    return axios.get('https://free-news.p.rapidapi.com/v1/search', {
      params: {
        q: query
      },
      headers: {
        'X-RapidAPI-Key': 'a5f227e63fmsh1662507e838257fp171f14jsna0bec840d641',
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
      }
    });
  }, { refetchOnWindowFocus: false, retry: false });
}

export const BlogFetch = () => {
  return useQuery('blog', () => {
    return axios.get('https://639aa5e831877e43d672017c.mockapi.io/blogs', {
    });

  }, { refetchOnWindowFocus: false });
}



export const BlogCrud = () => {
  return useMutation((blog) => {
    return axios.post('https://639aa5e831877e43d672017c.mockapi.io/blogs', blog);

  }, { refetchOnWindowFocus: false });
}

