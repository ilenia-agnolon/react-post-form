import { useEffect, useState } from "react";

const PostForm = () => {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    pubblic: false,
  });

  //   axios
  function fetchBlogInfo() {
    axios
      .get("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts")
      .then((response) => {
        setFormData.apply(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    fetchBlogInfo();
  }, []);

  //funzione che aggiorna lo stato del form
  function handleChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  }

  return (
    <>
      <div className="container">
        <h1>Post Form</h1>
        <form>
          {/* autore del post */}
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              autore del post
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          {/* titolo del post */}
          <div className="mb-3">
            <label htmlFor="postTitle" className="form-label">
              titolo del post
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          {/* testo del post */}
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              testo del post
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          {/* checkbox pubblico */}
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="public" />
            <label className="form-check-label" htmlFor="exampleCheck1">
              pubblico
            </label>
          </div>
          {/* bottone invia */}
          <button type="submit" className="btn btn-primary">
            Invia
          </button>
        </form>
      </div>
    </>
  );
};

export default PostForm;
