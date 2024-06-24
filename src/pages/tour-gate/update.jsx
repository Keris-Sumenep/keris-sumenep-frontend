import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateTourGuide() {
  const [data, setData] = useState({
    id: null,
    nama: "",
    foto: "",
    gender: "",
    tahun_mulai: "",
    alamat: "",
    status: "",
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
        `${import.meta.env.VITE_APP_APIURL}/tour-gate/${code}`,
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
    formData.append("nama", data.nama);
    formData.append("foto", data.foto);
    formData.append("gender", data.gender);
    formData.append("tahun_mulai", data.tahun_mulai);
    formData.append("alamat", data.alamat);
    formData.append("status", data.status);
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_APP_APIURL}/tour-gate/update/${code}`,
        formData,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      navigate("/tour-guide");
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
              <h4 className="box-title">Update Tour Guide</h4>
            </div>
            <div class="form">
              <div class="box-body">
                <div class="form-group">
                  <label>Nama</label>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nama"
                      value={data.nama}
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
                <div className="form-group">
                  <label>Foto</label>
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        onChange={(e) => {
                          handleEditDataChange("foto", e.target.files[0]);
                        }}
                      />
                      <label className="custom-file-label" for="customFile">
                        Pilih foto
                      </label>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Gender</label>
                  <div className="input-group mb-3">
                    <select
                      class="form-control"
                      value={data.gender}
                      onChange={(e) => {
                        handleEditDataChange("gender", e.target.value);
                      }}
                    >
                      <option value={""}>Pilih Gender</option>
                      <option
                        value={"male"}
                        selected={data.gender == "male" ? true : false}
                      >
                        laki - laki
                      </option>
                      <option
                        value={"famale"}
                        selected={data.gender == "famale" ? true : false}
                      >
                        perempuan
                      </option>
                    </select>
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="ti-info-alt"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Tahun Mulai</label>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Tahun Mulai"
                      value={data.tahun_mulai}
                      onChange={(e) => {
                        handleEditDataChange("tahun_mulai", e.target.value);
                      }}
                    />
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="ti-calendar"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Alamat</label>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Alamat"
                      value={data.alamat}
                      onChange={(e) => {
                        handleEditDataChange("alamat", e.target.value);
                      }}
                    />
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="ti-home"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Status</label>
                  <div className="input-group mb-3">
                    <select
                      class="form-control"
                      value={data.status}
                      onChange={(e) => {
                        handleEditDataChange("status", e.target.value);
                      }}
                    >
                      <option value={""}>Pilih Status</option>
                      <option
                        value={"menikah"}
                        selected={data.status == "menikah" ? true : false}
                      >
                        Menikah
                      </option>
                      <option
                        value={"belum menikah"}
                        selected={data.status == "belum menikah" ? true : false}
                      >
                        Belum Menikah
                      </option>
                    </select>
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="ti-info-alt"></i>
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
