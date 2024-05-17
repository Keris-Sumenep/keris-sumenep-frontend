import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateBenda() {
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [data, setData] = useState({
    id: null,
    kode_benda: "",
    nama: "",
    deskripsi: "",
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
  }, []);
  return (
    <>
      <div className="row">
        <div class="col-lg-8 col-12 mx-auto">
          <div class="box">
            <div class="box-header with-border">
              <h4 class="box-title">Update Benda</h4>
            </div>
            <div class="form">
              <div class="box-body">
                <div class="form-group">
                  <label>Nama Benda</label>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nama Benda"
                      defaultValue={data.nama}
                      onChange={(e) => {
                        handleEditDataChange("nama", e.target.value);
                      }}
                    />
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="ti-user"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Deskripsi</label>
                  <div class="input-group mb-3">
                    <textarea
                      rows="5"
                      class="form-control"
                      placeholder="About Project"
                      defaultValue={data.deskripsi}
                      onChange={(e) => {
                        handleEditDataChange("deskripsi", e.target.value);
                      }}
                    ></textarea>
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="ti-pencil-alt2"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="box-footer text-right">
                <button
                  type="button"
                  class="btn btn-rounded btn-warning btn-outline mr-1"
                >
                  <i class="ti-trash"></i> Cancel
                </button>
                <button
                  onClick={update}
                  class="btn btn-rounded btn-primary btn-outline"
                >
                  <i class="ti-save-alt"></i> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
