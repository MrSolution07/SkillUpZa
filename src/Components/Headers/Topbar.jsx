import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="topinfo">
              <p>
                <i className="icon_mail_alt"></i><a href="mailto:skillupZA@outlook.com">skillupZA@outlook.com </a>
              </p>
              <p>
                <i className="icon_phone"></i>+27 849 980 630
              </p>
            </div>
          </div>
          <div className="col-md-5 text-right">
            <Link to="#" className="SkillUplms-btn-2">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
