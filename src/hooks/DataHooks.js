import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useNavigate } from "react-router-dom";






export const NewsFetch = (query) => {

  return useQuery(['news', query], () => {

    return axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: query,
        'apiKey': 'e526a219312a40a88b575f8738537e06'
      }
    });
  }, {

    refetchOnWindowFocus: false,

    retry: false,
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
  const query = useQueryClient();
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
