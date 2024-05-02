const Header = () => {
  return (
    <>
      <header className="main-header">
        <nav className="navbar navbar-static-top pl-30">
          <div>
            <ul className="nav">
              <li className="btn-group nav-item">
                <a
                  href="#"
                  className="waves-effect waves-light nav-link rounded svg-bt-icon"
                  data-toggle="push-menu"
                  role="button"
                >
                  <i className="nav-link-icon mdi mdi-menu"></i>
                </a>
              </li>
              <li className="btn-group nav-item">
                <a
                  href="#"
                  data-provide="fullscreen"
                  className="waves-effect waves-light nav-link rounded svg-bt-icon"
                  title="Full Screen"
                >
                  <i className="nav-link-icon mdi mdi-crop-free"></i>
                </a>
              </li>
              <li className="btn-group nav-item d-none d-xl-inline-block">
                <a
                  href="#"
                  className="waves-effect waves-light nav-link rounded svg-bt-icon"
                  title=""
                >
                  <i className="ti-check-box"></i>
                </a>
              </li>
              <li className="btn-group nav-item d-none d-xl-inline-block">
                <a
                  href="calendar.html"
                  className="waves-effect waves-light nav-link rounded svg-bt-icon"
                  title=""
                >
                  <i className="ti-calendar"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-custom-menu r-side">
            <ul className="nav navbar-nav">
              <li className="search-bar">
                <div className="lookup lookup-circle lookup-right">
                  <input type="text" name="s" />
                </div>
              </li>
              <li className="dropdown notifications-menu">
                <a
                  href="#"
                  className="waves-effect waves-light rounded dropdown-toggle"
                  data-toggle="dropdown"
                  title="Notifications"
                >
                  <i className="ti-bell"></i>
                </a>
                <ul className="dropdown-menu animated bounceIn">
                  <li className="header">
                    <div className="p-20">
                      <div className="flexbox">
                        <div>
                          <h4 className="mb-0 mt-0">Notifications</h4>
                        </div>
                        <div>
                          <a href="#" className="text-danger">
                            Clear All
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <ul className="menu sm-scrol">
                      <li>
                        <a href="#">
                          <i className="fa fa-users text-info"></i> Curabitur id
                          eros quis nunc suscipit blandit.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-warning text-warning"></i> Duis
                          malesuada justo eu sapien elementum, in semper diam
                          posuere.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-users text-danger"></i> Donec at
                          nisi sit amet tortor commodo porttitor pretium a erat.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart text-success"></i>{" "}
                          In gravida mauris et nisi
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user text-danger"></i> Praesent eu
                          lacus in libero dictum fermentum.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user text-primary"></i> Nunc
                          fringilla lorem
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user text-success"></i> Nullam
                          euismod dolor ut quam interdum, at scelerisque ipsum
                          imperdiet.
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer">
                    <a href="#">View all</a>
                  </li>
                </ul>
              </li>

              <li className="dropdown user user-menu">
                <a
                  href="#"
                  className="waves-effect waves-light rounded dropdown-toggle p-0"
                  data-toggle="dropdown"
                  title="User"
                >
                  <img src="../images/avatar/1.jpg" alt="" />
                </a>
                <ul className="dropdown-menu animated flipInX">
                  <li className="user-body">
                    <a className="dropdown-item" href="#">
                      <i className="ti-user text-muted mr-2"></i> Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="ti-wallet text-muted mr-2"></i> My Wallet
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="ti-settings text-muted mr-2"></i> Settings
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      <i className="ti-lock text-muted mr-2"></i> Logout
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  data-toggle="control-sidebar"
                  title="Setting"
                  className="waves-effect waves-light"
                >
                  <i className="ti-settings"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
