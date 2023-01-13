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
                <a class="nav-link" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#service">Service</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#team">Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#testimonial">Testimonial</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#blog">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn btn-primary btn-sm ml-lg-3" href="components.html">Components</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header class="header">
        <div class="overlay">
          <h6 class="subtitle">Small Team With Big Ideas</h6>
          <h1 class="title">Creative Studio</h1>
          <div class="buttons text-center">
            <a href="#service" class="btn btn-primary rounded w-lg btn-lg my-1">Our Service</a>
            <a href="#contact" class="btn btn-outline-light rounded w-lg btn-lg my-1">Contact Us</a>
          </div>
        </div>
      </header>
      <div class="box text-center">
        <div class="box-item">
          <i class="ti-vector"></i>
          <h6 class="box-title">UX/UI Design</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis excepturi, repellat esse laborum explicabo quia.</p>
        </div>
        <div class="box-item">
          <i class="ti-filter"></i>
          <h6 class="box-title">Web Development</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis excepturi, repellat esse laborum explicabo quia.</p>
        </div>
        <div class="box-item">
          <i class="ti-mobile"></i>
          <h6 class="box-title">App Design</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis excepturi, repellat esse laborum explicabo quia.</p>
        </div>
      </div>

      <section id="about">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-5 col-lg-4">
              <img src="imgs/about.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page" class="w-100 img-thumbnail mb-3"></img>
            </div>
            <div class="col-md-7 col-lg-8">
              <h6 class="section-subtitle mb-0">We Create</h6>
              <h6 class="section-title mb-3">Awesome Work</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente cupiditate quas, amet harum perferendis minus, cum dolorum obcaecati iste aspernatur voluptatum aut.</p>
              <p>Cum laudantium unde nemo doloribus eligendi quodarum ea vitae dicta. Accusantium vero, ea? Alias, atque libero. Id, ut harum. </p>
              <p>consectetur adipisicing elit. Omnis quidem, quos iure a dolorum illum culpa quia nemo soluta, ratione harum beatae minus doloribus consectetur! Similique tempora sunt doloribus molestias.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="has-bg-img py-md">
        <div class="container text-center">
          <h6 class="section-subtitle">We See</h6>
          <h6 class="section-title mb-6">What Other Don't See.</h6>
          <div class="widget mb-4">
            <div class="widget-item">
              <i class="ti-notepad"></i>
              <h4>Planning</h4>
            </div>
            <div class="widget-item">
              <i class="ti-layout"></i>
              <h4>Mockup</h4>
            </div>
            <div class="widget-item">
              <i class="ti-filter"></i>
              <h4>Develope</h4>
            </div>
            <div class="widget-item">
              <i class="ti-thumb-up"></i>
              <h4>Provide</h4>
            </div>
          </div>
        </div>
      </section>

      <section id="service">
        <div class="container">
          <h6 class="section-subtitle text-center">Makes Happen</h6>
          <h5 class="section-title text-center mb-6">Our Service</h5>
          <div class="row">
            <div class="col-sm-4 col-md-3">
              <div class="card mb-4">
                <div class="card-body">
                  <h2 class="mb-4"><i class="ti-filter text-primary"></i></h2>
                  <h6 class="card-title">corporis assumenda</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-md-3">
              <div class="card mb-4">
                <div class="card-body">
                  <h2 class="mb-4"><i class="ti-paint-roller text-primary"></i></h2>
                  <h6 class="card-title">Debitis amet</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-md-3">
              <div class="card mb-4">
                <div class="card-body">
                  <h2 class="mb-4"><i class="ti-ruler-pencil text-primary"></i></h2>
                  <h6 class="card-title">Libero temporibus</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-md-3">
              <div class="card mb-4">
                <div class="card-body">
                  <h2 class="mb-4"><i class="ti-layers text-primary"></i></h2>
                  <h6 class="card-title">Perspiciatis explicabo</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-md-3">
              <div class="card mb-4">
                <div class="card-body">
                  <h2 class="mb-4"><i class="ti-bolt text-primary"></i></h2>
                  <h6 class="card-title">Poluptatum</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-md-3">
              <div class="card mb-4">
                <div class="card-body">
                  <h2 class="mb-4"><i class="ti-palette text-primary"></i></h2>
                  <h6 class="card-title">Nihil dicta</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-md-3">
              <div class="card mb-4">
                <div class="card-body">
                  <h2 class="mb-4"><i class="ti-stats-up text-primary"></i></h2>
                  <h6 class="card-title">Repellendus maxime</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-md-3">
              <div class="card mb-4">
                <div class="card-body">
                  <h2 class="mb-4"><i class="ti-location-arrow text-primary"></i></h2>
                  <h6 class="card-title">Sint vitae</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="portfolio">
        <div class="container text-center">
          <h6 class="section-subtitle">Our Awesome Works</h6>
          <h6 class="section-title mb-5">Our Portfolio</h6>
          <div class="row">
            <div class="col-sm-4">
              <div class="img-wrapper">
                <img src="imgs/folio-1.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"></img>
                <div class="overlay">
                  <div class="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                    <a href="javascript:void(0)"><i class="ti-link"></i></a>
                  </div>
                </div>
              </div>
              <div class="img-wrapper">
                <img src="imgs/folio-2.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"></img>
                <div class="overlay">
                  <div class="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                    <a href="javascript:void(0)"><i class="ti-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="img-wrapper">
                <img src="imgs/folio-3.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"></img>
                <div class="overlay">
                  <div class="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                    <a href="javascript:void(0)"><i class="ti-link"></i></a>
                  </div>
                </div>
              </div>
              <div class="img-wrapper">
                <img src="imgs/folio-4.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"></img>
                <div class="overlay">
                  <div class="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                    <a href="javascript:void(0)"><i class="ti-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="img-wrapper">
                <img src="imgs/folio-5.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"></img>
                <div class="overlay">
                  <div class="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                    <a href="javascript:void(0)"><i class="ti-link"></i></a>
                  </div>
                </div>
              </div>
              <div class="img-wrapper">
                <img src="imgs/folio-6.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"></img>
                <div class="overlay">
                  <div class="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                    <a href="javascript:void(0)"><i class="ti-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team">
        <div class="container">
          <h6 class="section-subtitle text-center">Meet With</h6>
          <h6 class="section-title mb-5 text-center">Our Angels</h6>
          <div class="row">
            <div class="col-sm-6 col-md-4">
              <div class="card text-center mb-4">
                <img class="card-img-top inset" src="imgs/avatar.jpg"></img>
                <div class="card-body">
                  <h6 class="small text-primary font-weight-bold">FOUNDER</h6>
                  <h5 class="card-title">Matthew Davis</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.</p>
                  <div class="socials">
                    <a href="javascript:void(0)"><i class="ti-facebook"></i> </a>
                    <a href="javascript:void(0)"><i class="ti-github"></i></a>
                    <a href="javascript:void(0)"><i class="ti-dropbox"></i></a>
                    <a href="javascript:void(0)"><i class="ti-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="card text-center mb-4">
                <img class="card-img-top inset" src="imgs/avatar-1.jpg"></img>
                <div class="card-body">
                  <h6 class="small text-primary font-weight-bold">CEO</h6>
                  <h5 class="card-title">Barbara Ross</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.</p>
                  <div class="socials">
                    <a href="javascript:void(0)"><i class="ti-facebook"></i> </a>
                    <a href="javascript:void(0)"><i class="ti-github"></i></a>
                    <a href="javascript:void(0)"><i class="ti-dropbox"></i></a>
                    <a href="javascript:void(0)"><i class="ti-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="card text-center mb-4">
                <img class="card-img-top inset" src="imgs/avatar-2.jpg"></img>
                <div class="card-body">
                  <h6 class="small text-primary font-weight-bold">Designer</h6>
                  <h5 class="card-title">Karen Perry</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.</p>
                  <div class="socials">
                    <a href="javascript:void(0)"><i class="ti-facebook"></i> </a>
                    <a href="javascript:void(0)"><i class="ti-github"></i></a>
                    <a href="javascript:void(0)"><i class="ti-dropbox"></i></a>
                    <a href="javascript:void(0)"><i class="ti-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="card text-center mb-4">
                <img class="card-img-top inset" src="imgs/avatar-3.jpg"></img>
                <div class="card-body">
                  <h6 class="small text-primary font-weight-bold">App Designer</h6>
                  <h5 class="card-title">Ashley Diaz</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.</p>
                  <div class="socials">
                    <a href="javascript:void(0)"><i class="ti-facebook"></i> </a>
                    <a href="javascript:void(0)"><i class="ti-github"></i></a>
                    <a href="javascript:void(0)"><i class="ti-dropbox"></i></a>
                    <a href="javascript:void(0)"><i class="ti-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="card text-center mb-4">
                <img class="card-img-top inset" src="imgs/avatar-4.jpg"></img>
                <div class="card-body">
                  <h6 class="small text-primary font-weight-bold">Developer</h6>
                  <h5 class="card-title">Edward Harris</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.</p>
                  <div class="socials">
                    <a href="javascript:void(0)"><i class="ti-facebook"></i> </a>
                    <a href="javascript:void(0)"><i class="ti-github"></i></a>
                    <a href="javascript:void(0)"><i class="ti-dropbox"></i></a>
                    <a href="javascript:void(0)"><i class="ti-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="card text-center mb-4">
                <img class="card-img-top inset" src="imgs/avatar-5.jpg"></img>
                <div class="card-body">
                  <h6 class="small text-primary font-weight-bold">photographer</h6>
                  <h5 class="card-title">Brian Scott</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.</p>
                  <div class="socials">
                    <a href="javascript:void(0)"><i class="ti-facebook"></i> </a>
                    <a href="javascript:void(0)"><i class="ti-github"></i></a>
                    <a href="javascript:void(0)"><i class="ti-dropbox"></i></a>
                    <a href="javascript:void(0)"><i class="ti-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="has-bg-img bg-img-2">
        <div class="container text-center">
          <h6 class="section-subtitle">We Are Awesome</h6>
          <h6 class="section-title mb-6">Some Fun Fucts</h6>
          <div class="widget-2">
            <div class="widget-item">
              <i class="ti-cup"></i>
              <h6 class="title">100+</h6>
              <div class="subtitle">Awards Won</div>
            </div>
            <div class="widget-item">
              <i class="ti-face-smile"></i>
              <h6 class="title">100+</h6>
              <div class="subtitle">Happy Clients</div>
            </div>
            <div class="widget-item">
              <i class="ti-blackboard"></i>
              <h6 class="title">845+</h6>
              <div class="subtitle">Project Completed</div>
            </div>
            <div class="widget-item">
              <i class="ti-comments-smiley"></i>
              <h6 class="title">15K+</h6>
              <div class="subtitle">Comments</div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial">
        <div class="container">
          <h6 class="section-subtitle text-center">Testimonial</h6>
          <h6 class="section-title text-center mb-6">What Our Clients Says</h6>
          <div class="row">
            <div class="col-md-6">
              <div class="testimonial-wrapper">
                <div class="img-holder">
                  <img src="imgs/avatar-5.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"></img>
                </div>
                <div class="body">
                  <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.</p>
                  <h6 class="title">Richard Reb</h6>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="testimonial-wrapper">
                <div class="img-holder">
                  <img src="imgs/avatar-6.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"></img>
                </div>
                <div class="body">
                  <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.</p>
                  <h6 class="title">John Doe</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="has-bg-img py-lg">
        <div class="container text-center">
          <button type="button" class="btn btn-outline-primary play-control" data-toggle="modal" data-target="#exampleModalCenter">
            <i class="ti-control-play" ></i>
          </button>
          <h6 class="section-title mt-4">See Our Intro Video</h6>
        </div>
      </section>

      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div class="modal-content">
            <iframe width="100%" height="475" src="https://www.youtube.com/embed/TP4THzsAa3M" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <section id="blog">
        <div class="container">
          <h6 class="section-subtitle text-center">News Feeds</h6>
          <h6 class="section-title mb-6 text-center">Our Blog</h6>

          <div class="row">
            <div class="col-md-4">
              <div class="card blog-post my-4 my-sm-5 my-md-0">
                <img src="imgs/blog-1.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"></img>
                <div class="card-body">
                  <div class="details mb-3">
                    <a href="javascript:void(0)"><i class="ti-comments"></i> 123</a>
                    <a href="javascript:void(0)"><i class="ti-eye"></i> 123</a>
                  </div>
                  <h5 class="card-title">Possimus aliquam veniam</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae laudantium dolor nisi obcaecati, non laboriosam asperiores doloremque tempora repellendus iure!</p>
                  <a href="javascript:void(0)" class="d-block mt-3">Read More...</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card blog-post my-4 my-sm-5 my-md-0">
                <img src="imgs/blog-2.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"></img>
                <div class="card-body">
                  <div class="details mb-3">
                    <a href="javascript:void(0)"><i class="ti-comments"></i> 434</a>
                    <a href="javascript:void(0)"><i class="ti-eye"></i> 987</a>
                  </div>
                  <h5 class="card-title">Repudiandae laudantium</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae laudantium dolor nisi obcaecati, non laboriosam asperiores doloremque tempora repellendus iure!</p>
                  <a href="javascript:void(0)" class="d-block mt-3">Read More...</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card blog-post my-4 my-sm-5 my-md-0">
                <img src="imgs/blog-3.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"></img>
                <div class="card-body">
                  <div class="details mb-3">
                    <a href="javascript:void(0)"><i class="ti-comments"></i> 164</a>
                    <a href="javascript:void(0)"><i class="ti-eye"></i> 425</a>
                  </div>
                  <h5 class="card-title">Laboriosam asperiores</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae laudantium dolor nisi obcaecati, non laboriosam asperiores doloremque tempora repellendus iure!</p>
                  <a href="javascript:void(0)" class="d-block mt-3">Read More...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div class="container">
          <div class="contact-card">
            <div class="infos">
              <h6 class="section-subtitle">Get Here</h6>
              <h6 class="section-title mb-4">Contact Us</h6>

              <div class="item">
                <i class="ti-location-pin"></i>
                <div class="">
                  <h5>Location</h5>
                  <p> 12345 Fake ST NoWhere AB Country</p>
                </div>
              </div>
              <div class="item">
                <i class="ti-mobile"></i>
                <div>
                  <h5>Phone Number</h5>
                  <p>(123) 456-7890</p>
                </div>
              </div>
              <div class="item">
                <i class="ti-email"></i>
                <div class="mb-0">
                  <h5>Email Address</h5>
                  <p>info@website.com</p>
                </div>
              </div>
              <div class="item">
                <i class="ti-world"></i>
                <div class="mb-0">
                  <h5>example.com</h5>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
            <div class="form">
              <h6 class="section-subtitle">Available 24/7</h6>
              <h6 class="section-title mb-4">Get In Touch</h6>
              <form>
                <div class="form-group">
                  <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required></input>
                </div>
                <div class="form-group">
                  <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" required></input>
                </div>
                <div class="form-group">
                  <textarea name="contact-message" id="" cols="30" rows="7" class="form-control form-control-lg" placeholder="Message"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-block btn-lg mt-3">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="has-bg-img py-0">
        <div class="container">
          <div class="footer">
            <div class="footer-lists">
              <ul class="list">
                <li class="list-head">
                  <h6 class="font-weight-bold">ABOUT US</h6>
                </li>
                <li class="list-body">
                  <a href="#" class="logo">
                    <img src="imgs/logo.png" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"></img>
                      <h6>Creative Studio</h6>
                  </a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae nobis fugit maxime deleniti minus optio accusamus, quam maiores explicabo sunt.</p>
                  <p class="mt-3">
                    Copyright <script>document.write(new Date().getFullYear())</script> &copy; <a class="d-inline text-primary" href="http://www.devcrud.com">DevCRUD</a>
                  </p>
                </li>
              </ul>
              <ul class="list">
                <li class="list-head">
                  <h6 class="font-weight-bold">USEFUL LINKS</h6>
                </li>
                <li class="list-body">
                  <div class="row">
                    <div class="col">
                      <a href="#about">About</a>
                      <a href="#service">Service</a>
                      <a href="#portfolio">Portfolio</a>
                      <a href="#testmonail">Testimonial</a>
                    </div>
                    <div class="col">
                      <a href="#team">Team</a>
                      <a href="#blog">Blog</a>
                      <a href="#">Faq</a>
                      <a href="#">Privacy Policy</a>
                    </div>
                  </div>
                </li>
              </ul>
              <ul class="list">
                <li class="list-head">
                  <h6 class="font-weight-bold">CONTACT INFO</h6>
                </li>
                <li class="list-body">
                  <p>Contact us and we'll get back to you within 24 hours.</p>
                  <p><i class="ti-location-pin"></i> 12345 Fake ST NoWhere AB Country</p>
                  <p><i class="ti-email"></i>  info@website.com</p>
                  <div class="social-links">
                    <a href="javascript:void(0)" class="link"><i class="ti-facebook"></i></a>
                    <a href="javascript:void(0)" class="link"><i class="ti-twitter-alt"></i></a>
                    <a href="javascript:void(0)" class="link"><i class="ti-google"></i></a>
                    <a href="javascript:void(0)" class="link"><i class="ti-pinterest-alt"></i></a>
                    <a href="javascript:void(0)" class="link"><i class="ti-instagram"></i></a>
                    <a href="javascript:void(0)" class="link"><i class="ti-rss"></i></a>
                  </div>
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
