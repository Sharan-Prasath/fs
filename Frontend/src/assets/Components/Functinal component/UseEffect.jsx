import { useEffect, useState } from "react";
import axios from 'axios';
var UseEffect = () => {
  var [post, setPost] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => { console.log(err); });
  }, []);
  return (
    <section>
      <h1>Fetching from json placeholder API</h1>
      <h2>Posts are</h2>
      <ol>
        {post.map((data) => (<li key={data.id}>{data.title}</li>))}
      </ol>
    </section>
  );
};
export default UseEffect;