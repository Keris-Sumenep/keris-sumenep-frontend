import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";

export default function Setting() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_APIURL}/setting`,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      setData(response.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSetting = async (code) => {
    try {
      await axios.delete(`${import.meta.env.VITE_APP_APIURL}/setting/${code}`, {
        withCredentials: true,
      });
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="box">
            <div className="box-header with-border">
              <h4 className="box-title">Settings</h4>
              <div className="box-controls pull-right">
                <Link to={"/setting/create"}>
                  <button
                    type="button"
                    className="btn btn-rounded btn-success mb-5"
                  >
                    CREATE
                  </button>
                </Link>
              </div>
            </div>
            <div className="box-body no-padding">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Nama Aplikasi</th>
                      <th>Logo Aplikasi</th>
                      <th>Logo PENS</th>
                      <th>Logo PSDKU</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((value, index) => {
                      return (
                        <>
                          <tr>
                            <td>{index + 1}</td>
                            <td>
                              <span className="text-muted">
                                {value.nama_aplikasi}
                              </span>
                            </td>
                            <td>
                              <span class="avatar avatar-xxl">
                                <img
                                  class="avatar"
                                  src={`${
                                    import.meta.env.VITE_APP_BASEURL
                                  }/setting/${value.logo_aplikasi}`}
                                  alt="Foto Tour Guide"
                                />
                              </span>
                            </td>
                            <td>
                              <span class="avatar avatar-xxl">
                                <img
                                  class="avatar"
                                  src={`${
                                    import.meta.env.VITE_APP_BASEURL
                                  }/setting/${value.logo_pens}`}
                                  alt="Foto Tour Guide"
                                />
                              </span>
                            </td>
                            <td>
                              <span class="avatar avatar-xxl">
                                <img
                                  class="avatar"
                                  src={`${
                                    import.meta.env.VITE_APP_BASEURL
                                  }/setting/${value.logo_pens_psdku}`}
                                  alt="Foto Tour Guide"
                                />
                              </span>
                            </td>
                            <td>
                              <div className="row" style={{ gap: "3px" }}>
                                <Link to={`/setting/update/${value.id}`}>
                                  <button
                                    type="button"
                                    class="btn btn-sm btn-circle btn-primary mb-5"
                                  >
                                    <i class="mdi mdi-pencil"></i>
                                  </button>
                                </Link>
                                <button
                                  type="button"
                                  class="btn btn-sm btn-circle btn-danger mb-5"
                                  onClick={() => {
                                    deleteSetting(value.id);
                                  }}
                                >
                                  <i class="mdi mdi-delete"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
