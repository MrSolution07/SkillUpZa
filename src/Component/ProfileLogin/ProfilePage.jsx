 

          
const ProfilePage = () => {
    return (
        <div>
          <div className="topbar">
            {/* LOGO */}
            <div className="topbar-left">
              <a href="../dashboard/crm-index.html" className="logo">
                <span>
                  <img src="" alt="logo-small" className="logo-sm" />
                </span>
                <span>
                  <img src="" alt="logo-large" className="logo-lg logo-light" />
                  <img src="" alt="logo-large" className="logo-lg" />
                </span>
              </a>
            </div>
            {/*end logo*/}
            {/* Navbar */}
            <nav className="navbar-custom">    
              <ul className="list-unstyled topbar-nav float-right mb-0"> 
                <li className="hidden-sm">
                  <a className="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="javascript: void(0);" role="button" aria-haspopup="false" aria-expanded="false">
                    English <img src="" className="ml-2" height={16} alt="" /> <i className="mdi mdi-chevron-down" /> 
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="javascript: void(0);"><span> German </span><img src="../assets/images/flags/germany_flag.jpg" alt="" className="ml-2 float-right" height={14} /></a>
                    <a className="dropdown-item" href="javascript: void(0);"><span> Italian </span><img src="../assets/images/flags/italy_flag.jpg" alt="" className="ml-2 float-right" height={14} /></a>
                    <a className="dropdown-item" href="javascript: void(0);"><span> French </span><img src="../assets/images/flags/french_flag.jpg" alt="" className="ml-2 float-right" height={14} /></a>
                    <a className="dropdown-item" href="javascript: void(0);"><span> Spanish </span><img src="../assets/images/flags/spain_flag.jpg" alt="" className="ml-2 float-right" height={14} /></a>
                    <a className="dropdown-item" href="javascript: void(0);"><span> Russian </span><img src="../assets/images/flags/russia_flag.jpg" alt="" className="ml-2 float-right" height={14} /></a>
                  </div>
                </li>
                <li className="dropdown notification-list">
                  <a className="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <i className="ti-bell noti-icon" />
                    <span className="badge badge-danger badge-pill noti-icon-badge">2</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-lg pt-0">
                    <h6 className="dropdown-item-text font-15 m-0 py-3 bg-primary text-white d-flex justify-content-between align-items-center">
                      Notifications <span className="badge badge-light badge-pill">2</span>
                    </h6> 
                    <div className="slimscroll notification-list">
                      {/* item*/}
                      <a href="#" className="dropdown-item py-3">
                        <small className="float-right text-muted pl-2">2 min ago</small>
                        <div className="media">
                          <div className="avatar-md bg-primary">
                            <i className="la la-cart-arrow-down text-white" />
                          </div>
                          <div className="media-body align-self-center ml-2 text-truncate">
                            <h6 className="my-0 font-weight-normal text-dark">Your order is placed</h6>
                            <small className="text-muted mb-0">Dummy text of the printing and industry.</small>
                          </div>{/*end media-body*/}
                        </div>{/*end media*/}
                      </a>{/*end-item*/}
                      {/* item*/}
                      <a href="#" className="dropdown-item py-3">
                        <small className="float-right text-muted pl-2">10 min ago</small>
                        <div className="media">
                          <div className="avatar-md bg-success">
                            <i className="la la-group text-white" />
                          </div>
                          <div className="media-body align-self-center ml-2 text-truncate">
                            <h6 className="my-0 font-weight-normal text-dark">Meeting with designers</h6>
                            <small className="text-muted mb-0">It is a long established fact that a reader.</small>
                          </div>{/*end media-body*/}
                        </div>{/*end media*/}
                      </a>{/*end-item*/}
                      {/* item*/}
                      <a href="#" className="dropdown-item py-3">
                        <small className="float-right text-muted pl-2">40 min ago</small>
                        <div className="media">
                          <div className="avatar-md bg-pink">
                            <i className="la la-list-alt text-white" />
                          </div>
                          <div className="media-body align-self-center ml-2 text-truncate">
                            <h6 className="my-0 font-weight-normal text-dark">UX 3 Task complete.</h6>
                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                          </div>{/*end media-body*/}
                        </div>{/*end media*/}
                      </a>{/*end-item*/}
                      {/* item*/}
                      <a href="#" className="dropdown-item py-3">
                        <small className="float-right text-muted pl-2">1 hr ago</small>
                        <div className="media">
                          <div className="avatar-md bg-warning">
                            <i className="la la-truck text-white" />
                          </div>
                          <div className="media-body align-self-center ml-2 text-truncate">
                            <h6 className="my-0 font-weight-normal text-dark">Your order is placed</h6>
                            <small className="text-muted mb-0">It is a long established fact that a reader.</small>
                          </div>{/*end media-body*/}
                        </div>{/*end media*/}
                      </a>{/*end-item*/}
                      {/* item*/}
                      <a href="#" className="dropdown-item py-3">
                        <small className="float-right text-muted pl-2">2 hrs ago</small>
                        <div className="media">
                          <div className="avatar-md bg-info">
                            <i className="la la-check-circle text-white" />
                          </div>
                          <div className="media-body align-self-center ml-2 text-truncate">
                            <h6 className="my-0 font-weight-normal text-dark">Payment Successfull</h6>
                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                          </div>{/*end media-body*/}
                        </div>{/*end media*/}
                      </a>{/*end-item*/}
                    </div>
                    {/* All*/}
                    <a href="javascript:void(0);" className="dropdown-item text-center text-primary">
                      View all <i className="fi-arrow-right" />
                    </a>
                  </div>
                </li>
                <li className="dropdown">
                  <a className="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <img src="../assets/images/users/user-1.png" alt="profile-user" className="rounded-circle" /> 
                    <span className="ml-1 nav-user-name hidden-sm">Amelia <i className="mdi mdi-chevron-down" /> </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#"><i className="ti-user text-muted mr-2" /> Profile</a>
                    <a className="dropdown-item" href="#"><i className="ti-wallet text-muted mr-2" /> My Wallet</a>
                    <a className="dropdown-item" href="#"><i className="ti-settings text-muted mr-2" /> Settings</a>
                    <a className="dropdown-item" href="#"><i className="ti-lock text-muted mr-2" /> Lock screen</a>
                    <div className="dropdown-divider mb-0" />
                    <a className="dropdown-item" href="#"><i className="ti-power-off text-muted mr-2" /> Logout</a>
                  </div>
                </li>
              </ul>{/*end topbar-nav*/}
              <ul className="list-unstyled topbar-nav mb-0">                        
                <li>
                  <button className="nav-link button-menu-mobile waves-effect waves-light">
                    <i className="ti-menu nav-icon" />
                  </button>
                </li>
                <li className="hide-phone app-search">
                  <form role="search" className>
                    <input type="text" id="AllCompo" placeholder="Search..." className="form-control" />
                    <a href><i className="fas fa-search" /></a>
                  </form>
                </li>
              </ul>
            </nav>
            {/* end navbar*/}
          </div>
          {/* Top Bar End */}
          {/* Left Sidenav */}
          <div className="left-sidenav">
            <ul className="metismenu left-sidenav-menu">
              <li>
                <a href="javascript: void(0);"><i className="ti-bar-chart" /><span>Dashboard</span><span className="menu-arrow"><i className="mdi mdi-chevron-right" /></span></a>
                <ul className="nav-second-level" aria-expanded="false">
                  <li className="nav-item"><a className="nav-link" href="../dashboard/analytics-index.html"><i className="ti-control-record" />Analytics</a></li>
                  <li className="nav-item"><a className="nav-link" href="../dashboard/crm-index.html"><i className="ti-control-record" />CRM</a></li>
                  <li className="nav-item"><a className="nav-link" href="../dashboard/helpdesk-index.html"><i className="ti-control-record" />Helpdesk</a></li>
                  <li className="nav-item"><a className="nav-link" href="../dashboard/sales-index.html"><i className="ti-control-record" />Sales</a></li> 
                </ul>
              </li>
              <li>
                <a href="javascript: void(0);"><i className="ti-server" /><span>Apps</span><span className="menu-arrow"><i className="mdi mdi-chevron-right" /></span></a>
                <ul className="nav-second-level" aria-expanded="false">
                  <li>
                    <a href="javascript: void(0);"><i className="ti-control-record" />Email <span className="menu-arrow left-has-menu"><i className="mdi mdi-chevron-right" /></span></a>
                    <ul className="nav-second-level" aria-expanded="false">
                      <li><a href="../apps/email-inbox.html">Inbox</a></li>
                      <li><a href="../apps/email-read.html">Read Email</a></li>
                    </ul>
                  </li>  
                  <li className="nav-item"><a className="nav-link" href="../apps/chat.html"><i className="ti-control-record" />Chat</a></li>
                  <li className="nav-item"><a className="nav-link" href="../apps/contact-list.html"><i className="ti-control-record" />Contact List</a></li>
                  <li className="nav-item"><a className="nav-link" href="../apps/calendar.html"><i className="ti-control-record" />Calendar</a></li>
                  <li className="nav-item"><a className="nav-link" href="../apps/invoice.html"><i className="ti-control-record" />Invoice</a></li>
                  <li className="nav-item"><a className="nav-link" href="../apps/tasks.html"><i className="ti-control-record" />Tasks</a></li>
                  <li>
                    <a href="javascript: void(0);"><i className="ti-control-record" />Projects <span className="menu-arrow left-has-menu"><i className="mdi mdi-chevron-right" /></span></a>
                    <ul className="nav-second-level" aria-expanded="false">
                      <li><a href="../apps/project-overview.html">Overview</a></li>                                    
                      <li><a href="../apps/project-projects.html">Projects</a></li>
                      <li><a href="../apps/project-board.html">Board</a></li>
                      <li><a href="../apps/project-teams.html">Teams</a></li>
                      <li><a href="../apps/project-files.html">Files</a></li>
                      <li><a href="../apps/new-project.html">New Project</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript: void(0);"><i className="ti-control-record" />Ecommerce <span className="menu-arrow left-has-menu"><i className="mdi mdi-chevron-right" /></span></a>
                    <ul className="nav-second-level" aria-expanded="false">
                      <li><a href="../apps/ecommerce-products.html">Products</a></li>                                    
                      <li><a href="../apps/ecommerce-product-list.html">Product List</a></li>
                      <li><a href="../apps/ecommerce-product-detail.html">Product Detail</a></li>
                      <li><a href="../apps/ecommerce-cart.html">Cart</a></li>
                      <li><a href="../apps/ecommerce-checkout.html">Checkout</a></li>                                    
                    </ul>
                  </li>
                </ul>
              </li>                   
              <li>
                <a href="javascript: void(0);"><i className="ti-crown" /><span>UI Kit</span><span className="menu-arrow"><i className="mdi mdi-chevron-right" /></span></a>
                <ul className="nav-second-level" aria-expanded="false">
                  <li>
                    <a href="javascript: void(0);"><i className="ti-control-record" />Elements <span className="menu-arrow left-has-menu"><i className="mdi mdi-chevron-right" /></span></a>
                    <ul className="nav-second-level" aria-expanded="false">
                      <li><a href="../others/ui-bootstrap.html">Bootstrap</a></li>
                      <li><a href="../others/ui-animation.html">Animation</a></li>
                      <li><a href="../others/ui-avatar.html">Avatar</a></li>
                      <li><a href="../others/ui-clipboard.html">Clip Board</a></li>
                      <li><a href="../others/ui-files.html">File Manager</a></li>
                      <li><a href="../others/ui-check-radio.html"><span>Check &amp; Radio</span></a></li>
                    </ul>
                  </li>  
                  <li>
                    <a href="javascript: void(0);"><i className="ti-control-record" />Advanced UI <span className="menu-arrow left-has-menu"><i className="mdi mdi-chevron-right" /></span></a>
                    <ul className="nav-second-level" aria-expanded="false">
                      <li><a href="../others/advanced-rangeslider.html">Range Slider</a></li>
                      <li><a href="../others/advanced-sweetalerts.html">Sweet Alerts</a></li>
                      <li><a href="../others/advanced-nestable.html">Nestable List</a></li>
                      <li><a href="../others/advanced-ratings.html">Ratings</a></li>
                      <li><a href="../others/advanced-highlight.html">Highlight</a></li>
                      <li><a href="../others/advanced-session.html">Session Timeout</a></li>
                      <li><a href="../others/advanced-idle-timer.html">Idle Timer</a></li>
                    </ul>
                  </li>  
                  <li>
                    <a href="javascript: void(0);"><i className="ti-control-record" />Forms <span className="menu-arrow left-has-menu"><i className="mdi mdi-chevron-right" /></span></a>
                    <ul className="nav-second-level" aria-expanded="false">
                      <li><a href="../others/forms-elements.html">Basic Elements</a></li>
                      <li><a href="../others/forms-advanced.html">Advance Elements</a></li>
                      <li><a href="../others/forms-validation.html">Validation</a></li>
                      <li><a href="../others/forms-wizard.html">Wizard</a></li>
                      <li><a href="../others/forms-editors.html">Editors</a></li>
                      <li><a href="../others/forms-repeater.html">Repeater</a></li>
                      <li><a href="../others/forms-x-editable.html">X Editable</a></li>
                      <li><a href="../others/forms-uploads.html">File Upload</a></li>
                    </ul>
                  </li>  
                  <li>
                    <a href="javascript: void(0);"><i className="ti-control-record" />Charts <span className="menu-arrow left-has-menu"><i className="mdi mdi-chevron-right" /></span></a>
                    <ul className="nav-second-level" aria-expanded="false">
                      <li><a href="../others/charts-apex.html">Apex</a></li>
                      <li><a href="../others/charts-morris.html">Morris</a></li>
                      <li><a href="../others/charts-flot.html">Flot</a></li>
                      <li><a href="../others/charts-chartjs.html">Chartjs</a></li>
                    </ul>
                  </li>  
                  <li>
                    <a href="javascript: void(0);"><i className="ti-control-record" />Tables <span className="menu-arrow left-has-menu"><i className="mdi mdi-chevron-right" /></span></a>
                    <ul className="nav-second-level" aria-expanded="false">
                      <li><a href="../others/tables-basic.html">Basic</a></li>
                      <li><a href="../others/tables-datatable.html">Datatables</a></li>
                      <li><a href="../others/tables-responsive.html">Responsive</a></li>
                      <li><a href="../others/tables-editable.html">Editable</a></li>
                    </ul>
                  </li>  
                  <li>
                    <a href="javascript: void(0);"><i className="ti-control-record" />Icons <span className="menu-arrow left-has-menu"><i className="mdi mdi-chevron-right" /></span></a>
                    <ul className="nav-second-level" aria-expanded="false">
                      <li><a href="../others/icons-materialdesign.html">Material Design</a></li>
                      <li><a href="../others/icons-dripicons.html">Dripicons</a></li>
                      <li><a href="../others/icons-fontawesome.html">Font awesome</a></li>
                      <li><a href="../others/icons-themify.html">Themify</a></li>
                      <li><a href="../others/icons-typicons.html">Typicons</a></li>
                    </ul>
                  </li>  
                  <li>
                    <a href="javascript: void(0);"><i className="ti-control-record" />Maps <span className="menu-arrow left-has-menu"><i className="mdi mdi-chevron-right" /></span></a>
                    <ul className="nav-second-level" aria-expanded="false">
                      <li><a href="../others/maps-google.html">Google Maps</a></li>
                      <li><a href="../others/maps-vector.html">Vector Maps</a></li>  
                    </ul>
                  </li>  
                  <li>
                    <a href="javascript: void(0);"><i className="ti-control-record" />Email Template <span className="menu-arrow left-has-menu"><i className="mdi mdi-chevron-right" /></span></a>
                    <ul className="nav-second-level" aria-expanded="false">
                      <li><a href="../others/email-templates-basic.html">Basic Action Email</a></li>
                      <li><a href="../others/email-templates-alert.html">Alert Email</a></li>
                      <li><a href="../others/email-templates-billing.html">Billing Email</a></li>
                    </ul>
                  </li>   
                </ul>                        
              </li>
              <li>
                <a href="javascript: void(0);"><i className="ti-layers-alt" /><span>Pages</span><span className="menu-arrow"><i className="mdi mdi-chevron-right" /></span></a>
                <ul className="nav-second-level" aria-expanded="false">
                  <li className="nav-item"><a className="nav-link" href="../pages/pages-profile.html"><i className="ti-control-record" />Profile</a></li>
                  <li className="nav-item"><a className="nav-link" href="../pages/pages-timeline.html"><i className="ti-control-record" />Timeline</a></li>
                  <li className="nav-item"><a className="nav-link" href="../pages/pages-treeview.html"><i className="ti-control-record" />Treeview</a></li>
                  <li className="nav-item"><a className="nav-link" href="../pages/pages-starter.html"><i className="ti-control-record" />Starter Page</a></li>
                  <li className="nav-item"><a className="nav-link" href="../pages/pages-pricing.html"><i className="ti-control-record" />Pricing</a></li>
                  <li className="nav-item"><a className="nav-link" href="../pages/pages-gallery.html"><i className="ti-control-record" />Gallery</a></li>
                </ul>
              </li>
              <li>
                <a href="javascript: void(0);"><i className="ti-lock" /><span>Authentication</span><span className="menu-arrow"><i className="mdi mdi-chevron-right" /></span></a>
                <ul className="nav-second-level" aria-expanded="false">
                  <li className="nav-item"><a className="nav-link" href="../authentication/auth-login.html"><i className="ti-control-record" />Log in</a></li>
                  <li className="nav-item"><a className="nav-link" href="../authentication/auth-register.html"><i className="ti-control-record" />Register</a></li>
                  <li className="nav-item"><a className="nav-link" href="../authentication/auth-recover-pw.html"><i className="ti-control-record" />Recover Password</a></li>
                  <li className="nav-item"><a className="nav-link" href="../authentication/auth-lock-screen.html"><i className="ti-control-record" />Lock Screen</a></li>
                  <li className="nav-item"><a className="nav-link" href="../authentication/auth-404.html"><i className="ti-control-record" />Error 404</a></li>
                  <li className="nav-item"><a className="nav-link" href="../authentication/auth-500.html"><i className="ti-control-record" />Error 500</a></li>
                </ul>
              </li>
            </ul>
          </div>
          {/* end left-sidenav*/}
          <div className="page-wrapper">
            {/* Page Content*/}
            <div className="page-content">
              <div className="container-fluid">
                {/* Page-Title */}
                <div className="row">
                  <div className="col-sm-12">
                    <div className="page-title-box">
                      <div className="float-right">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="javascript:void(0);">Crovex</a></li>
                          <li className="breadcrumb-item"><a href="javascript:void(0);">Pages</a></li>
                          <li className="breadcrumb-item active">Profile</li>
                        </ol>
                      </div>
                      <h4 className="page-title">Profile</h4>
                    </div>{/*end page-title-box*/}
                  </div>{/*end col*/}
                </div>
                {/* end page title end breadcrumb */}
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body  met-pro-bg">
                        <div className="met-profile">
                          <div className="row">
                            <div className="col-lg-4 align-self-center mb-3 mb-lg-0">
                              <div className="met-profile-main">
                                <div className="met-profile-main-pic">
                                  <img src="../assets/images/users/user-4.jpg" alt="" className="rounded-circle" />
                                  <span className="fro-profile_main-pic-change">
                                    <i className="fas fa-camera" />
                                  </span>
                                </div>
                                <div className="met-profile_user-detail">
                                  <h5 className="met-user-name">Rosa Dodson</h5>                                                        
                                  <p className="mb-0 met-user-name-post">UI/UX Designer</p>
                                </div>
                              </div>                                                
                            </div>{/*end col*/}
                            <div className="col-lg-4 ml-auto">
                              <ul className="list-unstyled personal-detail">
                                <li className><i className="dripicons-phone mr-2 text-info font-18" /> <b> phone </b> : +91 23456 78910</li>
                                <li className="mt-2"><i className="dripicons-mail text-info font-18 mt-2 mr-2" /> <b> Email </b> : mannat.theme@gmail.com</li>
                                <li className="mt-2"><i className="dripicons-location text-info font-18 mt-2 mr-2" /> <b>Location</b> : USA</li>
                              </ul>
                              <div className="button-list btn-social-icon">                                                
                                <button type="button" className="btn btn-blue btn-circle">
                                  <i className="fab fa-facebook-f" />
                                </button>
                                <button type="button" className="btn btn-secondary btn-circle ml-2">
                                  <i className="fab fa-twitter" />
                                </button>
                                <button type="button" className="btn btn-pink btn-circle  ml-2">
                                  <i className="fab fa-dribbble" />
                                </button>
                              </div>
                            </div>{/*end col*/}
                          </div>{/*end row*/}
                        </div>{/*end f_profile*/}                                                                                
                      </div>{/*end card-body*/}
                      <div className="card-body">
                        <ul className="nav nav-pills mb-0" id="pills-tab" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active" id="general_detail_tab" data-toggle="pill" href="#general_detail">General</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="activity_detail_tab" data-toggle="pill" href="#activity_detail">Activity</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="portfolio_detail_tab" data-toggle="pill" href="#portfolio_detail">Portfolio</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="settings_detail_tab" data-toggle="pill" href="#settings_detail">Settings</a>
                          </li>
                        </ul>        
                      </div>{/*end card-body*/}
                    </div>{/*end card*/}
                  </div>{/*end col*/}
                </div>{/*end row*/}
                <div className="row">
                  <div className="col-12">
                    <div className="tab-content detail-list" id="pills-tabContent">
                      <div className="tab-pane fade show active" id="general_detail">
                        <div className="row">
                          <div className="col-xl-4">  
                            <div className="card">
                              <div className="card-body">
                                <div className=" d-flex justify-content-between">
                                  <img src="../assets/images/widgets/monthly-re.png" alt="" height={75} />
                                  <div className="align-self-center">
                                    <h2 className="mt-0 mb-2 font-weight-semibold">R955<span className="badge badge-soft-success font-11 ml-2"><i className="fas fa-arrow-up" /> 8.6%</span></h2>
                                    <h4 className="title-text mb-0">Monthly Revenue</h4>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between bg-purple p-3 mt-3 rounded">
                                  <div>
                                    <h4 className="mb-1 font-weight-semibold text-white">R10255</h4>
                                    <p className="text-white mb-0">Card Balance</p>
                                  </div>
                                  <div>
                                    <h4 className=" mb-1 font-weight-semibold text-white">25.12 <small>BTC</small></h4>
                                    <p className="text-white mb-0">Crypto Balance</p>
                                  </div>
                                </div>                                    
                              </div>{/*end card-body*/}
                            </div>{/*end card*/}                        
                            <div className="card">
                              <div className="card-body dash-info-carousel">
                                <h4 className="mt-0 header-title mb-4">New Leads</h4>
                                <div id="carousel_1" className="carousel slide" data-ride="carousel">
                                  <div className="carousel-inner">
                                    <div className="carousel-item">
                                      <div className="media">
                                        <img src="../assets/images/users/user-1.jpg" className="mr-2 thumb-lg rounded-circle" alt="..." />
                                        <div className="media-body align-self-center">                                                          
                                          <h4 className="mt-0 mb-1 title-text text-dark">Important Watch</h4>
                                          <p className="text-muted mb-0">Python Devloper</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="carousel-item">
                                      <div className="media">
                                        <img src="../assets/images/users/user-2.jpg" className="mr-2 thumb-lg rounded-circle" alt="..." />
                                        <div className="media-body align-self-center">                                                           
                                          <h4 className="mt-0 mb-1 title-text">Wireless Headphone</h4>
                                          <p className="text-muted mb-0">Python Devloper</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="carousel-item active">
                                      <div className="media">
                                        <img src="../assets/images/users/user-3.jpg" className="mr-2 thumb-lg rounded-circle" alt="..." />
                                        <div className="media-body align-self-center">                                                          
                                          <h4 className="mt-0 mb-1 title-text">Leather Bag</h4>
                                          <p className="text-muted mb-0">Python Devloper</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <a className="carousel-control-prev" href="#carousel_1" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                  </a>
                                  <a className="carousel-control-next" href="#carousel_1" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                  </a>
                                </div>
                                <div className="row my-3">
                                  <div className="col-sm-6">
                                    <p className="mb-0 text-muted font-13"><i className="mdi mdi-album mr-2 text-secondary" />New Leads</p>                            
                                  </div>{/* end col*/}
                                  <div className="col-sm-6">
                                    <p className="mb-0 text-muted font-13"><i className="mdi mdi-album mr-2 text-warning" />New Leads Target</p>
                                  </div>{/* end col*/}
                                </div>{/* end row*/}
                                <div className="progress bg-warning mb-3" style={{height: '5px'}}>
                                  <div className="progress-bar bg-secondary" role="progressbar" style={{width: '65%'}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="d-flex justify-content-between">
                                  <p className="mb-0 text-muted text-truncate align-self-center"><span className="text-success"><i className="mdi mdi-trending-up" />1.5%</span> Up From Last Week</p>
                                  <button type="button" className="btn btn-gradient-primary btn-sm">Leads Report</button>
                                </div>
                                <div className="bg-light p-3 mt-3 d-flex justify-content-between">
                                  <div>
                                    <h2 className="mb-1 font-weight-semibold">402</h2>
                                    <p className="text-muted mb-0">New Leads Won</p>
                                  </div>
                                  <div className="img-group align-self-center">
                                    <a className="user-avatar user-avatar-group" href="#">
                                      <img src="../assets/images/users/user-6.jpg" alt="user" className="rounded-circle thumb-xs" />
                                    </a>
                                    <a className="user-avatar user-avatar-group" href="#">
                                      <img src="../assets/images/users/user-2.jpg" alt="user" className="rounded-circle thumb-xs" />
                                    </a>
                                    <a className="user-avatar user-avatar-group" href="#">
                                      <img src="../assets/images/users/user-3.jpg" alt="user" className="rounded-circle thumb-xs" />
                                    </a>
                                    <a className="user-avatar user-avatar-group" href="#">
                                      <img src="../assets/images/users/user-4.jpg" alt="user" className="rounded-circle thumb-xs" />
                                    </a>
                                    <a href className="avatar-box thumb-xs align-self-center">
                                      <span className="avatar-title bg-soft-info rounded-circle font-13 font-weight-normal">+25</span>
                                    </a>    
                                  </div>
                                </div>
                              </div>
                            </div>{/*end card*/}
                          </div>{/*end col*/}
                          <div className="col-lg-8">
                            <div className="card">
                              <div className="card-body">
                                <div className="float-lg-right float-none eco-revene-history justify-content-end">
                                  <ul className="nav">
                                    <li className="nav-item">
                                      <a className="nav-link active" href="#">This Week</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" href="#">Last Week</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" href="#">Last Month</a>
                                    </li>                                     
                                  </ul>
                                </div>
                                <h4 className="header-title mt-0">Revenue</h4>
                                <canvas id="bar" className="drop-shadow w-100" height={350} />
                              </div>{/*end card-body*/}
                            </div>{/*end card*/}
                            <div className="card dash-info-carousel">
                              <div className="card-body">
                                <div id="carousel_2" className="carousel slide" data-ride="carousel">
                                  <div className="carousel-inner">
                                    <div className="carousel-item">
                                      <div className="media">
                                        <img src="../assets/images/products/img-1.png" className="mr-3 thumb-xl align-self-center" alt="..." />
                                        <div className="media-body align-self-center">                                                          
                                          <h4 className="mt-0 mb-1 title-text text-dark">White Shoe</h4>
                                          <p className="text-muted mb-1">Standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                                          <p className="text-muted">When an unknown printer took a galley of type.</p>
                                          <span className="px-2 py-1 bg-soft-pink d-inline-block">Sold 582</span>
                                          <a href className="bg-soft-purple px-2 py-1"><i className="dripicons-download" /></a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="carousel-item">
                                      <div className="media">
                                        <img src="../assets/images/products/img-2.png" className="mr-3 thumb-xl align-self-center" alt="..." />
                                        <div className="media-body align-self-center">                                                           
                                          <h4 className="mt-0 mb-1 title-text">Unique Watch</h4>
                                          <p className="text-muted mb-1">Standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                                          <p className="text-muted">When an unknown printer took a galley of type.</p>
                                          <span className="px-2 py-1 bg-soft-pink d-inline-block">Sold 582</span>
                                          <a href className="bg-soft-purple px-2 py-1"><i className="dripicons-download" /></a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="carousel-item active">
                                      <div className="media">
                                        <img src="../assets/images/products/img-7.png" className="mr-3 thumb-xl align-self-center" alt="..." />
                                        <div className="media-body align-self-center">                                                          
                                          <h4 className="mt-0 mb-1 title-text">Unique Watch</h4>
                                          <p className="text-muted mb-1">Standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                                          <p className="text-muted">When an unknown printer took a galley of type.</p>
                                          <span className="px-2 py-1 bg-soft-pink d-inline-block">Sold 582</span>
                                          <a href className="bg-soft-purple px-2 py-1"><i className="dripicons-download" /></a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <a className="carousel-control-prev" href="#carousel_2" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                  </a>
                                  <a className="carousel-control-next" href="#carousel_2" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                  </a>
                                </div>
                              </div>
                            </div>                                            
                          </div>{/*end col*/}  
                        </div>{/*end row*/}   
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="card">
                              <div className="card-body">
                                <div className="dash-datepick">
                                  <input type="hidden" id="light_datepick" />
                                </div>
                                <div className="d-flex justify-content-between p-3 bg-light">
                                  <div className="media">
                                    <img src="../assets/images/users/user-2.jpg" className="mr-3 thumb-md rounded-circle" alt="..." />
                                    <div className="media-body align-self-center">                                                           
                                      <h5 className="mt-0 text-dark mb-1">Harry McCall</h5>  
                                      <p className="mb-0">Dealer USA <span className="text-muted">Today Harry's Birth Day</span></p>                                                              
                                    </div>
                                  </div>
                                  <span className="font-24 align-self-center">🎂</span>
                                </div>
                              </div>{/*end card-body*/}                                                                                                  
                            </div>{/*end card*/}
                          </div>{/*end col*/}
                          <div className="col-md-4"> 
                            <div className="card">
                              <div className="card-body">
                                <div className="p-4 bg-light text-center align-item-center">                                                                    
                                  <h1 className="font-weight-semibold">4.8</h1> 
                                  <h4 className="header-title">Overall Rating</h4>  
                                  <ul className="list-inline mb-0 product-review">
                                    <li className="list-inline-item mr-0"><i className="mdi mdi-star text-warning font-24" /></li>
                                    <li className="list-inline-item mr-0"><i className="mdi mdi-star text-warning font-24" /></li>
                                    <li className="list-inline-item mr-0"><i className="mdi mdi-star text-warning font-24" /></li>
                                    <li className="list-inline-item mr-0"><i className="mdi mdi-star text-warning font-24" /></li>
                                    <li className="list-inline-item mr-0"><i className="mdi mdi-star-half text-warning font-24" /></li>
                                    <li className="list-inline-item"><small className="text-muted">Total Review (700)</small></li>
                                  </ul>                                     
                                </div> 
                                <ul className="list-unstyled mt-3">
                                  <li className="mb-2">
                                    <span className="text-dark">5 Star</span>
                                    <small className="float-right text-muted ml-3 font-14">593</small>
                                    <div className="progress mt-2" style={{height: '5px'}}>
                                      <div className="progress-bar bg-secondary" role="progressbar" style={{width: '80%', borderRadius: '5px'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                  </li>
                                  <li className="mb-2">
                                    <span className="text-dark">4 Star</span>
                                    <small className="float-right text-muted ml-3 font-14">99</small>
                                    <div className="progress mt-2" style={{height: '5px'}}>
                                      <div className="progress-bar bg-secondary" role="progressbar" style={{width: '18%', borderRadius: '5px'}} aria-valuenow={18} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                  </li>
                                  <li className="mb-2">
                                    <span className="text-dark">3 Star</span>
                                    <small className="float-right text-muted ml-3 font-14">6</small>
                                    <div className="progress mt-2" style={{height: '5px'}}>
                                      <div className="progress-bar bg-secondary" role="progressbar" style={{width: '10%', borderRadius: '5px'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                  </li>
                                  <li className="mb-2">
                                    <span className="text-dark">2 Star</span>
                                    <small className="float-right text-muted ml-3 font-14">2</small>
                                    <div className="progress mt-2" style={{height: '5px'}}>
                                      <div className="progress-bar bg-secondary" role="progressbar" style={{width: '1%', borderRadius: '5px'}} aria-valuenow={1} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                  </li>
                                  <li>
                                    <span className="text-dark">1 Star</span>
                                    <small className="float-right text-muted ml-3 font-14">0</small>
                                    <div className="progress mt-2" style={{height: '5px'}}>
                                      <div className="progress-bar bg-secondary" role="progressbar" style={{width: '0%', borderRadius: '5px'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                  </li>
                                </ul>
                                <div className>                                                                    
                                  <h3 className="d-inline-block mr-2 mb-1 mb-lg-0">98.5%</h3> 
                                  <h4 className="header-title d-inline-block mr-2 mb-1 mb-lg-0">Satisfied Customer</h4>  
                                  <span className="text-right ml-auto d-inline-block"><i className="far fa-smile font-24 text-warning" /></span>                                                                                                      
                                </div>  
                              </div>{/*end card-body*/}
                            </div>{/*end card*/}                                                                     
                          </div>{/*end col*/}
                          <div className="col-lg-4"> 
                            <div className="card profile-card">
                              <div className="card-body p-0">
                                <div className="media p-3  align-items-center">                                                
                                  <img src="../assets/images/users/user-4.jpg" alt="user" className="rounded-circle thumb-xl" />                                        
                                  <div className="media-body ml-3 align-self-center">
                                    <h5 className="pro-title mt-0">Merri Diamond <span className="badge badge-warning font-10">New Agent</span></h5>
                                    <p className="mb-2 text-muted">@SaraHopkins.com</p> 
                                    <ul className="list-inline list-unstyled profile-socials mb-0">
                                      <li className="list-inline-item">
                                        <a href="#" className><i className="fab fa-facebook-f bg-soft-primary" /></a>
                                      </li>
                                      <li className="list-inline-item">
                                        <a href="#" className><i className="fab fa-twitter bg-soft-secondary" /></a>
                                      </li>
                                      <li className="list-inline-item">
                                        <a href="#" className><i className="fab fa-dribbble bg-soft-pink" /></a>
                                      </li>                                                                                                                
                                    </ul>                                                                                              
                                  </div>
                                  <div className="action-btn">
                                    <a href className><i className="fas fa-pen text-info mr-2" /></a>
                                    <a href className><i className="fas fa-trash-alt text-danger" /></a> 
                                  </div>                                                                              
                                </div>                                    
                              </div>{/*end card-body*/}                 
                            </div>{/*end card*/}
                            <div className="card">
                              <div className="card-body">
                                <h4 className="header-title mt-0 mb-4">Support Status</h4>                                         
                                <h2 className="font-weight-semibold">1530</h2>
                                <h5>Tickets</h5>
                                <div className="progress mb-4">                                                    
                                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>70%</div>
                                  <div className="progress-bar bg-pink" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                                  <div className="progress-bar bg-success" role="progressbar" style={{width: '5%'}} aria-valuenow={5} aria-valuemin={0} aria-valuemax={100}>5%</div>
                                </div>                
                                <ul className="list-unstyled url-list">
                                  <li>
                                    <i className="mdi mdi-circle-medium text-pink" />
                                    <span>Open Tickets</span>                                                                                                      
                                  </li>
                                  <li>
                                    <i className="mdi mdi-circle-medium text-primary" /> 
                                    <span>Resolved Tickets</span>                                              
                                  </li>
                                  <li>
                                    <i className="mdi mdi-circle-medium text-success" />
                                    <span>Unresolved Tickets</span>                                                 
                                  </li>                                                
                                </ul>                                    
                              </div>{/*end card-body*/}
                            </div>{/*end card*/} 
                          </div>{/*end col*/}
                        </div>{/*end row*/}                                          
                      </div>{/*end general detail*/}
                      <div className="tab-pane fade" id="activity_detail">                                                
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="card">
                              <div className="card-body"> 
                                <h4 className="header-title mt-0 mb-4">Latest Activity</h4>
                                <div className="slimscroll profile-activity-height">
                                  <div className="activity">
                                    <div className="activity-info">
                                      <div className="icon-info-activity">
                                        <i className="mdi mdi-checkbox-marked-circle-outline bg-soft-success" />
                                      </div>
                                      <div className="activity-info-text">
                                        <div className="d-flex justify-content-between align-items-center">
                                          <p className="text-muted mb-0 font-14 w-75"><span className="text-dark font-14">Donald</span> 
                                            updated the status of <a href className="text-dark">Refund #1234</a> to awaiting customer response
                                          </p>
                                          <span className="text-muted">10 Min ago</span>
                                        </div>    
                                      </div>
                                    </div>   
                                    <div className="activity-info">
                                      <div className="icon-info-activity">
                                        <i className="mdi mdi-timer-off bg-soft-pink" />
                                      </div>
                                      <div className="activity-info-text">
                                        <div className="d-flex justify-content-between align-items-center">
                                          <p className="text-muted mb-0 font-14 w-75"><span className="text-dark font-14">Lucy Peterson</span> 
                                            was added to the group, group name is <a href className="text-dark">Overtake</a>
                                          </p>
                                          <span className="text-muted">50 Min ago</span>
                                        </div>    
                                      </div>
                                    </div>   
                                    <div className="activity-info">
                                      <div className="icon-info-activity">
                                        <i className="mdi mdi-alert-decagram bg-soft-purple" />
                                      </div>
                                      <div className="activity-info-text">
                                        <div className="d-flex justify-content-between align-items-center">
                                          <p className="text-muted mb-0 font-14 w-75"><span className="text-dark font-14">Joseph Rust</span> 
                                            opened new showcase <a href className="text-dark">Mannat #112233</a> with theme market
                                          </p>
                                          <span className="text-muted">10 hours ago</span>
                                        </div>    
                                      </div>
                                    </div>   
                                    <div className="activity-info">
                                      <div className="icon-info-activity">
                                        <i className="mdi mdi-clipboard-alert bg-soft-warning" />
                                      </div>
                                      <div className="activity-info-text">
                                        <div className="d-flex justify-content-between align-items-center">
                                          <p className="text-muted mb-0 font-14 w-75"><span className="text-dark font-14">Donald</span> 
                                            updated the status of <a href className="text-dark">Refund #1234</a> to awaiting customer response
                                          </p>
                                          <span className="text-muted">Yesterday</span>
                                        </div>    
                                      </div>
                                    </div>   
                                    <div className="activity-info">
                                      <div className="icon-info-activity">
                                        <i className="mdi mdi-clipboard-alert bg-soft-secondary" />
                                      </div>
                                      <div className="activity-info-text">
                                        <div className="d-flex justify-content-between align-items-center">
                                          <p className="text-muted mb-0 font-14 w-75"><span className="text-dark font-14">Lucy Peterson</span> 
                                            was added to the group, group name is <a href className="text-dark">Overtake</a>
                                          </p>
                                          <span className="text-muted">14 Nov 2019</span>
                                        </div>    
                                      </div>
                                    </div> 
                                    <div className="activity-info">
                                      <div className="icon-info-activity">
                                        <i className="mdi mdi-clipboard-alert bg-soft-info" />
                                      </div>
                                      <div className="activity-info-text">
                                        <div className="d-flex justify-content-between align-items-center">
                                          <p className="text-muted mb-0 font-14 w-75"><span className="text-dark font-14">Joseph Rust</span> 
                                            opened new showcase <a href className="text-dark">Mannat #112233</a> with theme market
                                          </p>
                                          <span className="text-muted">15 Nov 2019</span>
                                        </div>    
                                      </div>
                                    </div>                                                                                                                                      
                                  </div>{/*end activity*/}
                                </div>{/*crypot dash activity*/}
                              </div>{/*end card-body*/}
                            </div>{/*end card*/}
                          </div>{/*end col*/}
                          <div className="col-lg-6">
                            <div className="card">                                       
                              <div className="card-body"> 
                                <h4 className="header-title mt-0 mb-3">Sales Category</h4>
                                <div className="row">
                                  <div className="col-4">
                                    <img src="../assets/images/widgets/sales-re.svg" alt="" className="img-fluid" />
                                  </div>
                                  <div className="col-8 align-self-center">
                                    <p className="skill-detail">Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                      It has roots in a piece of classical Latin literature from 45 BC, 
                                      making it over 2000 years old. Richard McClintock, a Latin professor 
                                      at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.
                                    </p>
                                  </div>
                                </div>
                                <div className="skills mt-4">
                                  <div className="skill-box"> 
                                    <h4 className="skill-title">Electronic</h4> 
                                    <div className="progress-line"> 
                                      <span data-percent={78} style={{width: '78%'}}>
                                        <span className="percent-tooltip">78%</span>
                                      </span> 
                                    </div>
                                  </div>
                                  <div className="skill-box"> 
                                    <h4 className="skill-title">Clothes</h4> 
                                    <div className="progress-line"> 
                                      <span data-percent={90} style={{width: '90%'}}>
                                        <span className="percent-tooltip">90%</span>
                                      </span> 
                                    </div>
                                  </div>
                                  <div className="skill-box"> 
                                    <h4 className="skill-title">Phones</h4> 
                                    <div className="progress-line"> 
                                      <span data-percent={80} style={{width: '80%'}}>
                                        <span className="percent-tooltip">80%</span>
                                      </span> 
                                    </div>
                                  </div>
                                  <div className="skill-box"> 
                                    <h4 className="skill-title">Medicine</h4> 
                                    <div className="progress-line"> 
                                      <span data-percent={95} style={{width: '95%'}}>
                                        <span className="percent-tooltip">95%</span>
                                      </span> 
                                    </div>
                                  </div>
                                </div>
                              </div>  {/*end card-body*/}                                     
                            </div>{/*end card*/}
                          </div>{/*end col*/}
                        </div>{/*end row*/}  
                      </div>{/*end education detail*/}
                      <div className="tab-pane fade" id="portfolio_detail">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="card">
                              <div className="card-body">
                                <div className="row">
                                  <ul className="col container-filter categories-filter mb-0" id="filter">
                                    <li><a className="categories active" data-filter="*">All</a></li>
                                    <li><a className="categories" data-filter=".branding">Branding</a></li>
                                    <li><a className="categories" data-filter=".design">Design</a></li>
                                    <li><a className="categories" data-filter=".photo">Photo</a></li>
                                    <li><a className="categories" data-filter=".coffee">coffee</a></li>
                                  </ul>
                                </div>{/* End portfolio  */}
                              </div>{/*end card-body*/}
                            </div>{/*end card*/}
                            <div className="card">
                              <div className="card-body">
                                <div className="row container-grid nf-col-3  projects-wrapper">
                                  <div className="col-lg-4 col-md-6 p-0 nf-item branding design coffee spacing">
                                    <div className="item-box">
                                      <a className="cbox-gallary1 mfp-image" href="../assets/images/small/img-1.jpg" title="Consequat massa quis">
                                        <img className="item-container " src="../assets/images/small/img-1.jpg" alt={7} />
                                        <div className="item-mask">
                                          <div className="item-caption">
                                            <h5 className="text-white">Consequat massa quis</h5>
                                            <p className="text-white">Branding, Design, Coffee</p>
                                          </div>
                                        </div>
                                      </a>
                                    </div>{/*end item-box*/}
                                  </div>{/*end col*/}
                                  <div className="col-lg-4 col-md-6 p-0 nf-item photo spacing">
                                    <div className="item-box">
                                      <a className="cbox-gallary1 mfp-image" href="../assets/images/small/img-2.jpg" title="Vivamus elementum semper">
                                        <img className="item-container mfp-fade" src="../assets/images/small/img-2.jpg" alt={2} />
                                        <div className="item-mask">
                                          <div className="item-caption">
                                            <h5 className="text-light">Vivamus elementum semper</h5>
                                            <p className="text-light">Photo</p>
                                          </div>
                                        </div>
                                      </a>
                                    </div>{/*end item-box*/}
                                  </div>{/*end col*/}
                                  <div className="col-lg-4 col-md-6 p-0 nf-item branding coffee spacing">
                                    <div className="item-box">
                                      <a className="cbox-gallary1 mfp-image" href="../assets/images/small/img-3.jpg" title="Quisque rutrum">
                                        <img className="item-container" src="../assets/images/small/img-3.jpg" alt={4} />
                                        <div className="item-mask">
                                          <div className="item-caption">
                                            <h5 className="text-light">Quisque rutrum</h5>
                                            <p className="text-light">Branding, Design, Coffee</p>
                                          </div>
                                        </div>
                                      </a>
                                    </div>{/*end item-box*/}
                                  </div>{/*end col*/}
                                  <div className="col-lg-4 col-md-6 p-0 nf-item branding design spacing">
                                    <div className="item-box">
                                      <a className="cbox-gallary1 mfp-image" href="../assets/images/small/img-4.jpg" title="Tellus eget condimentum">
                                        <img className="item-container" src="../assets/images/small/img-4.jpg" alt={5} />
                                        <div className="item-mask">
                                          <div className="item-caption">
                                            <h5 className="text-light">Tellus eget condimentum</h5>
                                            <p className="text-light">Design</p>
                                          </div>
                                        </div>
                                      </a>
                                    </div>{/*end item-box*/}
                                  </div>{/*end col*/}
                                  <div className="col-lg-4 col-md-6 p-0 nf-item branding design spacing">
                                    <div className="item-box">
                                      <a className="cbox-gallary1 mfp-image" href="../assets/images/small/img-5.jpg" title="Nullam quis ant">
                                        <img className="item-container" src="../assets/images/small/img-5.jpg" alt={6} />
                                        <div className="item-mask">
                                          <div className="item-caption">
                                            <h5 className="text-light">Nullam quis ant</h5>
                                            <p className="text-light">Branding, Design</p>
                                          </div>
                                        </div>
                                      </a>
                                    </div>{/*end item-box*/}
                                  </div>{/*end col*/}
                                  <div className="col-lg-4 col-md-6 p-0 nf-item photo spacing">
                                    <div className="item-box">
                                      <a className="cbox-gallary1 mfp-image" href="../assets/images/small/img-6.jpg" title="Sed fringilla mauris">
                                        <img className="item-container" src="../assets/images/small/img-6.jpg" alt={1} />
                                        <div className="item-mask">
                                          <div className="item-caption">
                                            <h5 className="text-light">Sed fringilla mauris</h5>
                                            <p className="text-light">Photo</p>
                                          </div>
                                        </div>
                                      </a>
                                    </div>{/*end item-box*/}
                                  </div>{/*end col*/}
                                </div>{/*end row*/}
                              </div>{/*end card-body*/}
                            </div>{/*end card*/}
                          </div>{/*end col*/}
                          <div className="col-lg-4">
                            <div className="card ">
                              <div className="card-body">
                                <div className="text-center">
                                  <h4><i className="fas fa-quote-left text-primary" /></h4>
                                </div>                                            
                                <div id="carouselExampleFade2" className="carousel slide" data-ride="carousel">
                                  <div className="carousel-inner">
                                    <div className="carousel-item">
                                      <div className="text-center">
                                        <p className="text-muted px-4">
                                          It is a long established fact that a reader will be distracted by 
                                          the readable content of a page when looking at its layout. 
                                          The point of using Lorem Ipsum is that it has a more-or-less 
                                          normal distribution of letters, as opposed to using.
                                        </p>
                                        <div className>
                                          <img src="../assets/images/users/user-10.jpg" alt="" className="rounded-circle thumb-lg mb-2" />
                                          <p className="mb-0 text-primary"><b>- Mary K. Myers</b></p>
                                          <small className="text-muted">CEO Facebook</small>
                                        </div>                                                            
                                      </div>
                                    </div>
                                    <div className="carousel-item active">
                                      <div className="text-center">
                                        <p className="text-muted px-4">                                                                
                                          Where does it come from?
                                          Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                          It has roots in a piece of classical Latin literature from 45 BC, 
                                          making it over 2000 years  popular belief,old.
                                        </p>
                                        <div className>
                                          <img src="../assets/images/users/user-4.jpg" alt="" className="rounded-circle  thumb-lg mb-2" />
                                          <p className="mb-0 text-primary"><b>- Michael C. Rios</b></p>
                                          <small className="text-muted">CEO Facebook</small>
                                        </div>                                                            
                                      </div>
                                    </div>
                                    <div className="carousel-item">
                                      <div className="text-center">
                                        <p className="text-muted px-4">
                                          There are many variations of passages of Lorem Ipsum available, 
                                          but the majority have suffered alteration in some form, by injected humour, 
                                          or randomised words which don't look even slightly believable. 
                                          If you are going to use a passage of Lorem Ipsum. 
                                        </p>
                                        <div className>
                                          <img src="../assets/images/users/user-5.jpg" alt="" className="rounded-circle  thumb-lg mb-2" />
                                          <p className="mb-0 text-primary"><b>- Lisa D. Pullen</b></p>
                                          <small className="text-muted">CEO Facebook</small>
                                        </div>                                                            
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>{/*end row*/}
                      </div>{/*end portfolio detail*/}
                      <div className="tab-pane fade" id="settings_detail">
                        <div className="row">
                          <div className="col-lg-12 col-xl-9 mx-auto">
                            <div className="card">
                              <div className="card-body">
                                <form method="post" className="card-box">
                                  <input type="file" id="input-file-now-custom-1" className="dropify" data-default-file="../assets/images/users/user-4.jpg" />
                                  <span className="input-icon icon-right">
                                    <textarea rows={4} className="form-control" placeholder="Post a new message" defaultValue={""} />
                                  </span>
                                  <div className="float-right my-3">
                                    <a className="btn btn-sm btn-gradient-primary px-4 mb-0">Send</a>
                                  </div>
                                  <ul className="list-inline mt-1">                                                                
                                    <li className="list-inline-item">
                                      <a href="#"><i className=" fas fa-video font-18 mr-2 mt-2 text-primary" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#"><i className="fas fa-camera  font-18 mt-2 text-primary" /></a>
                                    </li>
                                  </ul>
                                </form>
                                <div className>
                                  <form className="form-horizontal form-material mb-0">
                                    <div className="form-group">
                                      <input type="text" placeholder="Full Name" className="form-control" />
                                    </div>
                                    <div className="form-group row">
                                      <div className="col-md-4">
                                        <input type="email" placeholder="Email" className="form-control" name="example-email" id="example-email" />
                                      </div>
                                      <div className="col-md-4">
                                        <input type="password" placeholder="password" className="form-control" />
                                      </div>
                                      <div className="col-md-4">
                                        <input type="password" placeholder="Re-password" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="form-group row">
                                      <div className="col-md-6">
                                        <input type="text" placeholder="Phone No" className="form-control" />
                                      </div>
                                      <div className="col-md-6">
                                        <select className="form-control">
                                          <option>London</option>
                                          <option>India</option>
                                          <option>Usa</option>
                                          <option>Canada</option>
                                          <option>Thailand</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <textarea rows={5} placeholder="Message" className="form-control" defaultValue={""} />
                                      <button className="btn btn-gradient-primary btn-sm px-4 mt-3 float-right mb-0">Update Profile</button>
                                    </div>
                                  </form>
                                </div>
                              </div>                                            
                            </div>
                          </div> {/*end col*/}                                          
                        </div>{/*end row*/}
                      </div>{/*end settings detail*/}
                    </div>{/*end tab-content*/} 
                  </div>{/*end col*/}
                </div>{/*end row*/}
              </div>{/* container */}

            </div>
            {/* end page content */}
          </div>
          {/* end page-wrapper */}
          {/* jQuery  */}
          {/* App js */}
        </div>
  );
};
export default ProfilePage;