function ReviewForm() {
  return (
    <form className="row" action="#" method="post">
      <div className="col-md-6">
        <input type="text" name="name" placeholder="Name" />
      </div>
      <div className="col-md-6">
        <input type="email" name="email" placeholder="Email" />
      </div>
      <div className="col-md-12">
        <input type="text" name="ttile" placeholder="Review Title" />
      </div>
      <div className="col-md-12">
        <div className="comment-form-rating">
          <label>Ratings:</label>
          <div className="ratings">
            <i className="icon_star"></i>
            <i className="icon_star"></i>
            <i className="icon_star"></i>
            <span>
              <i className="icon_star"></i>
              <i className="icon_star"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <textarea placeholder="Coment"></textarea>
      </div>
      <div className="col-md-12">
        <button type="submit" onClick={(e) => e.preventDefault()}>
          Submit Review
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
