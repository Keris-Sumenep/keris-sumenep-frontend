import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBenda() {
  const [nama, setNama] = useState("");
  const navigate = useNavigate();

  const create = async (e) => {
    e.preventDefault();
    const data = {
      nama: nama,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_APIURL}/benda/create`,
        data,
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
  return (
    <>
      <div className="row">
        <div class="col-lg-6 col-12 mx-auto">
          <div class="box">
            <div class="box-header with-border">
              <h4 class="box-title">Create Benda</h4>
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
                </div>{" "}
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
