import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CreatVideoBenda() {
  const [judul, setJudul] = useState("");
  const [video, setVideo] = useState("");
  const [data, setData] = useState({});
  const navigate = useNavigate();
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
      setData(response.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  const create = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("bendaId", data.id);
    formData.append("judul", judul);
    formData.append("video", video);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_APIURL}/video-benda`,
        formData,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      navigate("/benda");
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    getData();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-12 mx-auto">
          <div className="box">
            <div className="box-header with-border">
              <h4 className="box-title">Create Video Benda</h4>
            </div>
            <div className="form">
              <div className="box-body">
                <div className="form-group">
                  <label>Judul</label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="judul Benda"
                      onChange={(e) => {
                        setJudul(e.target.value);
                      }}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="ti-user"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Video</label>
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        onChange={(e) => {
                          setVideo(e.target.files[0]);
                        }}
                      />
                      <label className="custom-file-label" for="customFile">
                        Choose file
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-footer text-right">
                <button
                  type="button"
                  className="btn btn-rounded btn-warning btn-outline mr-1"
                >
                  <i className="ti-trash"></i> Cancel
                </button>
                <button
                  onClick={create}
                  className="btn btn-rounded btn-primary btn-outline"
                >
                  <i className="ti-save-alt"></i> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
