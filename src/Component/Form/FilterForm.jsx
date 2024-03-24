function FilterForm() {
  return (
    <form action="#" method="get" className="clearfix">
      <div className="price-filter">
        <ul>
          <li>
            <input
              type="checkbox"
              defaultChecked="checked"
              id="all"
              name="all"
              value="all"
            />
            <label htmlFor="all">All</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="premium"
              name="premium"
              value="premium"
            />
            <label htmlFor="premium">Premium Courses</label>
          </li>
          <li>
            <input type="checkbox" id="free" name="free" value="free" />
            <label htmlFor="free">Free Courses</label>
          </li>
        </ul>
        <button type="submit" onClick={(e) => e.preventDefault()}>
          Filter Results
        </button>
      </div>
    </form>
  );
}

export default FilterForm;
