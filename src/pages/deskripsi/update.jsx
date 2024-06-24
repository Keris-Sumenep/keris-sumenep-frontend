import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateDeskripsi() {
  let [data, setData] = useState({
    id: null,
    bendaId: null,
    languageId: null,
    deskripsi: "",
  });
  const [languages, setLanguages] = useState([]);

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
        `${import.meta.env.VITE_APP_APIURL}/deskripsi/${code}`,
        {
          withCredentials: true,
        }
      );
      const getLanguage = await axios.get(
        `${import.meta.env.VITE_APP_APIURL}/language`,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      setLanguages(getLanguage.data.payload);
      setData(response.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  const update = async (e) => {
    e.preventDefault();
    const dataSubmit = {
      deskripsi: data.deskripsi,
    };
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_APP_APIURL}/deskripsi/update/${data.id}`,
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
        <div class="col-lg-6 col-12 mx-auto">
          <div class="box">
            <div class="box-header with-border">
              <h4 class="box-title">Update Deskripsi</h4>
            </div>
            <div class="form">
              <div class="box-body">
                <div class="form-group">
                  <label>Deskripsi</label>
                  <div class="input-group mb-3">
                    <textarea
                      rows="5"
                      class="form-control"
                      placeholder="About Project"
                      value={data.deskripsi}
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
                <div class="form-group">
                  <label>Language</label>
                  <select
                    class="form-control"
                    value={data.languageId}
                    onChange={(e) => {
                      handleEditDataChange("langugageId", e.target.value);
                    }}
                  >
                    <option value={""}>Language</option>
                    {languages.map((value, idx) => {
                      return (
                        <>
                          <option value={value.id} key={idx}>
                            {value.bahasa}
                          </option>
                        </>
                      );
                    })}
                  </select>
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
