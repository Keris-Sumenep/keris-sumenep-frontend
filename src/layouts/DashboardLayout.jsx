import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/Dashboard";
import { Helmet } from "react-helmet";

export default function DashboardLayout({ content }) {
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
        <script src="/assets/vendor_components/apexcharts-bundle/dist/apexcharts.js"></script>

        <script src="/js/template.js"></script>
        <script src="/js/pages/dashboard.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"></script>
      </Helmet>
    </>
  );
}
