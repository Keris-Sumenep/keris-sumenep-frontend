import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const auth = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      await axios.post(`${import.meta.env.VITE_APP_APIURL}/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <>
      <Helmet>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link
          rel="icon"
          href="https://html.psdtohtmlexpert.com/admin/sunny-admin-template/images/favicon.ico"
        />

        <title>Log in </title>
        <link rel="stylesheet" href="/css/vendors_css.css" />

        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/skin_color.css" />
      </Helmet>
      <div
        className="hold-transition theme-primary bg-gradient-primary"
        style={{ width: "100%", height: "100vh" }}
      >
        <div className="container h-p100">
          <div className="row align-items-center justify-content-md-center h-p100">
            <div className="col-12">
              <div className="row justify-content-center no-gutters">
                <div className="col-lg-4 col-md-5 col-12">
                  <div className="content-top-agile p-10">
                    <h2 className="text-white">KERIS SUMENEP</h2>
                    <p className="text-white-50">
                      Sign in to start your session
                    </p>
                  </div>
                  <div className="p-30 rounded30 box-shadowed b-2 b-dashed">
                    <form onSubmit={auth}>
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text bg-transparent text-white">
                              <i className="ti-user"></i>
                            </span>
                          </div>
                          <input
                            type="email"
                            name="email"
                            className="form-control pl-15 bg-transparent text-white plc-white"
                            placeholder="example@gmail.com"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text  bg-transparent text-white">
                              <i className="ti-lock"></i>
                            </span>
                          </div>
                          <input
                            type="password"
                            name="password"
                            className="form-control pl-15 bg-transparent text-white plc-white"
                            placeholder="Password"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 text-center">
                          <button
                            type="submit"
                            className="btn btn-info btn-rounded mt-10"
                          >
                            SIGN IN
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Helmet>
          <script src="/js/vendors.min.js"></script>
          <script src="/assets/icons/feather-icons/feather.min.js"></script>
        </Helmet>
      </div>
    </>
  );
}
