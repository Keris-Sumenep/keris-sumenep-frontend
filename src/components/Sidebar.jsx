import axios from "axios";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_APP_APIURL}/logout`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-profile">
            <div className="ulogo">
              <a href="index.html">
                <div className="d-flex align-items-center justify-content-center">
                  <img src="../images/logo-dark.png" alt="" />
                  <h3>
                    <b>Keris</b> Sumenep
                  </h3>
                </div>
              </a>
            </div>
          </div>
          <ul className="sidebar-menu" data-widget="tree">
            <li>
              <a
                href="/dashboard"
                style={{
                  display: "flex",
                  height: "auto",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <span
                  class="mdi mdi-chart-pie"
                  style={{ fontSize: "20px" }}
                ></span>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/benda"
                style={{
                  display: "flex",
                  height: "auto",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <span class="mdi mdi-cube" style={{ fontSize: "20px" }}></span>
                <span>Benda</span>
              </a>
            </li>
          </ul>
        </section>

        <div className="sidebar-footer">
          <a
            href="javascript:void(0)"
            className="link"
            data-toggle="tooltip"
            title=""
            data-original-title="Settings"
            aria-describedby="tooltip92529"
          >
            <i className="ti-settings"></i>
          </a>

          <a
            href="mailbox_inbox.html"
            className="link"
            data-toggle="tooltip"
            title=""
            data-original-title="Email"
          >
            <i className="ti-email"></i>
          </a>

          <a
            className="link"
            data-toggle="tooltip"
            title=""
            data-original-title="Logout"
            onClick={logout}
          >
            <i className="ti-lock"></i>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
