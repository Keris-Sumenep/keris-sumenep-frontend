import { Helmet } from "react-helmet";
export default function LandingPage() {
  return (
    <>
      <Helmet>
        <link
          href="/assets-landing-page/assets/css/plugins.css"
          rel="stylesheet"
        />
        <link
          href="/assets-landing-page/assets/css/icons.css"
          rel="stylesheet"
        />
        <link
          href="/assets-landing-page/assets/css/typography.css"
          rel="stylesheet"
        />
        <link
          href="/assets-landing-page/assets/css/header.css"
          rel="stylesheet"
        />
        <link
          href="/assets-landing-page/assets/css/blog-and-pages.css"
          rel="stylesheet"
        />
        <link
          href="/assets-landing-page/assets/css/footer.css"
          rel="stylesheet"
        />
        <link href="/assets-landing-page/style.css" rel="stylesheet" />
        <link
          href="/assets-landing-page/assets/css/responsive.css"
          rel="stylesheet"
        />

        <script src="/assets-landing-page/assets/js/vendor/modernizr-2.8.3.min.js"></script>
      </Helmet>
      <div
        className="overflow-xhidden home-three"
        data-spy="scroll"
        data-target=".mainmenu-area"
        data-offset="90"
        style={{ overflowX: "hidden", width: "100%" }}
      >
        <p className="browserupgrade">
          You are using an <strong>outdated</strong> browser. Please{" "}
          <a href="http://browsehappy.com/">upgrade your browser</a> to improve
          your experience.
        </p>

        {/* <div className="preeloader">
          <div className="preloader-spinner"></div>
        </div> */}
        <a href="#scroolup" className="scrolltotop">
          <i className="fa fa-long-arrow-up"></i>
        </a>
        <header className="top-area" id="home">
          <div className="header-top-area" id="scroolup">
            <div className="mainmenu-area" id="mainmenu-area">
              <div className="mainmenu-area-bg"></div>
              <div className="cd-main-header animate-search">
                <div id="search" className="cd-main-search">
                  <form>
                    <input type="search" placeholder="Search..." name="s" />
                  </form>

                  <div className="cd-search-suggestions">
                    <div className="news">
                      <h3>News</h3>
                      <ul>
                        <li>
                          <a className="image-wrapper" href="#0">
                            <img
                              src="/assets-landing-page//assets-landing-page/assets/img/placeholder.png"
                              alt="News image"
                            />
                          </a>
                          <h4>
                            <a className="cd-nowrap" href="#0">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit.
                            </a>
                          </h4>
                          <time datetime="2016-01-12">Feb 03, 2016</time>
                        </li>

                        <li>
                          <a className="image-wrapper" href="#0">
                            <img
                              src="/assets-landing-page/assets/img/placeholder.png"
                              alt="News image"
                            />
                          </a>
                          <h4>
                            <a className="cd-nowrap" href="#0">
                              Incidunt voluptatem adipisci voluptates fugit
                              beatae culpa eum, distinctio, assumenda est ad
                            </a>
                          </h4>
                          <time datetime="2016-01-12">Jan 28, 2016</time>
                        </li>

                        <li>
                          <a className="image-wrapper" href="#0">
                            <img
                              src="/assets-landing-page/assets/img/placeholder.png"
                              alt="News image"
                            />
                          </a>
                          <h4>
                            <a className="cd-nowrap" href="#0">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Iusto, esse.
                            </a>
                          </h4>
                          <time datetime="2016-01-12">Jan 12, 2016</time>
                        </li>
                      </ul>
                    </div>
                    <div className="quick-links">
                      <h3>Quick Links</h3>
                      <ul>
                        <li>
                          <a href="#0">Find a store</a>
                        </li>
                        <li>
                          <a href="#0">Accessories</a>
                        </li>
                        <li>
                          <a href="#0">Warranty info</a>
                        </li>
                        <li>
                          <a href="#0">Support</a>
                        </li>
                        <li>
                          <a href="#0">Contact us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="#" className="close cd-text-replace"></a>
                  <div className="cd-cover-layer"></div>
                </div>
              </div>
              <nav className="navbar">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 flex-v-center">
                      <div
                        className="navbar-header"
                        style={{
                          height: "max-content",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <a
                          href="/"
                          className="custom-logo-link default-logo"
                          style={{ width: "max-content" }}
                        >
                          <h4 className="">Keris Sumenep</h4>
                        </a>
                        <a href="/" className="custom-logo-link sticky-logo">
                          <h4 className="">Keris Sumenep</h4>
                        </a>
                      </div>
                      <svg
                        className="ham hamRotate ham8"
                        viewBox="0 0 100 100"
                        width="50"
                      >
                        <path
                          className="line top"
                          d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                        />
                        <path className="line middle" d="m 30,50 h 40" />
                        <path
                          className="line bottom"
                          d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                        />
                      </svg>
                      <div id="main-nav" className="stellarnav">
                        <ul id="nav" className="nav navbar-nav pull-right">
                          <li className="active">
                            <a href="/">Home</a>
                          </li>
                          <li>
                            <a href="#features">Features</a>
                          </li>
                          <li>
                            <a href="#screenshots">Screenshots</a>
                          </li>
                          <li>
                            <a href="#pricing">Pricing</a>
                          </li>
                          <li>
                            <a href="#blog">Blog</a>
                          </li>
                          <li>
                            <a href="#contact">Contact</a>
                          </li>
                          <li>
                            <a href="#">Pages</a>
                            <ul>
                              <li>
                                <a href="blog.html">Blog Page</a>
                              </li>
                              <li>
                                <a href="single-blog.html">Single Blog Page</a>
                              </li>
                              <li>
                                <a href="shop.html">Shop Page</a>
                              </li>
                              <li>
                                <a href="single-shop.html">Single Shop Page</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <div className="welcome-text-area font16 white">
          <div className="area-bg"></div>
          <div className="welcome-area section-padding">
            <div className="container">
              <div className="row flex-v-center">
                <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12">
                  <div className="welcome-text">
                    <h4 className="wow fadeInUp" data-wow-delay="0.3s">
                      Aplikasi Terbaik untuk Wisata Keris{" "}
                    </h4>
                    <h1 className="wow fadeInUp" data-wow-delay="0.6s">
                      Jelajahi Budaya<span> dengan Keris Tour</span>
                    </h1>
                    <p className="wow fadeInUp" data-wow-delay="0.9s">
                      Temukan keindahan dan sejarah keris dengan aplikasi Keris
                      Tour. Pelajari tentang keris dari para empu dan jelajahi
                      desa Aengtongtong.
                    </p>
                    <div
                      className="home-button mt60 xs-mt60 wow fadeInUp"
                      data-wow-delay="1.2s"
                    >
                      <a className="xs-mb20" href="#">
                        download
                      </a>
                      <a href="/login">
                        Login <i className="fa fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="welcome-layer-3 hidden-sm hidden-xs">
              <div
                className="home3-layer-1 wow fadeInRight"
                data-wow-delay="0.5s"
              >
                <img
                  src="/assets-landing-page/assets/img/screenshots/screenshot-1.png"
                  alt=""
                />
              </div>
              <div className="home3-layer-2 wow fadeInUp" data-wow-delay="1s">
                <img
                  src="/assets-landing-page/assets/img/screenshots/screenshot-2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <section className="about-area section-padding" id="about">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12">
                <div
                  className="area-image-content sm-mb50 xs-mb50 wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <img
                    src="/assets-landing-page/assets/img/about/green-about-mockup.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                <div className="area-content">
                  <h4 className="subtitle">Proses Penggunaan</h4>
                  <h3 className="wow fadeInRight" data-wow-delay="0.3s">
                    Cara Kerja Aplikasi Keris Tour
                  </h3>
                  <div
                    className="text-icon-box about-process-box wow fadeInUp mb40 hidden-md"
                    data-wow-delay="0.6s"
                  >
                    <div className="box-icon">
                      <i className="dripicons-cloud-download"></i>
                    </div>
                    <h4 className="font20">Unduh Aplikasi</h4>
                    <p>
                      Download aplikasi Keris Tour dari toko aplikasi pilihan
                      Anda dan mulai petualangan budaya Anda.
                    </p>
                  </div>
                  <div
                    className="text-icon-box about-process-box wow fadeInUp"
                    data-wow-delay="0.9s"
                  >
                    <div className="box-icon">
                      <i className="dripicons-trophy"></i>
                    </div>
                    <h4 className="font20">Jelajahi Desa Aengtong</h4>
                    <p>
                      Gunakan aplikasi untuk menjelajahi Desa Aengtongtong dan
                      belajar tentang sejarah dan pembuatan keris dari para
                      empu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="goal-area section-padding gray-bg" id="goal">
          <div className="container">
            <div className="row flex-v-center">
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <div
                  className="area-content wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <h3>Engage Your Service Automatically</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiu smod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exerce.
                  </p>
                  <ul className="features-list">
                    <li>
                      <i className="dripicons-checkmark"></i> Good Design
                      Quality
                    </li>
                    <li>
                      <i className="dripicons-checkmark"></i> Low Price
                    </li>
                    <li>
                      <i className="dripicons-checkmark"></i> User Friendly
                    </li>
                    <li>
                      <i className="dripicons-checkmark"></i> Easy Editable
                    </li>
                  </ul>
                  <a href="#" className="read-more active">
                    get started
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <div
                  className="area-image-content hidden-sm hidden-xs wow fadeInRight"
                  data-wow-delay="0.6s"
                >
                  <div className="features-screenshot-slider">
                    <div className="single-screen">
                      <img
                        src="/assets-landing-page/assets/img/screenshots/screenshot-1.png"
                        alt=""
                      />
                    </div>
                    <div className="single-screen">
                      <img
                        src="/assets-landing-page/assets/img/screenshots/screenshot-2.png"
                        alt=""
                      />
                    </div>
                    <div className="single-screen">
                      <img
                        src="/assets-landing-page/assets/img/screenshots/screenshot-3.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="process-two-area padding-100-50" id="process">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3 col-sm-12 col-xs-12">
                <div className="area-title center">
                  <h4 className="subtitle">working progress</h4>
                  <h2>How Does Applic Apps Processing Works</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div
                  className="single-process-box-two text-icon-box mb50 mt40 wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <div className="process-icon-two">
                    <i className="dripicons-lock-open"></i>
                  </div>
                  <h3>Log In First</h3>
                  <p>
                    Lorem ipsum dolor sit ameconecte ur adipisicing elit sed do
                    eiusmod tempor incididunt labore dolore magnad
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div
                  className="single-process-box-two text-icon-box mb50 mt40 wow fadeInLeft active"
                  data-wow-delay="0.6s"
                >
                  <div className="process-icon-two">
                    <i className="dripicons-pulse"></i>
                  </div>
                  <h3>Data Analysis</h3>
                  <p>
                    Lorem ipsum dolor sit ameconecte ur adipisicing elit sed do
                    eiusmod tempor incididunt labore dolore magnad
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div
                  className="single-process-box-two text-icon-box hidden-sm wow fadeInLeft mb50 mt40"
                  data-wow-delay="0.9s"
                >
                  <div className="process-icon-two">
                    <i className="dripicons-basket"></i>
                  </div>
                  <h3>Show Result</h3>
                  <p>
                    Lorem ipsum dolor sit ameconecte ur adipisicing elit sed do
                    eiusmod tempor incididunt labore dolore magnad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="video-promo-area section-padding white" id="video">
          <div className="area-bg"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-sm-12 col-xs-12">
                <div className="area-content center wow fadeInUp">
                  <div className="video-button mb40">
                    <button className="video-popup" data-video-id="7TUOI23spt0">
                      <i className="fa fa-play"></i>
                    </button>
                  </div>
                  <h3>Watch Video Presentation</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="screenshot-area fix section-padding"
          id="screenshots"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="area-content xs-center xs-mb50">
                  <h4 className="subtitle">Clean Design</h4>
                  <h3>Applic Apps Screenshot</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam quis no strud exercitation
                    ullamco laboris nisi ut aliquip exea commodo consequat.
                  </p>
                </div>
              </div>
              <div className="col-md-8 col-sm-6 col-xs-12">
                <div className="screenshot-slider">
                  <div className="single-screenshot">
                    <img
                      src="/assets-landing-page/assets/img/screenshots/screenshot-1.png"
                      alt=""
                    />
                  </div>
                  <div className="single-screenshot">
                    <img
                      src="/assets-landing-page/assets/img/screenshots/screenshot-2.png"
                      alt=""
                    />
                  </div>
                  <div className="single-screenshot">
                    <img
                      src="/assets-landing-page/assets/img/screenshots/screenshot-3.png"
                      alt=""
                    />
                  </div>
                  <div className="single-screenshot">
                    <img
                      src="/assets-landing-page/assets/img/screenshots/screenshot-1.png"
                      alt=""
                    />
                  </div>
                  <div className="single-screenshot">
                    <img
                      src="/assets-landing-page/assets/img/screenshots/screenshot-2.png"
                      alt=""
                    />
                  </div>
                  <div className="single-screenshot">
                    <img
                      src="/assets-landing-page/assets/img/screenshots/screenshot-3.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="testmonial-area section-padding gray-bg fix"
          id="process"
        >
          <div className="testmonial-layers">
            <div
              className="testmonial-layer-1"
              data-parallax='{"y": 200, "smoothness": 100}'
            >
              <img
                src="/assets-landing-page/assets/img/bg-layers/layers-1.png"
                alt=""
              />
            </div>
            <div className="testmonial-layer-2" data-parallax='{"x": 80}'>
              <img
                src="/assets-landing-page/assets/img/bg-layers/layers-2.png"
                alt=""
              />
            </div>
            <div
              className="testmonial-layer-3"
              data-parallax='{"x": -200, "smoothness": 100}'
            >
              <img
                src="/assets-landing-page/assets/img/bg-layers/layers-3.png"
                alt=""
              />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3 col-sm-12 col-xs-12">
                <div className="area-title center">
                  <h4 className="subtitle">Testmonials</h4>
                  <h2>What Our Client’s Say About Us</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="testmonial-slider">
                  <div className="single-testmonial">
                    <div className="author-content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod temporse incididunt utses labore et
                        dolore magna aliqua. Ut enim minim veniam quis.
                      </p>
                    </div>
                    <div className="author-name-and-thumb">
                      <div className="author-tumb">
                        <img
                          src="/assets-landing-page/assets/img/testmonial/author-1.png"
                          alt=""
                        />
                      </div>
                      <h4>Raidu Rossow</h4>
                      <p>Web Designer</p>
                    </div>
                  </div>
                  <div className="single-testmonial">
                    <div className="author-content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod temporse incididunt utses labore et
                        dolore magna aliqua. Ut enim minim veniam quis.
                      </p>
                    </div>
                    <div className="author-name-and-thumb">
                      <div className="author-tumb">
                        <img
                          src="/assets-landing-page/assets/img/testmonial/author-2.png"
                          alt=""
                        />
                      </div>
                      <h4>Raidu Rossow</h4>
                      <p>Web Designer</p>
                    </div>
                  </div>
                  <div className="single-testmonial">
                    <div className="author-content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod temporse incididunt utses labore et
                        dolore magna aliqua. Ut enim minim veniam quis.
                      </p>
                    </div>
                    <div className="author-name-and-thumb">
                      <div className="author-tumb">
                        <img
                          src="/assets-landing-page/assets/img/testmonial/author-3.png"
                          alt=""
                        />
                      </div>
                      <h4>Raidu Rossow</h4>
                      <p>Web Designer</p>
                    </div>
                  </div>
                  <div className="single-testmonial">
                    <div className="author-content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod temporse incididunt utses labore et
                        dolore magna aliqua. Ut enim minim veniam quis.
                      </p>
                    </div>
                    <div className="author-name-and-thumb">
                      <div className="author-tumb">
                        <img
                          src="/assets-landing-page/assets/img/testmonial/author-1.png"
                          alt=""
                        />
                      </div>
                      <h4>Raidu Rossow</h4>
                      <p>Web Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pricing-area padding-100-50" id="pricing">
          <div className="container">
            <div className="row flex-v-center">
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <div className="area-title sm-center xs-center">
                  <h4 className="subtitle">pricing plan</h4>
                  <h2>Our Latest Pricing Plan </h2>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <div className="right price-right-menu sm-mb50 xs-mb50 sm-center xs-center">
                  <ul className="price-menu">
                    <li className="active">
                      <a data-toggle="tab" href="#monthly">
                        Monthly
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#yearly">
                        Yearly
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="tab-content">
                  <div id="monthly" className="tab-pane fade in active">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="single-price mb50">
                          <div className="price-header">
                            <div className="price-thumb-hidding">
                              <img
                                src="/assets-landing-page/assets/img/icons/rocket.png"
                                alt=""
                              />
                              <div className="price-rate">
                                <span className="currency">$</span>45.99
                              </div>
                              <div className="price-title">Basic Plan</div>
                            </div>
                          </div>
                          <div className="price-details">
                            <ul>
                              <li>
                                <i className="dripicons-checkmark"></i> Push
                                Notifications
                              </li>
                              <li>
                                <i className="dripicons-checkmark"></i> Offline
                                Synchronization
                              </li>
                              <li>
                                <i className="dripicons-checkmark"></i> SQL
                                Database
                              </li>
                              <li>
                                <i className="dripicons-cross"></i> Speech &
                                Text Analytics
                              </li>
                              <li>
                                <i className="dripicons-cross"></i> 24/7 Support
                              </li>
                            </ul>
                          </div>
                          <div className="price-footer">
                            <a href="#" className="purchase-button">
                              Purchase
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-price mb50 active">
                          <div className="sale-promo">
                            popular <span>-50%</span>
                          </div>
                          <div className="price-header">
                            <div className="price-thumb-hidding">
                              <img
                                src="/assets-landing-page/assets/img/icons/desktop.png"
                                alt=""
                              />
                              <div className="price-rate">
                                <span className="currency">$</span>45.99
                              </div>
                              <div className="price-title">Standard Plan</div>
                            </div>
                          </div>
                          <div className="price-details">
                            <ul>
                              <li>
                                <i className="dripicons-checkmark"></i> Push
                                Notifications
                              </li>
                              <li>
                                <i className="dripicons-checkmark"></i> Offline
                                Synchronization
                              </li>
                              <li>
                                <i className="dripicons-checkmark"></i> SQL
                                Database
                              </li>
                              <li>
                                <i className="dripicons-checkmark"></i> Speech &
                                Text Analytics
                              </li>
                              <li>
                                <i className="dripicons-cross"></i> 24/7 Support
                              </li>
                            </ul>
                          </div>
                          <div className="price-footer">
                            <a href="#" className="purchase-button">
                              Purchase
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-price mb50">
                          <div className="price-header">
                            <div className="price-thumb-hidding">
                              <img
                                src="/assets-landing-page/assets/img/icons/witing-puzzle.png"
                                alt=""
                              />
                              <div className="price-rate">
                                <span className="currency">$</span>45.99
                              </div>
                              <div className="price-title">Premium Plan</div>
                            </div>
                          </div>
                          <div className="price-details">
                            <ul>
                              <li>
                                <i className="dripicons-checkmark"></i> Push
                                Notifications
                              </li>
                              <li>
                                <i className="dripicons-checkmark"></i> Offline
                                Synchronization
                              </li>
                              <li>
                                <i className="dripicons-checkmark"></i> SQL
                                Database
                              </li>
                              <li>
                                <i className="dripicons-checkmark"></i> Speech &
                                Text Analytics
                              </li>
                              <li>
                                <i className="dripicons-checkmark"></i> 24/7
                                Support
                              </li>
                            </ul>
                          </div>
                          <div className="price-footer">
                            <a href="#" className="purchase-button">
                              Purchase
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="yearly" className="tab-pane fade">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="single-price mb50">
                          <div className="price-header">
                            <div className="price-thumb-hidding">
                              <img
                                src="/assets-landing-page/assets/img/icons/rocket.png"
                                alt=""
                              />
                              <div className="price-rate">
                                <span className="currency">$</span>45.99
                              </div>
                              <div className="price-title">Basic Plan</div>
                            </div>
                          </div>
                          <div className="price-details">
                            <ul>
                              <li>
                                <i className="dripicons-checkmark"></i> Push
                                Notifications
                              </li>
                              <li>
                                <i className="dripicons-checkmark"></i> Offline
                                Synchronization
                              </li>
                              <li>
                                <i className="dripicons-checkmark"></i> SQL
                                Database
                              </li>
                              <li>
                                <i className="dripicons-cross"></i> Speech &
                                Text Analytics
                              </li>
                              <li>
                                <i className="dripicons-cross"></i> 24/7 Support
                              </li>
                            </ul>
                          </div>
                          <div className="price-footer">
                            <a href="#" className="purchase-button">
                              Purchase
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-price mb50">
                          <div className="sale-promo">
                            popular <span>-50%</span>
                          </div>
                          <div className="price-header">
                            <div className="price-thumb-hidding">
                              <img
                                src="/assets-landing-page/assets/img/icons/desktop.png"
                                alt=""
                              />
                              <div className="price-rate">
                                <span className="currency">$</span>45.99
                              </div>
                              <div className="price-title">Standard Plan</div>
                            </div>
                          </div>
                          <div className="price-details">
                            <ul>
                              <li>
                                <i className="dripicons-checkmark"></i> Push
                                Notifications
                              </li>
                              <li>
                                <i className="dripicons-checkmark"></i> Offline
                                Synchronization
                              </li>
                              <li>
                                <i className="dripicons-checkmark"></i> SQL
                                Database
                              </li>
                              <li>
                                <i className="dripicons-checkmark"></i> Speech &
                                Text Analytics
                              </li>
                              <li>
                                <i className="dripicons-cross"></i> 24/7 Support
                              </li>
                            </ul>
                          </div>
                          <div className="price-footer">
                            <a href="#" className="purchase-button">
                              Purchase
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-price mb50">
                          <div className="price-header">
                            <div className="price-thumb-hidding">
                              <img
                                src="/assets-landing-page/assets/img/icons/witing-puzzle.png"
                                alt=""
                              />
                              <div className="price-rate">
                                <span className="currency">$</span>45.99
                              </div>
                              <div className="price-title">Premium Plan</div>
                            </div>
                          </div>
                          <div className="price-details">
                            <ul>
                              <li>
                                <i className="dripicons-checkmark"></i> Push
                                Notifications
                              </li>
                              <li>
                                <i className="dripicons-checkmark"></i> Offline
                                Synchronization
                              </li>
                              <li>
                                <i className="dripicons-checkmark"></i> SQL
                                Database
                              </li>
                              <li>
                                <i className="dripicons-checkmark"></i> Speech &
                                Text Analytics
                              </li>
                              <li>
                                <i className="dripicons-checkmark"></i> 24/7
                                Support
                              </li>
                            </ul>
                          </div>
                          <div className="price-footer">
                            <a href="#" className="purchase-button">
                              Purchase
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faqs-area padding-top gray-bg" id="faqs">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xs-12">
                <div className="area-image-content hidden-sm hidden-xs">
                  <div
                    className="faqs-mockup-1"
                    data-parallax='{"y": 150, "smoothness": 100}'
                  >
                    <img
                      src="/assets-landing-page/assets/img/faqs/faqs-mockup.png"
                      alt=""
                    />
                  </div>
                  <div className="faqs-mockup-2">
                    <img
                      src="/assets-landing-page/assets/img/faqs/faqs-question.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xs-12">
                <div className="area-content sm-mb80 xs-mb50">
                  <h4 className="subtitle font500 alt-font uppercase">
                    ask questions
                  </h4>
                  <h2>Frequently Asked Questions</h2>
                  <div
                    className="panel-group sm-mt50 xs-mt50"
                    id="accordion-main"
                  >
                    <div className="panel panel-default active">
                      <div className="panel-heading">
                        <a
                          className="accordion-toggle"
                          data-toggle="collapse"
                          data-parent="#accordion-main"
                          href="#collapseOne"
                        >
                          <div className="panel-title">
                            <span>01</span>
                            <span>Creating The Feature Queries Manager ?</span>
                            <i className="pull-right fa fa-angle-down"></i>
                          </div>
                        </a>
                      </div>
                      <div
                        id="collapseOne"
                        className="panel-collapse collapse in"
                      >
                        <div className="panel-body">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do ei temporo incididunt ut labore et dolore
                          magna aliqua. Ut enim ad minim exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute dolor in reprehenderit in voluptate velit esse
                          cillum dolore
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <a
                          className="accordion-toggle"
                          data-toggle="collapse"
                          data-parent="#accordion-main"
                          href="#collapseTwo"
                        >
                          <div className="panel-title">
                            <span>02</span>
                            <span>Building Diverse Design Teams ?</span>
                            <i className="pull-right fa fa-angle-down"></i>
                          </div>
                        </a>
                      </div>
                      <div id="collapseTwo" className="panel-collapse collapse">
                        <div className="panel-body">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do ei temporo incididunt ut labore et dolore
                          magna aliqua. Ut enim ad minim exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute dolor in reprehenderit in voluptate velit esse
                          cillum dolore
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <a
                          className="accordion-toggle"
                          data-toggle="collapse"
                          data-parent="#accordion-main"
                          href="#collapseThree"
                        >
                          <div className="panel-title">
                            <span>03</span>
                            <span>Augmented And Virtual Reality Icon ?</span>
                            <i className="pull-right fa fa-angle-down"></i>
                          </div>
                        </a>
                      </div>
                      <div
                        id="collapseThree"
                        className="panel-collapse collapse"
                      >
                        <div className="panel-body">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do ei temporo incididunt ut labore et dolore
                          magna aliqua. Ut enim ad minim exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute dolor in reprehenderit in voluptate velit esse
                          cillum dolore
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <a
                          className="accordion-toggle"
                          data-toggle="collapse"
                          data-parent="#accordion-main"
                          href="#collapseFour"
                        >
                          <div className="panel-title">
                            <span>04</span>
                            <span>How To Create A Flat Vector ?</span>
                            <i className="pull-right fa fa-angle-down"></i>
                          </div>
                        </a>
                      </div>
                      <div
                        id="collapseFour"
                        className="panel-collapse collapse"
                      >
                        <div className="panel-body">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do ei temporo incididunt ut labore et dolore
                          magna aliqua. Ut enim ad minim exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute dolor in reprehenderit in voluptate velit esse
                          cillum dolore
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <a
                          className="accordion-toggle"
                          data-toggle="collapse"
                          data-parent="#accordion-main"
                          href="#collapseFive"
                        >
                          <div className="panel-title">
                            <span>05</span>
                            <span>How To Create A Flat Vector ?</span>
                            <i className="pull-right fa fa-angle-down"></i>
                          </div>
                        </a>
                      </div>
                      <div
                        id="collapseFive"
                        className="panel-collapse collapse"
                      >
                        <div className="panel-body">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do ei temporo incididunt ut labore et dolore
                          magna aliqua. Ut enim ad minim exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute dolor in reprehenderit in voluptate velit esse
                          cillum dolore
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <a
                          className="accordion-toggle"
                          data-toggle="collapse"
                          data-parent="#accordion-main"
                          href="#collapseSix"
                        >
                          <div className="panel-title">
                            <span>06</span>
                            <span>How To Create A Flat Vector ?</span>
                            <i className="pull-right fa fa-angle-down"></i>
                          </div>
                        </a>
                      </div>
                      <div id="collapseSix" className="panel-collapse collapse">
                        <div className="panel-body">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do ei temporo incididunt ut labore et dolore
                          magna aliqua. Ut enim ad minim exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute dolor in reprehenderit in voluptate velit esse
                          cillum dolore
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blog-area padding-100-50" id="blog">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3 col-sm-12 col-xs-12">
                <div className="area-title center">
                  <h4 className="subtitle">Blog & News</h4>
                  <h2>Our Latest News And Blogs</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                <div
                  className="single-blog-item mb50 wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <div className="post-media mb40">
                    <a href="#">
                      <img
                        src="/assets-landing-page/assets/img/blog/blog-small-thumb-1.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="blog-post-details">
                    <h3>
                      <a href="#">
                        How Improving Website Performan Can Help Save The Planet
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adies pisicing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <a href="#" className="read-more">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                <div
                  className="single-blog-item mb50 wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  <div className="post-media mb40">
                    <a href="#">
                      <img
                        src="/assets-landing-page/assets/img/blog/blog-small-thumb-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="blog-post-details">
                    <h3>
                      <a href="#">
                        Better Collaboration By Bringing Des Into The Code
                        Review Process
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adies pisicing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <a href="#" className="read-more">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-lg-4 col-sm-6 col-xs-12 hidden-md hidden-sm wow fadeInLeft"
                data-wow-delay="0.9s"
              >
                <div className="single-blog-item mb50">
                  <div className="blog-post-details">
                    <h3>
                      <a href="#">
                        Monthly Web Development Update DNS Over HTTPS,
                        Notifications
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adies pisicing
                      elit, sed do eiusmod tempor.
                    </p>
                    <a href="#" className="read-more">
                      Read More
                    </a>
                  </div>
                </div>
                <hr className="mb50" />
                <div className="single-blog-item mb50">
                  <div className="blog-post-details">
                    <h3>
                      <a href="#">
                        Everything You Need To Know Abe Transactional Email Know
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adies pisicing
                      elit, sed do eiusmod tempor.
                    </p>
                    <a href="#" className="read-more">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-area padding-100-50 gray-bg" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3 col-sm-12 col-xs-12">
                <div className="area-title center">
                  <h4 className="subtitle">Contact Us</h4>
                  <h2>Call Us Or Started To Talk With Us</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                <div className="contact-content padding50 mb50">
                  <div className="single-contact">
                    <div className="contact-icon">
                      <i className="dripicons-location"></i>
                    </div>
                    <h3>Location</h3>
                    <p>
                      123 Chalingt Gates, <br /> Supper Market New York.
                    </p>
                  </div>
                  <div className="single-contact">
                    <div className="contact-icon">
                      <i className="dripicons-mail"></i>
                    </div>
                    <h3>Contact</h3>
                    <p>support@gmail.com</p>
                    <p>infoApplic.net</p>
                  </div>
                  <div className="single-contact">
                    <div className="contact-icon">
                      <i className="dripicons-phone"></i>
                    </div>
                    <h3>Contact</h3>
                    <p>+8 123 45 678 99</p>
                    <p>+1 231 45 687 99</p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-5 col-md-offset-1 col-lg-offset-1 col-sm-12 col-xs-12">
                <div className="contact-form mb50">
                  <form
                    action="https://quomodosoft.com/html/applic/applic/process.php"
                    id="contact-form"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="form-group" id="name-field">
                          <div className="form-input">
                            <label for="form-name">Your Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="form-name"
                              name="form-name"
                              placeholder="Jhonathan Doe"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="form-group" id="email-field">
                          <div className="form-input">
                            <label for="form-email">Your Mail</label>
                            <input
                              type="email"
                              className="form-control"
                              id="form-email"
                              name="form-email"
                              placeholder="support@mail.com"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="form-group" id="phone-field">
                          <div className="form-input">
                            <label for="form-phone">Your Subject</label>
                            <input
                              type="text"
                              className="form-control"
                              id="form-phone"
                              name="form-phone"
                              placeholder="Subject.."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="form-group" id="message-field">
                          <div className="form-input">
                            <label for="form-message">Your Message</label>
                            <textarea
                              className="form-control"
                              rows="6"
                              id="form-message"
                              name="form-message"
                              placeholder="Your Your Message"
                              required
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="form-group mb0">
                          <button className="read-more active" type="submit">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <footer className="footer-area white relative ">
          <div className="area-bg"></div>
          <div className="footer-top-area section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-12 col-xs-12 sm-center xs-center sm-mb50 xs-mb50">
                  <div className="single-widgets">
                    <div className="footer-logo">
                      <a href="#">
                        <img
                          src="/assets-landing-page/assets/img/logo.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipisicing elit
                      sed do eiusm od tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <div className="footer-search-form">
                      <form action="#">
                        <input
                          type="text"
                          name="footer_search"
                          id="footer_search"
                          placeholder="Search Here."
                        />
                        <button type="submit">
                          <i className="dripicons-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-offset-1 col-md-2 col-sm-4 col-xs-12">
                  <div className="single-widgets xs-mb50">
                    <h3>Quick Links</h3>
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Project</a>
                      </li>
                      <li>
                        <a href="#">Our Team</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12">
                  <div className="single-widgets xs-mb50">
                    <h3>Other Links</h3>
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Project</a>
                      </li>
                      <li>
                        <a href="#">Our Team</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12">
                  <div className="single-widgets">
                    <h3>Newsletter</h3>
                    <p>
                      Lorem ipsum dolor sit amet consec tetur adipisicing elit
                      sed modo
                    </p>
                    <div className="footer-subscriber-form">
                      <form action="#">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="mail@example.com"
                        />
                        <button type="submit">subscribe</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-area">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                  <div className="footer-copyright text-center">
                    <p>
                      Copyright &copy;{" "}
                      <a href="http://themeforest.net/user/QuomodoTheme">
                        {" "}
                        QuomodoTheme
                      </a>{" "}
                      All Right Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer> */}

        <Helmet>
          <script src="/assets-landing-page/assets/js/vendor/jquery-1.12.4.min.js"></script>
          <script src="/assets-landing-page/assets/js/vendor/bootstrap.min.js"></script>
          <script src="/assets-landing-page/assets/js/vendor/jquery.easing.1.3.js"></script>
          <script src="/assets-landing-page/assets/js/vendor/jquery-migrate-1.2.1.min.js"></script>
          <script src="/assets-landing-page/assets/js/vendor/jquery.appear.js"></script>

          <script src="/assets-landing-page/assets/js/owl.carousel.min.js"></script>
          <script src="/assets-landing-page/assets/js/isotope.pkgd.min.js"></script>
          <script src="/assets-landing-page/assets/js/stellar.js"></script>
          <script src="/assets-landing-page/assets/js/jquery.parallax-layer-scroll.js"></script>
          <script src="/assets-landing-page/assets/js/chaffle.min.js"></script>
          <script src="/assets-landing-page/assets/js/anime.min.js"></script>
          <script src="/assets-landing-page/assets/js/jquery-modal-video.min.js"></script>
          <script src="/assets-landing-page/assets/js/venobox.min.js"></script>
          <script src="/assets-landing-page/assets/js/stellarnav.min.js"></script>
          <script src="/assets-landing-page/assets/js/jquery.sticky.js"></script>
          <script src="/assets-landing-page/assets/js/wow.min.js"></script>
          <script src="/assets-landing-page/assets/js/placeholdem.min.js"></script>
          <script src="/assets-landing-page/assets/js/odometer.min.js"></script>
          <script src="/assets-landing-page/assets/js/contact-form.js"></script>
          <script src="/assets-landing-page/assets/js/footer-reveal.min.js"></script>
          <script src="/assets-landing-page/assets/js/ResizeSensor.min.js"></script>
          <script src="/assets-landing-page/assets/js/theia-sticky-sidebar.min.js"></script>

          <script src="/assets-landing-page/assets/js/main.js"></script>
        </Helmet>
      </div>
    </>
  );
}
