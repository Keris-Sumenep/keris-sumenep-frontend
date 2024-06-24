import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateBenda() {
  const [data, setData] = useState({
    id: null,
    kode_benda: "",
    nama: "",
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

  const update = async (e) => {
    e.preventDefault();
    const dataSubmit = {
      nama: data.nama,
      deskripsi: data.deskripsi,
    };
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_APP_APIURL}/benda/update/${code}`,
        dataSubmit,
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
  }, [code]);

  return (
    <>
      <div className="row">
        <div className="col-lg-8 col-12 mx-auto">
          <div className="box">
            <div className="box-header with-border">
              <h4 className="box-title">Update Benda</h4>
            </div>
            <div className="form">
              <div className="box-body">
                <div className="form-group">
                  <label>Nama Benda</label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nama Benda"
                      value={data.nama}
                      onChange={(e) => {
                        handleEditDataChange("nama", e.target.value);
                      }}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="ti-user"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-footer text-right">
                <button
                  type="button"
                  className="btn btn-rounded btn-warning btn-outline mr-1"
                  onClick={() => navigate("/benda")}
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
