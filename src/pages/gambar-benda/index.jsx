import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function GambarBenda() {
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
      setData(response.data.payload.gambar_bendas);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBenda = async (code) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_APP_APIURL}/gambar-benda/${code}`,
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
              <h4 className="box-title">Gambar Benda</h4>
            </div>
            <div className="box-body no-padding">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Gambar</th>
                      <th>Judul</th>
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
                              <img
                                src={`${
                                  import.meta.env.VITE_APP_BASEURL
                                }/foto-benda/${value.gambar}`}
                                alt=""
                                className=""
                                style={{
                                  width: "300px",
                                  aspectRatio: "1/1",
                                  objectFit: "cover",
                                  boxSizing: "border-box",
                                }}
                              />
                            </td>
                            <td>{value.judul}</td>
                            <td>
                              <div className="row" style={{ gap: "3px" }}>
                                <Link to={`/gambar-benda/update/${value.id}`}>
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
                                    deleteBenda(value.id);
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
