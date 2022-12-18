import axios from "axios";
import { QueryClient, useMutation, useQuery } from "react-query"
import { useNavigate } from "react-router-dom";





export const NewsFetch = (query) => {

  return useQuery(['news', query, 1], () => {
    return axios.get('https://free-news.p.rapidapi.com/v1/search', {
      params: {
        q: query
      },
      headers: {
        'X-RapidAPI-Key': 'a5f227e63fmsh1662507e838257fp171f14jsna0bec840d641',
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
      }
    });
  }, {
    refetchOnWindowFocus: false, retry: false
  });
}

export const BlogFetch = () => {
  return useQuery('blog', () => {
    return axios.get('https://639aa5e831877e43d672017c.mockapi.io/blogs', {
    });

  }, { refetchOnWindowFocus: false });
}



export const BlogCrud = () => {
  const nav = useNavigate();
  return useMutation((blog) => {
    return axios.post('https://639aa5e831877e43d672017c.mockapi.io/blogs', blog);
  }, {
    onSuccess: (data) => {
      nav('/');
    }
  });
}

export const BlogEdit = () => {
  const nav = useNavigate();

  return useMutation((blog) => {
    return axios.patch(`https://639aa5e831877e43d672017c.mockapi.io/blogs/${blog.id}`, blog);
  }, {
    onSuccess: (data) => {
      nav('/');
    }
  });
}


export const BlogRemove = () => {
  const nav = useNavigate();
  const query = new QueryClient();
  return useMutation((id) => {
    return axios.delete(`https://639aa5e831877e43d672017c.mockapi.io/blogs/${id}`);
  }, {
    onSuccess: (data) => {
      query.invalidateQueries('blog');

      // console.log('hello');
      // nav('/');
    },

  },);
}
