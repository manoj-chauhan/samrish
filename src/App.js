import './styles/creative-studio.scss';

function App() {
  return (
    <div data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
      <nav class="navbar custom-navbar navbar-expand-lg navbar-dark" data-spy="affix" data-offset-top="20">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="imgs/logo.png" alt="Logo"></img>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#service">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header class="header">
        <div class="overlay">
          <h6 class="subtitle">Be part of our journey</h6>
          <h1 class="title">We are Hiring...</h1>
          <div class="buttons text-center">
            <a href="#service" class="btn btn-primary rounded w-lg btn-lg my-1">Our Service</a>
            <a href="#contact" class="btn btn-outline-light rounded w-lg btn-lg my-1">Contact Us</a>
          </div>
        </div>
      </header>
      <div class="box text-center">
        <div class="box-item">
          <i class="ti-vector"></i>
          <h6 class="box-title">Technology</h6>
          <p>We use technology as a tool to build solutions which can be used to run business with efficency</p>
        </div>
        <div class="box-item">
          <i class="ti-filter"></i>
          <h6 class="box-title">Innovation</h6>
          <p>We believe in pushing our limits to bring best solution to reality.</p>
        </div>
        <div class="box-item">
          <i class="ti-mobile"></i>
          <h6 class="box-title">Business</h6>
          <p>We believe in generating values from the work we do.</p>
        </div>
      </div>

      <section id="about">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-5 col-lg-4">
              <img src="imgs/about.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page" class="w-100 img-thumbnail mb-3"></img>
            </div>
            <div class="col-md-7 col-lg-8">
              <h6 class="section-subtitle mb-0">What we aim?</h6>
              <h6 class="section-title mb-3">Our Mission</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente cupiditate quas, amet harum perferendis minus, cum dolorum obcaecati iste aspernatur voluptatum aut.</p>
              <p>Cum laudantium unde nemo doloribus eligendi quodarum ea vitae dicta. Accusantium vero, ea? Alias, atque libero. Id, ut harum. </p>
              <p>consectetur adipisicing elit. Omnis quidem, quos iure a dolorum illum culpa quia nemo soluta, ratione harum beatae minus doloribus consectetur! Similique tempora sunt doloribus molestias.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="service">
        <div class="container">
          <h6 class="section-subtitle text-center">What we offer?</h6>
          <h5 class="section-title text-center mb-6">Our Services</h5>
          <div class="row">
            <div class="col-sm-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h2 class="mb-4"><i class="ti-filter text-primary"></i></h2>
                  <h6 class="card-title">Trip Planning</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h2 class="mb-4"><i class="ti-paint-roller text-primary"></i></h2>
                  <h6 class="card-title">Trip Management</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h2 class="mb-4"><i class="ti-ruler-pencil text-primary"></i></h2>
                  <h6 class="card-title">Trip Tracking</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div class="modal-content">
            <iframe width="100%" height="475" src="https://www.youtube.com/embed/TP4THzsAa3M" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <section id="contact">
        <div class="container">
          <div class="contact-card">
            <div class="infos">
              <h6 class="section-subtitle">How to reach out?</h6>
              <h6 class="section-title mb-4">Contact Us</h6>
              <div class="contact-details">
                <div class="item">
                  <i class="ti-location-pin"></i>
                  <div class="">
                    <h5>Address</h5>
                    <p> D 59/2 Swaroop Nagar, Delhi,<br /> Pincode 110042</p>
                  </div>
                </div>
                <div class="item">
                  <i class="ti-mobile"></i>
                  <div>
                    <h5>Phone Number</h5>
                    <p>+91-9899547045</p>
                  </div>
                </div>
                <div class="item">
                  <i class="ti-email"></i>
                  <div class="mb-0">
                    <h5>Email Address</h5>
                    <p>info@samrish.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer  */}
      <section class="has-bg-img py-0">
        <div class="container">
          <div class="footer">
            <div class="footer-lists">
              <ul class="list">
                <li class="list-body">
                  <p class="mt-3">
                    Copyright &copy; 2023  - Samrish Private Limited. All Rights Reserved.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default App;
