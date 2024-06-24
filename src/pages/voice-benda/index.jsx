import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import QRCode from "qrcode.react";

export default function VoiceBenda() {
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
      setData(response.data.payload.voice_bendas);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVoice = async (code) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_APP_APIURL}/voice-benda/${code}`,
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
              <h4 className="box-title">Voice Benda</h4>
            </div>
            <div className="box-body no-padding">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Voice</th>
                      <th>Judul</th>
                      <th>Bahasa</th>
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
                              <audio controls={true}>
                                <source
                                  src={`${
                                    import.meta.env.VITE_APP_BASEURL
                                  }/voice-benda/${value.voice}`}
                                  type="audio/mpeg"
                                />
                                Your browser does not support the audio element.
                              </audio>
                            </td>
                            <td>{value.judul}</td>
                            <td>
                              {value.language ? value.language.bahasa : ""}
                            </td>
                            <td>
                              <div className="row" style={{ gap: "3px" }}>
                                <Link to={`/voice-benda/update/${value.id}`}>
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
                                    deleteVoice(value.id);
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
