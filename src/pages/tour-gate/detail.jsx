import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal";
import { Helmet } from "react-helmet";

export default function DetailTourGuide() {
  const [data, setData] = useState({});
  const [isView, setIsView] = useState(false);
  let { code } = useParams();

  const fetchData = async () => {
    try {
      let response = await axios.get(
        `${import.meta.env.VITE_APP_APIURL}/tour-gate/${code}`
      );
      console.log(response.data.payload);
      setData(response.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const getData = async () => {
      if (isMounted) {
        await fetchData();
      }
    };

    getData();

    return () => {
      isMounted = false;
    };
  }, [code]);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="box">
            <div className="box-header with-border">
              <h4 className="box-title">Detail Tour Guide</h4>
            </div>
            <div className="box-body no-padding">
              <div className="col-6 py-4 mx-auto">
                <div className="box bl-3 border-primary mx-auto">
                  <div className="box-header">
                    <div className="col-12 mx-auto">
                      <img
                        src={`${import.meta.env.VITE_APP_BASEURL}/tour-gate/${
                          data.foto
                        }`}
                        alt=""
                        className=""
                        style={{
                          aspectRatio: "1/1",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                  <div className="box-body">
                    <h4 className="box-title">{data.nama}</h4>
                    <p>
                      Gender :{" "}
                      {data.gender == "male" ? "Laki - laki" : "Perempuan"}
                    </p>
                    <p>Tahun Mulai : {data.tahun_mulai}</p>
                    <p>Alamat : {data.alamat}</p>
                    <p>
                      Status :{" "}
                      {data.status == "menikah" ? "Menikah" : "Belum Menikah"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
