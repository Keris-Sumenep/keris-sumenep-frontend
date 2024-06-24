import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateGambarBenda() {
  const [data, setData] = useState({
    id: null,
    bendaId: null,
    judul: "",
    gambar: "",
  });
  let { code } = useParams();
  const navigate = useNavigate();

  const handleEditDataChange = (field, value) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_APIURL}/gambar-benda/${code}`,
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

  const update = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("judul", data.judul);
    formData.append("gambar", data.gambar);
    formData.append("bendaId", data.bendaId);
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_APP_APIURL}/gambar-benda/${code}`,
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

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-12 mx-auto">
          <div className="box">
            <div className="box-header with-border">
              <h4 className="box-title">Update Gambar Benda</h4>
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
                      value={data.judul}
                      onChange={(e) => {
                        handleEditDataChange("judul", e.target.value);
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
                  <label>Gambar Benda</label>
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        onChange={(e) => {
                          handleEditDataChange("gambar", e.target.files[0]);
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
                  onClick={update}
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
