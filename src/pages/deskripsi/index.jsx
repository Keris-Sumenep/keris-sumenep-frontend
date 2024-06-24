import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Deskripsi() {
  const [data, setData] = useState([]);
  let { code } = useParams();
  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_APIURL}/benda/${code}`,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      setData(response.data.payload.deskripsis);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBenda = async (code) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_APP_APIURL}/deskripsi/delete/${code}`,
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
              <h4 className="box-title">Deskripsi Benda</h4>
            </div>
            <div className="box-body no-padding">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Deskripsi</th>
                      <th>Language</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((value, index) => {
                      return (
                        <>
                          <tr>
                            <td>{index + 1}</td>
                            <td>{value.deskripsi}</td>
                            <td>
                              <p className="">
                                {value.language && value.language.bahasa
                                  ? value.language.bahasa
                                  : ""}
                              </p>
                            </td>
                            <td>
                              <div className="row" style={{ gap: "3px" }}>
                                <Link to={`/deskripsi/update/${value.id}`}>
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
                                    deleteBenda(value.id);
                                  }}
                                >
                                  <i className="mdi mdi-delete"></i>
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
