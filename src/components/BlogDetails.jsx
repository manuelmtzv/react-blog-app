import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useFetch } from "../useFetch";

export const BlogDetails = ({ URL }) => {
  const { id } = useParams();
  const {data: blog, error, isPending} = useFetch(URL + id);

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
          <button>Delete article</button>
        </article>
      ) }
    </div>
  );
}