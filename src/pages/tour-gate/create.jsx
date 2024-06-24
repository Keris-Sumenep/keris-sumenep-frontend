import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateTourGuide() {
  const [nama, setNama] = useState("");
  const [foto, setFoto] = useState("");
  const [gender, setGender] = useState("");
  const [tahunMulai, setTahunMulai] = useState("");
  const [alamat, setAlamat] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const create = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("nama", nama);
    formData.append("foto", foto);
    formData.append("gender", gender);
    formData.append("tahun_mulai", tahunMulai);
    formData.append("alamat", alamat);
    formData.append("status", status);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_APIURL}/tour-gate`,
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
  return (
    <>
      <div className="row">
        <div class="col-lg-6 col-12 mx-auto">
          <div class="box">
            <div class="box-header with-border">
              <h4 class="box-title">Create Tour Guide</h4>
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
                      onChange={(e) => {
                        setNama(e.target.value);
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
                          setFoto(e.target.files[0]);
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
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    >
                      <option value={""}>Pilih Gender</option>
                      <option value={"male"}>laki - laki</option>
                      <option value={"famale"}>perempuan</option>
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
                      onChange={(e) => {
                        setTahunMulai(e.target.value);
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
                      onChange={(e) => {
                        setAlamat(e.target.value);
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
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                    >
                      <option value={""}>Pilih Status</option>
                      <option value={"menikah"}>Menikah</option>
                      <option value={"belum menikah"}>Belum Menikah</option>
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
                  onClick={create}
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
