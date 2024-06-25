import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/Dashboard";
import { Helmet } from "react-helmet";
import Benda from "../pages/benda";
import CreateBenda from "../pages/benda/create";
import UpdateBenda from "../pages/benda/update";
import GambarBenda from "../pages/gambar-benda";
import CreateGambarBenda from "../pages/gambar-benda/create";
import CreateVideoBenda from "../pages/video-benda/create";
import Deskripsi from "../pages/deskripsi";
import CreateDeskripsi from "../pages/deskripsi/create";
import DetailBenda from "../pages/benda/detail";
import VoiceBenda from "../pages/voice-benda";
import CreateVoiceBenda from "../pages/voice-benda/create";
import TourGuide from "../pages/tour-gate";
import CreateTourGuide from "../pages/tour-gate/create";
import DetailTourGuide from "../pages/tour-gate/detail";
import UpdateTourGuide from "../pages/tour-gate/update";
import Setting from "../pages/setting";
import CreateSetting from "../pages/setting/create";
import UpdateSetting from "../pages/setting/update";
import UpdateDeskripsi from "../pages/deskripsi/update";
import UpdateGambarBenda from "../pages/gambar-benda/update";
import VideoBenda from "../pages/video-benda";
import UpdateVideoBenda from "../pages/video-benda/update";
import UpdateVoiceBenda from "../pages/voice-benda/update";
import { useEffect } from "react";

export default function DashboardLayout() {
  let token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });
  return (
    <>
      <Helmet>
        <link
          rel="icon"
          href="https://html.psdtohtmlexpert.com/admin/sunny-admin-template/images/favicon.ico"
        />
        <link rel="stylesheet" href="/css/vendors_css.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/skin_color.css" />
        <link
          href="
https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css
"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
        />
        <script
          src="
https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/scripts/verify.min.js
"
        ></script>
      </Helmet>
      <div className="hold-transition light-skin sidebar-mini theme-primary fixed">
        <div className="wrapper">
          <Header />
          <Sidebar />
          <div className="content-wrapper">
            <div className="container-full">
              <section className="content">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />

                  {/* route benda */}
                  <Route path="/benda" element={<Benda />} />
                  <Route path="/benda/create" element={<CreateBenda />} />
                  <Route path="/benda/detail/:code" element={<DetailBenda />} />
                  <Route path="/benda/update/:code" element={<UpdateBenda />} />
                  {/* route benda */}

                  {/* route deskripsi benda */}
                  <Route path="/deskripsi/:code" element={<Deskripsi />} />
                  <Route
                    path="/deskripsi/create/:code"
                    element={<CreateDeskripsi />}
                  />
                  <Route
                    path="/deskripsi/update/:code"
                    element={<UpdateDeskripsi />}
                  />
                  {/* route gambar benda */}

                  {/* route gambar benda */}
                  <Route path="/gambar-benda/:code" element={<GambarBenda />} />
                  <Route
                    path="/gambar-benda/create/:code"
                    element={<CreateGambarBenda />}
                  />
                  <Route
                    path="/gambar-benda/update/:code"
                    element={<UpdateGambarBenda />}
                  />
                  {/* route gambar benda */}

                  {/* route video benda */}
                  <Route path="/video-benda/:code" element={<VideoBenda />} />
                  <Route
                    path="/video-benda/create/:code"
                    element={<CreateVideoBenda />}
                  />
                  <Route
                    path="/video-benda/update/:code"
                    element={<UpdateVideoBenda />}
                  />
                  {/* route video benda */}

                  {/* route voice benda */}
                  <Route path="/voice-benda/:code" element={<VoiceBenda />} />
                  <Route
                    path="/voice-benda/create/:code"
                    element={<CreateVoiceBenda />}
                  />
                  <Route
                    path="/voice-benda/update/:code"
                    element={<UpdateVoiceBenda />}
                  />
                  {/* route voice benda */}

                  {/* route tour guide */}
                  <Route path="/tour-guide" element={<TourGuide />} />
                  <Route
                    path="/tour-guide/create"
                    element={<CreateTourGuide />}
                  />
                  <Route
                    path="/tour-guide/:code"
                    element={<DetailTourGuide />}
                  />
                  <Route
                    path="/tour-guide/update/:code"
                    element={<UpdateTourGuide />}
                  />
                  {/* route tour guide */}

                  {/* route setting */}
                  <Route path="/setting" element={<Setting />} />
                  <Route path="/setting/create" element={<CreateSetting />} />
                  <Route
                    path="/setting/update/:code"
                    element={<UpdateSetting />}
                  />
                  {/* route setting */}
                </Routes>
              </section>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <Helmet>
        <script src="/js/vendors.min.js"></script>
        <script src="/assets/icons/feather-icons/feather.min.js"></script>
        <script src="/assets/vendor_components/easypiechart/dist/jquery.easypiechart.js"></script>
        <script src="/assets/vendor_components/apexcharts-bundle/irregular-data-series.js"></script>
        {/* <script src="/assets/vendor_components/apexcharts-bundle/dist/apexcharts.js"></script> */}

        <script src="/js/template.js"></script>
        <script src="/js/pages/dashboard.js"></script>
      </Helmet>
    </>
  );
}
