import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";

export default function TourGuide() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_APIURL}/tour-gate`,
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

  const deleteTourGuide = async (code) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_APP_APIURL}/tour-gate/delete/${code}`,
        {
          withCredentials: true,
        }
      );
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
              <h4 className="box-title">Tour Guide</h4>
              <div className="box-controls pull-right">
                <Link to={"/tour-guide/create"}>
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
                      <th>Foto</th>
                      <th>Nama</th>
                      <th>Gender</th>
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
                              <span class="avatar avatar-xl status-success">
                                <img
                                  class="avatar"
                                  src={`${
                                    import.meta.env.VITE_APP_BASEURL
                                  }/tour-gate/${value.foto}`}
                                  alt="Foto Tour Guide"
                                />
                              </span>
                            </td>
                            <td>
                              <span className="text-muted">{value.nama}</span>{" "}
                            </td>
                            <td>
                              <span className="text-muted">{value.gender}</span>{" "}
                            </td>
                            <td>
                              <div className="row" style={{ gap: "3px" }}>
                                <Link to={`/tour-guide/update/${value.id}`}>
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-circle btn-primary mb-5"
                                  >
                                    <i className="mdi mdi-pencil"></i>
                                  </button>
                                </Link>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-circle btn-danger mb-5"
                                  onClick={() => {
                                    deleteTourGuide(value.id);
                                  }}
                                >
                                  <i className="mdi mdi-delete"></i>
                                </button>
                                <Link to={`/tour-guide/${value.id}`}>
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-circle btn-warning mb-5"
                                  >
                                    <i className="mdi mdi-information-outline"></i>
                                  </button>
                                </Link>
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
