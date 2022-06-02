
import { useFetch } from "../useFetch";
import { BlogList } from "./BlogList";

export const Home = ({ URL }) => {    
  const { data: blogs, isPending, error } = useFetch(URL); 

  return (
    <div className="home">
      { error &&
        <div>{error}</div> }
      { isPending && 
        <div>Loading...</div>}
      { blogs && 
        <BlogList
          blogs={blogs}
          title="All Blogs!" />}
    </div>
  );
};