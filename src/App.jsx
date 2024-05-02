import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <div className="container-full">
            <section className="content">
              <div className="row">
                <div class="col-xl-6 col-6">
                  <div class="box overflow-hidden pull-up hov-rs">
                    <div class="box-body text-center">
                      <div class="icon border-primary b-1 rounded w-60 h-60 mx-auto">
                        <i class="text-primary mr-0 font-size-24 mdi mdi-account-multiple"></i>
                      </div>
                      <div>
                        <p class="text-mute mt-20 mb-0 font-size-16 font-weight-500">
                          New Client
                        </p>
                        <h6 class="text-dark mb-0 font-weight-500">
                          3400
                          <small class="text-success">
                            <i class="fa fa-caret-up"></i> +2.5%
                          </small>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
