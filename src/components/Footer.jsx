const Footer = () => {
  let date = new Date();
  return (
    <>
      <footer className="main-footer">
        <div className="pull-right d-none d-sm-inline-block">
          <ul className="nav nav-primary nav-dotted nav-dot-separated justify-content-center justify-content-md-end">
            <li className="nav-item">
              <span className="nav-link" href="javascript:void(0)">
                FAQ
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" href="#">
                Purchase Now
              </span>
            </li>
          </ul>
        </div>
        &copy; {date.getFullYear().toString()} <span>Admin Keris Sumenep</span>.
        All Rights Reserved.
      </footer>
    </>
  );
};

export default Footer;
