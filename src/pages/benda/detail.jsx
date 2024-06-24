import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "../../components/Modal";
import { Helmet } from "react-helmet";

export default function DetailBenda() {
  const [data, setData] = useState({});
  let { code } = useParams();

  const fetchData = async () => {
    try {
      let response = await axios.get(
        `${import.meta.env.VITE_APP_APIURL}/benda/${code}`
      );
      console.log(response.data.payload);
      setData(response.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const getData = async () => {
      if (isMounted) {
        await fetchData();
      }
    };

    getData();

    return () => {
      isMounted = false;
    };
  }, [code]);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="box">
            <div className="box-header with-border">
              <h4 className="box-title">Detail Benda</h4>
              <div className="box-controls pull-right">
                <div className="btn-group">
                  <button
                    className="btn btn-sm btn-circle btn-secondary dropdown-toggle no-caret"
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="icon ti-settings"></i>{" "}
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    style={{ willChange: "auto" }}
                  >
                    <Link
                      className="dropdown-item"
                      to={`/deskripsi/${data.kode_benda}`}
                    >
                      Detail Deskripsi
                    </Link>
                    <Link
                      className="dropdown-item"
                      to={`/gambar-benda/${data.kode_benda}`}
                    >
                      Detail Gambar
                    </Link>
                    <Link
                      className="dropdown-item"
                      to={`/video-benda/${data.kode_benda}`}
                    >
                      Detail Video
                    </Link>
                    <Link
                      className="dropdown-item"
                      to={`/voice-benda/${data.kode_benda}`}
                    >
                      Detail Voice
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-body no-padding">
              <div className="col-6 py-4 mx-auto">
                <div className="box bl-3 border-primary mx-auto">
                  <div className="box-header">
                    <div className="col-12 mx-auto">
                      <img
                        src={`${import.meta.env.VITE_APP_BASEURL}/foto-benda/${
                          data && data.gambar_bendas && data.gambar_bendas[0]
                            ? data.gambar_bendas[0].gambar
                            : ""
                        }`}
                        alt=""
                        className=""
                        style={{
                          aspectRatio: "1/1",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                  <div className="box-body">
                    <h4 className="box-title">{data.nama}</h4>
                    <p>
                      {data.deskripsis && data.deskripsis[0]
                        ? data.deskripsis[0].deskripsi
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
