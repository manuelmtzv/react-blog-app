import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useFetch } from "../useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const BlogDetails = ({ URL }) => {
  const { id } = useParams();
  const {data: blog, error, isPending} = useFetch(URL + id);
  const history = useHistory();

  const handleClick = (id) => {
    fetch(URL + id, {
      method: "DELETE"
    }).then(res => res.json())
      .then(() => history.push("/"))
      .catch(err => console.log(err))
  }

  return (
    <div className="blog-details">
      { isPending &&
        <div>Loading...</div> }
      { error && 
        <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by {blog.author}</p>
          <div>{ blog.body }</div>
          <button onClick={() => handleClick(blog.id)}>Delete article</button>
        </article>
      ) }
    </div>
  );
}