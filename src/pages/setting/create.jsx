import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateSetting() {
  const [nama, setNama] = useState("");
  const [logoPens, setLogoPens] = useState("");
  const [logoAplikasi, setLogoAplikasi] = useState("");
  const [logoPsdku, setLogoPsdku] = useState("");
  const navigate = useNavigate();
  let { code } = useParams();

  const create = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama_aplikasi", nama);
    formData.append("logo_aplikasi", logoAplikasi);
    formData.append("logo_pens", logoPens);
    formData.append("logo_pens_psdku", logoPsdku);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_APIURL}/setting`,
        formData,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      navigate("/setting");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-12 mx-auto">
          <div className="box">
            <div className="box-header with-border">
              <h4 className="box-title">Create Gambar Benda</h4>
            </div>
            <div className="form">
              <div className="box-body">
                <div className="form-group">
                  <label>Nama Aplikasi</label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nama Aplikasi"
                      onChange={(e) => {
                        setNama(e.target.value);
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
                  <label>Logo Aplikasi</label>
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        onChange={(e) => {
                          setLogoAplikasi(e.target.files[0]);
                        }}
                      />
                      <label className="custom-file-label" for="customFile">
                        Choose file
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Logo PENS</label>
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        onChange={(e) => {
                          setLogoPens(e.target.files[0]);
                        }}
                      />
                      <label className="custom-file-label" for="customFile">
                        Choose file
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Logo PENS PSDKU</label>
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        onChange={(e) => {
                          setLogoPsdku(e.target.files[0]);
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
