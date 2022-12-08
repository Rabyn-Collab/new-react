import axios from "axios";
import { useQuery } from "react-query"


// const minum = {
//   data: [],
//   error: '',
//   isLoading: ''
// };

// const { data, error } = minum;

export const NewsFetch = () => {
  return useQuery('news', () => {
    return axios.get('https://free-news.p.rapidapi.com/v1/search', {
      headers: {
        'X-RapidAPI-Key': 'a5f227e63fmsh1662507e838257fp171f14jsna0bec840d641',
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
      },
      params: {
        'q': 'worldcup'
      }
    });

  }, { refetchOnWindowFocus: false });
}

