function CommentForm() {
  return (
    <form className="row" action="#" method="post">
      <div className="col-md-6">
        <input type="text" name="name" placeholder="Name" />
      </div>
      <div className="col-md-6">
        <input type="email" name="email" placeholder="Email" />
      </div>
      <div className="col-md-12">
        <input type="url" name="url" placeholder="Website" />
      </div>
      <div className="col-md-12">
        <div className="save-comment">
          <input id="history-name" type="checkbox" />
          <label htmlFor="history-name">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
      </div>
      <div className="col-md-12">
        <textarea placeholder="Coment"></textarea>
      </div>
      <div className="col-md-12">
        <button type="submit">Post Comment</button>
      </div>
    </form>
  );
}

export default CommentForm;
