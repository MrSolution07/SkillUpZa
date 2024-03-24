function Preloader() {
  return (
    <div className="preloader">
      <div className="loaderInner">
        <div id="top" className="mask">
          <div className="plane"></div>
        </div>
        <div id="middle" className="mask">
          <div className="plane"></div>
        </div>
        <div id="bottom" className="mask">
          <div className="plane"></div>
        </div>
        <p>LOADING...</p>
      </div>
    </div>
  );
}

export default Preloader;
