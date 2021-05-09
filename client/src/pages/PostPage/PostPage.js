import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import axios from '../../axios.config'
import {LinkBox} from "../../components";
import {Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    width: `${theme.feedWidth}px`,
    minHeight: '100vh',
    margin: '0 auto',
  },
  loader: {
    position: 'absolute',
    left: '50%',
    top: '40vh',
    width: '100px',
    height: '100px',

    transform: 'translateX(-50%)',
  },
}));


const PostPage = () => {
  const classes = useStyles();
  const [post, setPost] = useState(null)
  const { id } = useParams();
  const [isLogged, setLogged] = useState(localStorage.getItem('isLogged'))
  const [ comments, setComments] = useState(null)

  const fetchPost = () => {
    axios.get(`v1/wishub/posts/${id}`)
      .then(res => {
        if(res.status === 200){
          setPost(res.data)
        }
      })
      .catch((error) => {
        if( error.response ){
          console.log(error.response.data);
          }
      });
  }
  const fetchComments = () => {
    // TODO in future, waiting for backend
    // axios.get(`v1/wishub/comments/${id}`)
    //   .then(res => {
    //     if(res.status === 200){
    //       setComments(res.data)
    //     }
    //   })
    //   .catch((error) => {
    //     if( error.response ){
    //       console.log(error.response.data);
    //       }
    //   });
  }

  const addComment = (data) => {
    console.log(data)
    // TODO in future, waiting for backend
    // axios.post(`v1/wishub/comments/`, data)
    //   .then(res => {
    //     if(res.status === 200){
    //       setPost(res.data)
    //     }
    //   })
    //   .catch((error) => {
    //     if( error.response ){
    //       console.log(error.response.data);
    //       }
    //   });
  }

  useEffect(() => {
    fetchPost()
    fetchComments()
  }, [])
  return (
    <Grid
      container
      justify="flex-start"
      direction="column"
      className={classes.main}
    > {console.log(isLogged)}
      {post

        ? <LinkBox key={post.id} post={post} /> : null
        }
    {/* TODO tutaj prosty formularz(pole i button) do dodawania postów pokazany jak jestes zalogowana */}
    {/* TODO jesli uzytkownik nie jest zalogowany to jakis placeholder typu "zaloguj sie" */}
    {/* TODO wszystkie komentarze w najprostszej formie */}
    </Grid>
  );
}

export default PostPage