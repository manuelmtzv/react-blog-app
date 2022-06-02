
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Create = ({ URL }) => {
  const [title, setTitle] = useState(""); 
  const [body, setBody] = useState(""); 
  const [author, setAuthor] = useState("no-selection"); 
  const [isPending, setIsPending] = useState(false);
  const history = useHistory(); 

  const resetForm = () => {
    setTitle(""); 
    setBody("");
    setAuthor("no-selection"); 
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const blog = { title, body, author }; 

    setIsPending(true); 
    
    fetch(URL, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("New blog added"); 
      setIsPending(false); 
      resetForm();
      history.push("/"); 
    })    
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select 
          value={author}
          onChange={(e) => setAuthor(e.target.value)} >
          <option defaultChecked value="no-selection">Select an option</option>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
          <option value="manuel">Manuel</option>
        </select>
        { !isPending && 
          <button type="submit">Add blog</button>}
        { isPending && 
          <button disabled type="submit">Adding blog...</button>}
      </form>
    </div>
  );
}