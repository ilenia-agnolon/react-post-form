import { useEffect, useState } from "react";

const PostForm = () => {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  //funzione che aggiorna lo stato del form
  function handleChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    //se il campo è una checkbox → prendi e.target.checked, che restituisce un booleano (true se spuntata, false se no)
    // se invece è un campo di testo → prendi e.target.value, che restituisce una stringa (il testo digitato)

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  }
  //funzione di invio del form
  function handleSubmit(e) {
    e.preventDefault();

    console.log("nuovo post:", formData);
    window.axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then((response) => console.log("POST ok", response.data))
      .catch((error) => {
        console.error("Data:", error.response?.data);
      });
  }

  return (
    <>
      <div className="container">
        <h1>Post Form</h1>
        {/* FORM */}
        <form onSubmit={handleSubmit}>
          {/* autore del post */}
          <div className="mb-3">
            <label htmlFor="author" className="form-label"></label>
            <input
              id="author"
              name="author"
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              value={formData.author}
              onChange={handleChange}
              placeholder="Autore del post"
            />
          </div>
          {/* titolo del post */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label"></label>
            <input
              id="title"
              name="title"
              type="text"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
              placeholder="Titolo del post"
            />
          </div>
          {/* testo del post */}
          <div className="mb-3">
            <label htmlFor="body" className="form-label"></label>
            <textarea
              id="body"
              name="body"
              className="form-control"
              rows="6"
              value={formData.body}
              onChange={handleChange}
              placeholder="Testo del post"
            ></textarea>
          </div>
          {/* checkbox pubblico */}
          <div className="mb-3 form-check">
            <input
              id="public"
              name="public"
              type="checkbox"
              className="form-check-input"
              checked={formData.public}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="public">
              Post pubblico
            </label>
          </div>
          {/* bottone invia */}
          <button type="submit" className="btn btn-dark">
            Invia
          </button>
        </form>
      </div>
    </>
  );
};

export default PostForm;
