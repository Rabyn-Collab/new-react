import axios from "axios";
import { useQuery } from "react-query"


// const minum = {
//   data: [],
//   error: '',
//   isLoading: ''
// };

// const { data, error } = minum;

const getData = () => {
  return axios.get('https://free-news.p.rapidapi.com/v1/search', {
    params: {
      q: 'games'
    },
    headers: {
      'X-RapidAPI-Key': 'a5f227e63fmsh1662507e838257fp171f14jsna0bec840d641',
      'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
    }
  });
}

export const NewsFetch = () => {
  return useQuery('news', getData, { refetchOnWindowFocus: false });
}

export const BlogFetch = () => {
  return useQuery('blog', () => {
    return axios.get('https://638ebcce4ddca317d7e50201.mockapi.io/blogs', {
    });

  }, { refetchOnWindowFocus: false });
}

