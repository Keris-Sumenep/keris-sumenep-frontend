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
                          <li className="">
                            <a href="/">Home</a>
                          </li>
                          <li>
                            <a href="#about">Features</a>
                          </li>
                          <li>
                            <a href="#screenshots">MyApps</a>
                          </li>
                          <li>
                            <a href="#contact">Contact</a>
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
                      <a href="https://vtours.kerissumenep.com" target="_blank">
                        Virtual Tour <i className="fa fa-long-arrow-right"></i>
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
                    alt="TourKeris App Mockup"
                  />
                </div>
              </div>
              <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                <div className="area-content">
                  <h4 className="subtitle">Cara Kerja Aplikasi</h4>
                  <h3 className="wow fadeInRight" data-wow-delay="0.3s">
                    Bagaimana Aplikasi TourKeris Bekerja
                  </h3>
                  <div
                    className="text-icon-box about-process-box wow fadeInUp mb40 hidden-md"
                    data-wow-delay="0.6s"
                  >
                    <div className="box-icon">
                      <i className="dripicons-cloud-download"></i>
                    </div>
                    <h4 className="font20">Unduh Aplikasi TourKeris</h4>
                    <p>
                      Download aplikasi TourKeris dari toko aplikasi pilihan
                      Anda dan mulai petualangan budaya Anda di Desa
                      Aengtongtong.
                    </p>
                  </div>
                  <div
                    className="text-icon-box about-process-box wow fadeInUp mb40 hidden-md"
                    data-wow-delay="0.9s"
                  >
                    <div className="box-icon">
                      <i className="dripicons-camera"></i>
                    </div>
                    <h4 className="font20">Pindai Barcode Keris</h4>
                    <p>
                      Gunakan aplikasi untuk memindai barcode yang terdapat pada
                      setiap keris di wisata Aengtongtong.
                    </p>
                  </div>
                  <div
                    className="text-icon-box about-process-box wow fadeInUp"
                    data-wow-delay="1.2s"
                  >
                    <div className="box-icon">
                      <i className="dripicons-information"></i>
                    </div>
                    <h4 className="font20">Dapatkan Informasi Keris</h4>
                    <p>
                      Aplikasi akan memberikan penjelasan lengkap tentang keris
                      yang dipindai dalam bentuk audio dan teks dalam bahasa
                      Madura, Inggris, dan Indonesia.
                    </p>
                  </div>
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
                  <h3>Tonton Video Presentasi</h3>
                  <p>
                    Pelajari lebih lanjut tentang aplikasi TourKeris yang dapat
                    memindai barcode pada setiap keris dan memberikan informasi
                    lengkap dalam berbagai bahasa, termasuk Bahasa Madura,
                    Inggris, dan Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="screenshot-area fix section-padding gray-bg"
          id="screenshots"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="area-content xs-center xs-mb50">
                  <h4 className="subtitle">Desain Bersih</h4>
                  <h3>Tangkapan Layar Aplikasi TourKeris</h3>
                  <p>
                    Aplikasi TourKeris menawarkan antarmuka yang bersih dan
                    intuitif, memungkinkan pengguna untuk dengan mudah
                    menjelajahi dan mempelajari setiap keris di Desa
                    Aengtongtong melalui pemindaian barcode.
                  </p>
                </div>
              </div>
              <div className="col-md-8 col-sm-6 col-xs-12">
                <div className="screenshot-slider">
                  <div className="single-screenshot">
                    <img
                      src="/assets-landing-page/assets/img/screenshots/ss2.jpg"
                      alt=""
                      height={350}
                      width={350}
                    />
                  </div>
                  <div className="single-screenshot">
                    <img
                      src="/assets-landing-page/assets/img/screenshots/ss3.jpg"
                      alt=""
                      height={350}
                      width={350}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faqs-area padding-top" id="faqs">
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
                    Tanya Jawab
                  </h4>
                  <h2>Pertanyaan yang Sering Diajukan</h2>
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
                            <span>Bagaimana cara memindai barcode keris?</span>
                            <i className="pull-right fa fa-angle-down"></i>
                          </div>
                        </a>
                      </div>
                      <div
                        id="collapseOne"
                        className="panel-collapse collapse in"
                      >
                        <div className="panel-body">
                          Buka aplikasi TourKeris, arahkan kamera ponsel Anda ke
                          barcode yang ada pada keris, dan aplikasi akan secara
                          otomatis memindai dan menampilkan informasi terkait
                          keris tersebut.
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
                            <span>
                              Informasi tentang keris tersedia dalam beberapa
                              bahasa?
                            </span>
                            <i className="pull-right fa fa-angle-down"></i>
                          </div>
                        </a>
                      </div>
                      <div id="collapseTwo" className="panel-collapse collapse">
                        <div className="panel-body">
                          Informasi tentang keris tersedia dalam tiga bahasa:
                          Madura, Inggris, dan Indonesia. Anda dapat memilih
                          bahasa yang diinginkan di pengaturan aplikasi.
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
                            <span>
                              Apakah aplikasi ini menyediakan informasi dengan
                              audio?
                            </span>
                            <i className="pull-right fa fa-angle-down"></i>
                          </div>
                        </a>
                      </div>
                      <div
                        id="collapseThree"
                        className="panel-collapse collapse"
                      >
                        <div className="panel-body">
                          Ya, aplikasi TourKeris menyediakan informasi tentang
                          setiap keris dengan audio dalam bahasa yang Anda
                          pilih. Anda dapat mendengarkan penjelasan sambil
                          melihat keris.
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
                            <span>
                              Apakah saya perlu internet untuk menggunakan
                              aplikasi?
                            </span>
                            <i className="pull-right fa fa-angle-down"></i>
                          </div>
                        </a>
                      </div>
                      <div
                        id="collapseFour"
                        className="panel-collapse collapse"
                      >
                        <div className="panel-body">
                          Anda memerlukan koneksi internet untuk mengunduh
                          aplikasi dan pembaruan informasi. Namun, setelah data
                          tersimpan di aplikasi, Anda bisa menggunakan fitur
                          pemindaian barcode dan mendengarkan informasi secara
                          offline.
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
                            <span>
                              Bagaimana cara mendapatkan aplikasi TourKeris?
                            </span>
                            <i className="pull-right fa fa-angle-down"></i>
                          </div>
                        </a>
                      </div>
                      <div
                        id="collapseFive"
                        className="panel-collapse collapse"
                      >
                        <div className="panel-body">
                          Anda dapat mengunduh aplikasi TourKeris dari Google
                          Play Store untuk perangkat Android atau App Store
                          untuk perangkat iOS.
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
                            <span>
                              Apakah ada biaya untuk menggunakan aplikasi ini?
                            </span>
                            <i className="pull-right fa fa-angle-down"></i>
                          </div>
                        </a>
                      </div>
                      <div id="collapseSix" className="panel-collapse collapse">
                        <div className="panel-body">
                          Aplikasi TourKeris dapat diunduh dan digunakan secara
                          gratis.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-area padding-100-50 gray-bg " id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3 col-sm-12 col-xs-12">
                <div className="area-title center">
                  <h4 className="subtitle">Hubungi Kami</h4>
                  <h2>Hubungi Kami atau Mulai Berbicara dengan Kami</h2>
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
                    <h3>Lokasi</h3>
                    <p>
                      Duko, Aeng Tong-tong, Kec. Saronggi, Kabupaten Sumenep,
                      Jawa Timur 69467.
                    </p>
                  </div>
                  <div className="single-contact">
                    <div className="contact-icon">
                      <i className="dripicons-mail"></i>
                    </div>
                    <h3>Kontak Email</h3>
                    <p>support@tourkeris.com</p>
                    <p>info@tourkeris.com</p>
                  </div>
                  <div className="single-contact">
                    <div className="contact-icon">
                      <i className="dripicons-phone"></i>
                    </div>
                    <h3>Nomor Telepon</h3>
                    <p>+62 812 3456 7890</p>
                    <p>+62 812 9876 5432</p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-5 col-md-offset-1 col-lg-offset-1 col-sm-12 col-xs-12">
                <div className="contact-form mb50">
                  <form
                    action="https://yourwebsite.com/process.php"
                    id="contact-form"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="form-group" id="name-field">
                          <div className="form-input">
                            <label for="form-name">Nama Anda</label>
                            <input
                              type="text"
                              className="form-control"
                              id="form-name"
                              name="form-name"
                              placeholder="Nama Lengkap"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="form-group" id="email-field">
                          <div className="form-input">
                            <label for="form-email">Email Anda</label>
                            <input
                              type="email"
                              className="form-control"
                              id="form-email"
                              name="form-email"
                              placeholder="email@domain.com"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="form-group" id="subject-field">
                          <div className="form-input">
                            <label for="form-subject">Subjek</label>
                            <input
                              type="text"
                              className="form-control"
                              id="form-subject"
                              name="form-subject"
                              placeholder="Subjek Pesan"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="form-group" id="message-field">
                          <div className="form-input">
                            <label for="form-message">Pesan Anda</label>
                            <textarea
                              className="form-control"
                              rows="6"
                              id="form-message"
                              name="form-message"
                              placeholder="Tuliskan pesan Anda di sini"
                              required
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="form-group mb0">
                          <button className="read-more active" type="submit">
                            Kirim Pesan
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
