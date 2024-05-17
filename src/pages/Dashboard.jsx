import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_APIURL}/token`,
        {
          withCredentials: true,
        }
      );
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.nama);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  };

  const axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_APIURL}/login`,
          {
            withCredentials: true,
          }
        );
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decode = jwtDecode(response.data.accessToken);
        setName(decode.nama);
        setExpire(decode.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return (
    <>
      <div className="row">
        <div className="col-xl-6 col-6">
          <div className="box overflow-hidden pull-up hov-rs">
            <div className="box-body text-center">
              <div className="icon border-primary b-1 rounded w-60 h-60 mx-auto">
                <i className="text-primary mr-0 font-size-24 mdi mdi-account-multiple"></i>
              </div>
              <div>
                <p className="text-mute mt-20 mb-0 font-size-16 font-weight-500">
                  {name}
                </p>
                <h6 className="text-dark mb-0 font-weight-500">
                  3400
                  <small className="text-success">
                    <i className="fa fa-caret-up"></i> +2.5%
                  </small>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
