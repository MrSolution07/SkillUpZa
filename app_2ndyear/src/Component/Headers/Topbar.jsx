import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="topinfo">
              <p>
                <i className="icon_mail_alt"></i>bisy@support.com
              </p>
              <p>
                <i className="icon_phone"></i>(+642) 245 356 432
              </p>
            </div>
          </div>
          <div className="col-md-5 text-right">
            <Link to="#" className="bisylms-btn-2">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
