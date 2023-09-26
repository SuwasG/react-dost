// import React from 'react'

// const Try = () => {
//   return (
//     <>

// <>
//   <meta charSet="UTF-8" />
//   <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//   <meta
//     name="viewport"
//     content="width=device-width, initial-scale=1.0 shrink-to-fit=no"
//   />
//   <link rel="shortcut icon" href="images/a-himalayan.png" type="image/x-icon" />
//   <title>Homepage</title>
//   {/* bootstrap-css */}
//   <link rel="stylesheet" href="assets/css/bootstrap.css" />
//   {/* bootstrap icons */}
//   <link
//     rel="stylesheet"
//     href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
//   />
//   {/* custom-css */}
//   <link rel="stylesheet" href="style.css" />
//   {/* fontawesome cdjns link */}
//   <link
//     rel="stylesheet"
//     href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
//     integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
//     crossOrigin="anonymous"
//     referrerPolicy="no-referrer"
//   />
//   {/* box-icons */}
//   <link
//     href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
//     rel="stylesheet"
//   />
//   {/* splide-css */}
//   <link
//     rel="stylesheet"
//     href="https://cdn.jsdelivr.net/npm/@splidejs/splide@3.6.12/dist/css/splide.min.css"
//   />
//   <div className="container-fluid custom-header d-none d-lg-block ">
//     <div className="row d-flex align-items-center">
//       {/* Logo */}
//       <div className="col-sm-2">
//         <img src="images/a-himalayan.png" alt="" width={100} />
//       </div>
//       {/* contact */}
//       <div className="col-sm-2 mb-2">
//         <a href="tel:9741716087" className="text-decoration-none text-white">
//           <i className="bx bxs-phone-call fs-5"> </i>
//           <span className="display-none display-md-inline-block">
//             +977 9741716087
//           </span>
//         </a>
//       </div>
//       {/* email */}
//       <div className="col-sm-3 mb-2">
//         <a
//           href="mailto:suwasghale2281@gmail.com"
//           className="text-decoration-none text-white  d-flex align-items-center"
//         >
//           <i className="bx bxs-envelope fs-5"> </i>
//           <span className="display-none display-md-inline-block">
//             himalayantravels2023@gmail.com
//           </span>
//         </a>
//       </div>
//       {/* search-bar-top */}
//       <div className=" col-sm-4 mb-2">
//         <form action="" className="inline-form d-flex me-2">
//           <input
//             type="search"
//             name="search"
//             id="search"
//             placeholder="search here"
//             className="form-control"
//           />
//           <button type="button" className="btn btn-info text-white mx-2">
//             <i className="bx bx-search" />
//           </button>
//         </form>
//       </div>
//       {/* login */}
//       <div className="col-sm-1">
//         <div className="row d-flex">
//           <div className="col-6">
//             <a
//               href="loginboot.html"
//               className="text-white text-decoration-none"
//             >
//               <i className="bx bxs-user-plus fs-4" />
//             </a>
//           </div>
//           {/* cart */}
//           <div className="col-6 ">
//             <a href="#" className="text-white text-decoration-none">
//               <i className="bx bxs-cart-add fs-4"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* start of navigation bar*/}
//   <nav className="navbar navbar-expand-lg  sticky-top ps-2 ">
//     <a
//       className="navbar-brand  scroll-icon d-none d-lg-block "
//       href="index.html"
//     >
//       α-Himalayan Travels
//     </a>
//     <img
//       src="images/a-himalayan.png"
//       alt=""
//       width="100px"
//       className="d-block d-lg-none"
//     />{" "}
//     {/*display-block upto md*/}
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarNavDropdown"
//       aria-controls="navbarNavDropdown"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse me-5 " id="navbarNavDropdown">
//       <ul className="navbar-nav ">
//         <li className="nav-item">
//           <a
//             className="nav-link active-nav"
//             aria-current="page"
//             href="index.html"
//           >
//             Home
//           </a>
//         </li>
//         <li className="nav-item dropdown">
//           <a
//             className="nav-link dropdown-toggle"
//             data-bs-toggle="dropdown"
//             role="button"
//             aria-expanded="false"
//             href="about_company_info.html"
//           >
//             About Us
//           </a>
//           <ul className="dropdown-menu dropdown-menu-md-center">
//             <li>
//               <a href="about_company_info.html" className="dropdown-item">
//                 Company Info
//               </a>
//             </li>
//             <li>
//               <a href="about_our_team.html" className="dropdown-item">
//                 Team Members
//               </a>
//             </li>
//             <li></li>
//             <li>
//               <a href="payments.html" className="dropdown-item">
//                 Payment Methods
//               </a>
//             </li>
//             <li>
//               <a href="terms.html" className="dropdown-item">
//                 Terms and Conditions
//               </a>
//             </li>
//             <li>
//               <hr className="dropdown-divider" />
//             </li>
//             <li>
//               <a href="documents.html" className="dropdown-item">
//                 Documents
//                 <span className="badge bg-primary rounded-pill">New</span>
//               </a>
//             </li>
//           </ul>
//         </li>
//         <li className="nav-item dropdown">
//           <a
//             className="nav-link dropdown-toggle"
//             href="filterpackages.html"
//             role="button"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             Packages
//           </a>
//           <ul className="dropdown-menu">
//             <li>
//               <a className="dropdown-item" href="domestic.html">
//                 Domestic Packages
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="internation.html">
//                 International Packages
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="filterpackages.html">
//                 Most Popular Packages
//               </a>
//             </li>
//           </ul>
//         </li>
//         <li className="nav-item dropdown">
//           <a
//             href="#"
//             className="nav-link dropdown-toggle"
//             role="button"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             Our Services
//           </a>
//           <ul className="dropdown-menu">
//             <li>
//               <a href="trekking.html" className="dropdown-item">
//                 Trekking and Tour
//               </a>
//             </li>
//             <li>
//               <a href="flight_book.html" className="dropdown-item">
//                 Flight Booking
//               </a>
//             </li>
//             <li>
//               <a href="hotel_book.html" className="dropdown-item">
//                 Hotel Reservation
//               </a>
//             </li>
//             <li>
//               <a href="filteradventure.html" className="dropdown-item">
//                 Adventurous Activities
//               </a>
//             </li>
//             <li>
//               <a href="vehicle.html" className="dropdown-item">
//                 Vehicle Rent
//               </a>
//             </li>
//             <li>
//               <a href="shop.html" className="dropdown-item">
//                 Traveller Shop
//               </a>
//             </li>
//             <li>
//               <a href="currency.html" className="dropdown-item">
//                 Currency Exchange
//               </a>
//             </li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a href="offersribbon.html" className="nav-link">
//             Offers
//           </a>
//         </li>
//         <li className="nav-item">
//           <a href="filteradventure.html" className="nav-link">
//             Adventurous Activities
//           </a>
//         </li>
//         <li className="nav-item">
//           <a href="blog.html" className="nav-link">
//             Blog
//           </a>
//         </li>
//         <li className="nav-item booking-nav">
//           <a
//             className="nav-link dropdown-item  text-white book-now"
//             href="booknow2.html"
//           >
//             Book Now
//           </a>
//         </li>
//       </ul>
//       {/*Contents show upto md but not from lg */}
//       <div className="row d-flex align-items-center d-block d-lg-none ">
//         <div className="col-1 pe-sm-2">
//           <a href="loginboot.html" className="text-white text-decoration-none">
//             <i className="bx bxs-user-plus fs-4" />
//           </a>
//         </div>
//         <div className="col-1 pe-sm-2">
//           <a href="#" className="text-white text-decoration-none">
//             <i className="bx bxs-cart-add fs-4"></i>
//           </a>
//         </div>
//         <div className="col-1 pe-sm-2">
//           <a
//             href="mailto:suwasghale2281@gmail.com"
//             className="text-decoration-none text-white align-items-center"
//           >
//             <i className="bx bxs-envelope fs-5"> </i>
//             <span className="display-none display-md-inline-block" />
//           </a>
//         </div>
//         <div className="col-1 me-sm-2">
//           <a href="tel:9741716087" className="text-decoration-none text-white">
//             <i className="bx bxs-phone-call fs-5"> </i>
//             <span className="display-none display-md-inline-block" />
//           </a>
//         </div>
//         <div className=" col-8 col-sm-7">
//           <form action="" className="inline-form d-flex ">
//             <input
//               type="search"
//               name="search"
//               id="search"
//               placeholder="search here"
//               className="form-control me-2"
//             />
//             <button type="button" className="btn btn-primary text-white ">
//               <i className="bx bx-search" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>{" "}
//     {/*navbar-collapse ko closing div*/}
//   </nav>
//   {/* end of navigation bar */}
//   {/* start of carousels */}
//   <div
//     id="carouselExampleAutoplaying"
//     className="carousel slide position-relative "
//     data-bs-ride="carousel"
//   >
//     <div className="carousel-inner">
//       <div className="carousel-item active ">
//         <img
//           src="images/canvaresize1.png"
//           className="d-block w-100"
//           alt="boudhanath-nepal"
//         />
//         <div className="carousel-caption"></div>
//       </div>
//       <div className="carousel-item ">
//         <img
//           src="images/flight2.png"
//           className="d-block w-100"
//           alt="aeroplane"
//         />
//         <div className="carousel-caption d-block d-lg-none mt-5">
//           <a
//             href="booknow2.html"
//             className="text-decoration-none btn btn-info px-3 py-1 rounded-2"
//           >
//             Book Now
//           </a>
//         </div>
//       </div>
//       <div className="carousel-item ">
//         <img src="images/ps3.png" className="d-block w-100" alt="nature" />
//       </div>
//       <div className="carousel-item ">
//         <img
//           src="images/canvaresize2.png"
//           className="d-block w-100"
//           alt="resized-image"
//         />
//       </div>
//       <div className="carousel-item">
//         <img src="images/ps2.png" className="d-block w-100" alt="ps-2" />
//       </div>
//       <div className="carousel-item">
//         <img src="images/ps4.png" className="d-block w-100" alt="ps-4" />
//       </div>
//     </div>
//     <button
//       className="carousel-control-prev"
//       type="button"
//       data-bs-target="#carouselExampleAutoplaying"
//       data-bs-slide="prev"
//     >
//       <span className="carousel-control-prev-icon" aria-hidden="true" />
//       <span className="visually-hidden">Previous</span>
//     </button>
//     <button
//       className="carousel-control-next"
//       type="button"
//       data-bs-target="#carouselExampleAutoplaying"
//       data-bs-slide="next"
//     >
//       <span className="carousel-control-next-icon" aria-hidden="true" />
//       <span className="visually-hidden">Next</span>
//     </button>
//     {/* end of caurosels*/}
//     {/* hero of landing page */}
//     <div
//       className="container mb-5 d-none d-md-block try-1 mt-xl-4 mt-lg-1 mt-0"
//       id="hero"
//     >
//       <h2 className="text-center  fw-bold  mt-lg-4 mt-md-5 text-danger me-md-5 text-center">
//         Feel the <span className="text-white">Magic of</span>{" "}
//         <span className="text-primary">Travel</span>
//         <span className="text-white">With Us</span>
//       </h2>
//       <p className=" ms-xl-1 mb-lg-2 hero-para  py-1 px-1 text-md-center text-black">
//         We make your holidays memorable and amazing.
//       </p>
//       <div className="main-services">
//         <div className="row d-flex align-items-center mb-lg-3 mb-0 mt-sm-1 mt-lg-4 mt-0 ">
//           <div className=" col-2 btn btn-dark fw-bold me-2 ms-3">
//             <i className="bx bxs-plane-alt" />
//             Flights
//           </div>
//           <div className="col-2 btn btn-primary fw-bold me-2">
//             <i className="bx bxs-building-house" />
//             Hotels
//           </div>
//           <div className="col-2 btn btn-primary fw-bold me-2">
//             <i className="bx bxs-map" />
//             Treks
//           </div>
//           <div className="col-2 btn btn-primary fw-bold ">
//             <i className="bx bxs-shopping-bag" />
//             Shop
//           </div>
//         </div>
//       </div>
//       {/* <div class="book-gara">
//   <div class="col-4 offset-4  d-block d-lg-none">
//     <label for="submit" class="form-label text-black mb-1 mb-lg-4"></label>
//     <a href="booknow2.html" class="text-decoration-none">
//       <input type="submit" value="Book Now"
//         class="form-control inp-height inp-width bg-danger border-1 text-white">
//     </a>

//   </div>
// </div> */}
//       <div className="book-form rounded-2 d-none d-xl-block">
//         <div className="p-3  mb-5">
//           <div className="d-flex align-items-center">
//             <div className="form-check mx-2">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="flexRadioDefault"
//                 id="flexRadioDefault1"
//               />
//               <label className="form-check-label" htmlFor="flexRadioDefault1">
//                 Return
//               </label>
//             </div>
//             <div className="form-check mx-2">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="flexRadioDefault"
//                 id="flexRadioDefault2"
//                 defaultChecked=""
//               />
//               <label className="form-check-label" htmlFor="flexRadioDefault2">
//                 One Way
//               </label>
//             </div>
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="flexRadioDefault"
//                 id="flexRadioDefault2"
//                 defaultChecked=""
//               />
//               <label className="form-check-label" htmlFor="flexRadioDefault2">
//                 Multi-city
//               </label>
//             </div>
//           </div>
//           <div className=" row d-flex align-tems-center py-2 ">
//             <div className="col-2">
//               <label htmlFor="fromDataList" className="form-label fw-bold">
//                 From
//               </label>
//               <input
//                 className="form-control inp-height inp-width"
//                 list="datalistOptionsFrom"
//                 id="fromDataList"
//                 placeholder="Airport or City"
//               />
//               <datalist id="datalistOptionsFrom">
//                 <option value="Switzerland"></option>
//                 <option value="Hong Kong"></option>
//                 <option value="Thailand"></option>
//                 <option value="Australia"></option>
//                 <option value="London"></option>
//                 <option value="Singapore"></option>
//                 <option value="New Delhi"></option>
//                 <option value="Dubai"></option>
//                 <option value="Japan"></option>
//                 <option value="Korea"></option>
//                 <option value="China"></option>
//               </datalist>
//             </div>
//             <div className="col-2">
//               <label htmlFor="toDataList" className="form-label fw-bold">
//                 To
//               </label>
//               <input
//                 className="form-control inp-height inp-width"
//                 list="datalistOptionsTo"
//                 id="toDataList"
//                 placeholder="Airport or City"
//               />
//               <datalist id="datalistOptionsTo">
//                 <option value="Switzerland"></option>
//                 <option value="Hong Kong"></option>
//                 <option value="Thailand"></option>
//                 <option value="Australia"></option>
//                 <option value="Nepal"></option>
//                 <option value="Kathmandu"></option>
//                 <option value="Everest"></option>
//                 <option value="Birgunj"></option>
//                 <option value="Bhairahawa"></option>
//                 <option value="Pokhara"></option>
//                 <option value="Chitwan"></option>
//               </datalist>
//             </div>
//             <div className="col-2">
//               <label htmlFor="" className="form-label fw-bold">
//                 Check In
//               </label>
//               <input
//                 type="date"
//                 name=""
//                 id=""
//                 className="form-control inp-height inp-width"
//               />
//             </div>
//             <div className="col-2">
//               <label htmlFor="" className="form-label fw-bold">
//                 Check Out
//               </label>
//               <input
//                 type="date"
//                 name=""
//                 id=""
//                 className="form-control inp-height inp-width"
//               />
//             </div>
//             <div className="col-2">
//               <label htmlFor="" className="form-label fw-bold">
//                 Cabin Class:
//               </label>
//               <select
//                 className="form-select inp-height inp-width"
//                 aria-label="Default select example"
//               >
//                 <option selected="">Cabin Class: </option>
//                 <option value={1}>Premium</option>
//                 <option value={2}>Standard</option>
//                 <option value={3}>Deluxe</option>
//                 <option value={4}>Normal</option>
//               </select>
//             </div>
//             <div className="col-2">
//               <label
//                 htmlFor="submit"
//                 className="form-label hiding text-black mb-4"
//               />
//               <a
//                 href="mailto:suwasghale2281@gmail.com"
//                 className="text-decoration-none"
//               >
//                 <input
//                   type="submit"
//                   defaultValue="Book Now"
//                   className="form-control inp-height inp-width bg-success border-1 text-white"
//                 />
//               </a>
//             </div>
//           </div>
//           {/* <div class="d-flex align-items-center justify-content-between">

//     </div> */}
//         </div>
//       </div>
//       {/* </div> */}
//     </div>
//   </div>
//   {/*short about us starts */}
//   <div className="container mt-2  mt-md-5  mb-3 " id="short-about-us">
//     <p className="text-center">About Us</p>
//     <h2 className="text-center fw-bold">Welcome to Himalayan Travels</h2>
//     <div className="row d-flex align-items-center">
//       <div className="col-md-6 ">
//         <div className="row">
//           <div className="col-sm-12 gy-1 gx-1">
//             <div className="about-us-image1 mb-1">
//               <img
//                 src="images/canvaresize2.png"
//                 alt="mountain and lake with sun-shining in the mountain area"
//                 className="img-fluid rounded-2"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="row d-flex align-content-center">
//           <div className="col-md-6 gx-1 gy-sm-1">
//             <div className="about-us-image2">
//               <img
//                 src="images/domestic31.png"
//                 alt="mountain slightly covered with cloud and green scenes"
//                 className="img-fluid rounded-2"
//               />
//             </div>
//           </div>
//           <div className="col-md-6 gx-1 gy-sm-1">
//             <div className="about-us-image2">
//               <img
//                 src="images/domestic5.png"
//                 alt="blue lake in the mountain with clear sky"
//                 className="img-fluid rounded-2"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-6 ps-5">
//         <h4>General Information</h4>
//         <p>
//           Himalayan Travels was founded in 2023 and registered under the Company
//           Act 1991, Government of Nepal in order to provide efficient and
//           unmatched services in the field of trekking in the Himalayas,
//           mountaineering expeditions and other adventure holidays in Nepal,
//           Tibet, and Bhutan.
//           <br />
//           <br />
//           We know that holidaying is not a cheap activity. It is sumptuous in
//           nature. Therefore, every team member of Yolo Hike functions to give
//           back the value of every penny spent by our clients.
//         </p>
//         <a href="about_company_info.html" className="text-decoration-none">
//           Company Info
//         </a>
//         <br />
//         <a href="about_our_team.html" className="text-decoration-none">
//           Our Team
//         </a>{" "}
//         <br />
//         <a href="payments.html" className="text-decoration-none">
//           Payment Methods
//         </a>{" "}
//         <br />
//         <a href="documents.html" className="text-decoration-none">
//           Legal Documents
//         </a>
//       </div>
//     </div>
//   </div>
//   {/*short about us ends */}
//   <div className="container" id="photo-text">
//     <div className="row d-flex">
//       <div className="col-12 ">
//         <p className="fw-bold fst-italic ">α-HIMALAYAN</p>
//       </div>
//     </div>
//   </div>
//   {/* start of Why to choose Us? */}
//   <div className="container my-3 " id="why-us">
//     <div className="row">
//       <div className="why-section-head col-sm-12 mb-4">
//         <h2 className="text-center position-relative fw-bold">
//           What Makes Us{" "}
//           <span className="text-danger fw-bold d-inline-block text-decoration-none ">
//             {" "}
//             Unique?
//           </span>{" "}
//         </h2>
//         <p className="text-center">
//           To stand higher in the tourism sector{" "}
//           <strong className="text-primary">Himalayan Travels</strong> has opted
//           with promises. All the given Promises are straight and strictly
//           followed.
//         </p>
//       </div>{" "}
//       {/*end div of why-section-head*/}
//       {/* first-box */}
//       <div className="col-lg-4 col-sm-6  text-center">
//         <div className="item  ">
//           <span className="icon feature_box_col_one">
//             <i className="bx bx-rupee " />
//           </span>
//           <h6 className="fw-bold">Best price Guarantee</h6>
//           <p>
//             As a local trekking company we assure you get the best price with
//             competent service. Himalayan Travels has scientifically calculated
//             price for both old and new travel products to assure we keep our
//             clients happy.
//           </p>
//         </div>
//       </div>
//       <div className="col-lg-4 col-sm-6  text-center ">
//         <div className="item">
//           <span className="icon feature_box_col_one">
//             <i className="bx bxs-user" />
//           </span>
//           <h6 className="fw-bold">Expert Guide</h6>
//           <p>
//             A closed team of local trekking guides working for a purely local
//             trekking companies based in Kathmandu Nepal is our pride and
//             expertise in the service we are delivering.
//           </p>
//         </div>
//       </div>
//       <div className="col-lg-4 col-sm-6  text-center  ">
//         <div className="item">
//           <span className="icon feature_box_col_one">
//             <i className="bx bxs-leaf" />
//           </span>
//           <h6 className="fw-bold">Eco-Friendly Tours</h6>
//           <p>
//             Nature is our home &amp; backbone for business. With loving nature
//             &amp; protecting environment we grow bigger. All our trekking/tour
//             guides and expedition leaders are well aware of environmental issues
//             &amp; encourage not to use the plastics.
//           </p>
//         </div>
//       </div>
//       <div className="col-lg-4 col-sm-6  text-center">
//         <div className="item  ">
//           <span className="icon feature_box_col_one">
//             <i className="bx bxs-heart" />
//           </span>
//           <h6 className="fw-bold">Traveller Loves Us</h6>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
//             maxime minima velit delectus! Delectus, ipsa?
//           </p>
//         </div>
//       </div>
//       <div className="col-lg-4 col-sm-6  text-center ">
//         <div className="item">
//           <span className="icon feature_box_col_one">
//             <i className="bx bxs-calendar" />
//           </span>
//           <h6 className="fw-bold">Guaranteed Departures</h6>
//           <p>
//             As listed on the availability section of each travel package; all
//             departure dates are guaranteed. Nepalgram care your time and
//             satisfaction so all the allocated dates are accurate to depart as
//             scheduled.
//           </p>
//         </div>
//       </div>
//       <div className="col-lg-4 col-sm-6  text-center  ">
//         <div className="item">
//           <span className="icon feature_box_col_one">
//             <i className="bx bxs-phone-call" />
//           </span>
//           <h6 className="fw-bold">24/7 Customer Support</h6>
//           <p>
//             Education is what distinguishes our veterans. Some of our guides are
//             from alarmingly different sectors of Engineering, IT, Professors and
//             guides of Everest summit experience; not only from Nepalese side,
//             but also from Tibetan sides.
//           </p>
//         </div>
//       </div>
//     </div>{" "}
//     {/*end div of row*/}
//   </div>
//   {/* end of Why to choose Us? */}
//   {/* Counter starts */}
//   <div className="container py-2 text-black rounded-2">
//     <div className="row justify-content-center text-center">
//       <div className="col-md-3 border-1 shadow border-danger p-3 g-2 bg-info rounded-start-2">
//         <i className="bx bxs-time fs-1 text-white" />
//         <h2 className="text-dark fw-bold">Years Of Experiences</h2>
//         <span id="count1" className="display-4" />
//         <span className="fs-1 fw-bold ">+</span>
//       </div>
//       <div className="col-md-3 border-1 shadow border-danger p-3 g-2 bg-info">
//         <i className="bx bxs-group fs-1 text-white" />
//         <h2 className="text-dark fw-bold">Happy Customers</h2>
//         <span id="count2" className="display-4" />
//       </div>
//       <div className="col-md-3 border-1 shadow border-danger p-3 g-2 bg-info">
//         <i className="bx bxs-heart fs-1 text-white" />
//         <h2 className="text-dark fw-bold">Love We got.........</h2>
//         <span id="count3" className="display-4" />
//       </div>
//       <div className="col-md-3 border-1 shadow border-danger p-3 g-2 bg-info rounded-end-2">
//         <i className="bx bxs-donate-heart fs-1 text-white" />
//         <h2 className="text-dark fw-bold">Services Provided</h2>
//         <span id="count4" className="display-4" />
//       </div>
//     </div>
//   </div>
//   {/* Counter ends */}
//   {/* Special Offers starts */}
//   <div className="container " id="special-offers">
//     <h2 className="text-center align-content-around py-4 position-relative fw-bold">
//       Special Offers
//     </h2>
//     <a
//       href="filterpackages.html"
//       className=" text-decoration-none col-1 offset-10 mb-5"
//     >
//       View More Offers
//     </a>
//     <div className="row mt-4">
//       {/* special-offer-card-1 */}
//       <div
//         className="col-10 offset-1  offset-sm-0 col-sm-6 col-lg-4 col-xl-3 position-relative packageCard"
//         data-price={15000}
//       >
//         <div className="card mb-4">
//           <span className="card__ribbon" />
//           <a href="booknow2.html">
//             <img
//               src="images/domestic4.png"
//               alt=""
//               className="img-fluid rounded-top-3 "
//             />
//           </a>
//           <span className="position-absolute top-50  bg-primary py-1 px-2 rounded-2 ms-1 text-white fw-bold d-flex align-items-center justify-content-center">
//             15000$
//             <small>/person</small>
//             <span className="offset-1" />
//           </span>
//           <div className="card-body">
//             <a
//               href="trek_description.html"
//               className="card-title text-decoration-underline fw-bold"
//             >
//               Rasuwa Trek
//             </a>
//             <a
//               href="trek_description.html"
//               className="text-decoration-none text-dark"
//             >
//               <p className="card-text">
//                 Special For Natural Scenes.
//                 <br />
//                 <span className="fw-bold text-primary">Read More....</span>
//               </p>
//             </a>
//             <div className="card-footer d-flex  flex-lg-row mb-1 ">
//               <div className="col-7 d-flex flex-column flex-md-column ">
//                 <div className="star-icon col-12 ">
//                   <i className="bx bxs-star " />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                 </div>
//                 <div className="reviews col-12 ">(999 Reviews)</div>
//               </div>
//               <div className="col-5  offset-md-1  offset-xl-0 text-md-center text-center  d-flex flex-md-column flex-column  ">
//                 <div className="time-icon col-md-12 col-xl-12">
//                   <i className="bx bx-time fw-bold" />
//                 </div>
//                 <div className="time-descr col-md-12 ">999D/998N</div>
//               </div>
//             </div>
//             <div className="btns-books d-flex align-content-lg-start">
//               <a href="booknow2.html" className="btn btn-primary mx-auto">
//                 Book Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* 2 */}
//       {/* special-offer-card-2*/}
//       <div
//         className="col-10 offset-1  offset-sm-0 col-sm-6 col-lg-4 col-xl-3 position-relative packageCard"
//         data-price={50000}
//       >
//         <div className="card mb-4">
//           <span className="card__ribbon" />
//           <a href="booknow2.html">
//             <img
//               src="images/inter3.png"
//               alt=""
//               className="img-fluid rounded-top-3 "
//             />
//           </a>
//           <span className="position-absolute top-50  bg-primary py-1 px-2 rounded-2 ms-1 text-white fw-bold d-flex align-items-center justify-content-center">
//             50000$
//             <small>/person</small>
//             <span className="offset-1" />
//           </span>
//           <div className="card-body">
//             <a
//               href="trek_description.html"
//               className="card-title text-decoration-underline fw-bold"
//             >
//               Japan Tour
//             </a>
//             <a href="trek_description.html" className="text-decoration-none">
//               <p className="card-text">
//                 Special For Natural everything..
//                 <br />
//                 <span className="fw-bold text-primary">Read More....</span>
//               </p>
//             </a>
//             <div className="card-footer d-flex  flex-lg-row mb-1 ">
//               <div className="col-7 d-flex flex-column flex-md-column ">
//                 <div className="star-icon col-12 ">
//                   <i className="bx bxs-star " />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                 </div>
//                 <div className="reviews col-12 ">(999 Reviews)</div>
//               </div>
//               <div className="col-5  offset-md-1  offset-xl-0 text-md-center text-center  d-flex flex-md-column flex-column  ">
//                 <div className="time-icon col-md-12 col-xl-12">
//                   <i className="bx bx-time fw-bold" />
//                 </div>
//                 <div className="time-descr col-md-12 ">20D/19N</div>
//               </div>
//             </div>
//             <div className="btns-books d-flex align-content-lg-start">
//               <a href="booknow2.html" className="btn btn-primary mx-auto">
//                 Book Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* special-offer-card-3 */}
//       <div
//         className="col-10 offset-1  offset-sm-0 col-sm-6 col-xl-3 col-lg-4 position-relative packageCard"
//         data-price={20000}
//       >
//         <div className="card mb-4">
//           <span className="card__ribbon" />
//           <a href="booknow2.html">
//             <img
//               src="images/everest.jpg"
//               alt=""
//               className="img-fluid rounded-top-3 "
//             />
//           </a>
//           <span className="position-absolute top-50  bg-primary py-1 px-2 rounded-2 ms-1 text-white fw-bold d-flex align-items-center justify-content-center">
//             2000$
//             <small>/person</small>
//             <span className="offset-1" />
//           </span>
//           <div className="card-body">
//             <a
//               href="trek_description.html"
//               className="card-title text-decoration-underline fw-bold"
//             >
//               Everest base camp Trek
//             </a>
//             <a href="trek_description.html" className="text-decoration-none">
//               <p className="card-text">
//                 Special For Natural Scenes.
//                 <br />
//                 <span className="fw-bold text-primary">Read More....</span>
//               </p>
//             </a>
//             <div className="card-footer d-flex  flex-lg-row mb-1 ">
//               <div className="col-7 d-flex flex-column flex-md-column ">
//                 <div className="star-icon col-12 ">
//                   <i className="bx bxs-star " />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                 </div>
//                 <div className="reviews col-12 ">(102 Reviews)</div>
//               </div>
//               <div className="col-5  offset-md-1  offset-xl-0 text-md-center text-center  d-flex flex-md-column flex-column  ">
//                 <div className="time-icon col-md-12 col-xl-12">
//                   <i className="bx bx-time fw-bold" />
//                 </div>
//                 <div className="time-descr col-md-12 ">100D/99N</div>
//               </div>
//             </div>
//             <div className="btns-books d-flex align-content-lg-start">
//               <a href="booknow2.html" className="btn btn-primary mx-auto">
//                 Book Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* special-offer-card-4 */}
//       <div
//         className="col-10 offset-1  offset-sm-0 col-sm-6 col-xl-3 col-lg-4 position-relative  d-block d-lg-none d-xl-block packageCard"
//         data-price={1000}
//       >
//         <div className="card mb-4">
//           <span className="card__ribbon" />
//           <a href="booknow2.html">
//             <img
//               src="images/domestic21.png"
//               alt=""
//               className="img-fluid rounded-top-3 "
//             />
//           </a>
//           <span className="position-absolute top-50  bg-primary py-1 px-2 rounded-2 ms-1 text-white fw-bold d-flex align-items-center justify-content-center">
//             1000$
//             <small>/person</small>
//             <span className="offset-1" />
//           </span>
//           <div className="card-body">
//             <a
//               href="trek_description.html"
//               className="card-title text-decoration-underline fw-bold"
//             >
//               Gosainkunda Trek
//             </a>
//             <a href="trek_description.html" className="text-decoration-none">
//               <p className="card-text">
//                 Special For Natural Scenes.
//                 <br />
//                 <span className="fw-bold text-primary">Read More....</span>
//               </p>
//             </a>
//             <div className="card-footer d-flex  flex-lg-row mb-1 ">
//               <div className="col-7 d-flex flex-column flex-md-column ">
//                 <div className="star-icon col-12 ">
//                   <i className="bx bxs-star " />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                 </div>
//                 <div className="reviews col-12 ">(102 Reviews)</div>
//               </div>
//               <div className="col-5  offset-md-1  offset-xl-0 text-md-center text-center  d-flex flex-md-column flex-column  ">
//                 <div className="time-icon col-md-12 col-xl-12">
//                   <i className="bx bx-time fw-bold" />
//                 </div>
//                 <div className="time-descr col-md-12 ">100D/99N</div>
//               </div>
//             </div>
//             <div className="btns-books d-flex align-content-lg-start">
//               <a href="booknow2.html" className="btn btn-primary mx-auto">
//                 Book Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* End of Special Offers */}
//   {/* hotels starts*/}
//   <div className="container hotel-container">
//     <h2 className="text-center fw-bold align-content-around py-4 ">
//       Hotels and Resorts
//     </h2>
//     <a
//       href="hotel_book.html"
//       className=" text-decoration-none col-1 offset-10 mb-5"
//     >
//       Find More hotels
//     </a>
//     <div className="row d-flex mt-3">
//       {/* hotel-1 */}
//       <div className="col-sm-6 col-md-4 col-lg-3 col-10 offset-1 offset-sm-0 mb-3">
//         <div className="flip-card">
//           <div className="flip-card-inner">
//             <div className="flip-card-front">
//               <div className="flip-image position-relative">
//                 <img src="images/hotel2.jpg" alt="" />
//               </div>
//               <div className="image-part position-absolute col-12">
//                 <p className="text-bg-primary">
//                   Hotel Himalayan &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;5
//                   <i className="bx bxs-star" />
//                 </p>
//               </div>
//             </div>
//             <div className="flip-card-back">
//               <h3 className="hotel-name fw-bold text-decoration-underline">
//                 Hotel Himalayan{" "}
//               </h3>
//               <p className="hotel-location">
//                 <i className="bx bxs-map text-black" /> Thamel, Kathmandu
//               </p>
//               <a
//                 href="tel:010-98765432"
//                 className="text-decoration-none text-white"
//               >
//                 <p className="hotel-phone">
//                   <i className="bx bxs-phone-call text-danger" /> 010-98765432{" "}
//                 </p>
//               </a>
//               <h5 className="facilities">Hotel Facilities</h5>
//               <div className="row d-flex flex-wrap align-items-start">
//                 <div className="col-6 text-start ps-4">
//                   - Swimming <br />
//                   - Gym Hall <br />
//                   - Theatre <br />- Casino
//                 </div>
//                 <div className="col-6 text-start ps-2">
//                   - SPA Massage <br />
//                   - Live Music <br />
//                   - Dance Bar <br />- Seminar Hall
//                 </div>
//               </div>
//               <div className="row d-flex align-items-center">
//                 <div className="col-12">
//                   <a href="reserve-hotel.html">
//                     {" "}
//                     <button>
//                       <span>Book Now</span>
//                     </button>
//                   </a>
//                 </div>
//                 <div className="col-12">
//                   <a href="hotel_details.html">
//                     {" "}
//                     <button>
//                       <span>View Details</span>
//                     </button>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* hotel-2 */}
//       <div className="col-sm-6 col-md-4 col-lg-3 col-10 offset-1 offset-sm-0 mb-3">
//         <div className="flip-card">
//           <div className="flip-card-inner">
//             <div className="flip-card-front">
//               <div className="flip-image position-relative">
//                 <img src="images/hotel6.jpg" alt="" />
//               </div>
//               <div className="image-part position-absolute col-12">
//                 <p className="text-bg-primary">
//                   Hotel Galaxy &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;5
//                   <i className="bx bxs-star" />
//                 </p>
//               </div>
//             </div>
//             <div className="flip-card-back">
//               <h3 className="hotel-name fw-bold text-decoration-underline">
//                 Hotel Galaxy{" "}
//               </h3>
//               <p className="hotel-location">
//                 <i className="bx bxs-map text-black" /> Lazimpat, Kathmandu
//               </p>
//               <a
//                 href="tel:010-98765432"
//                 className="text-decoration-none text-white"
//               >
//                 <p className="hotel-phone">
//                   <i className="bx bxs-phone-call text-danger" /> 010-98765432{" "}
//                 </p>
//               </a>
//               <h5 className="facilities">Hotel Facilities</h5>
//               <div className="row d-flex flex-wrap align-items-start">
//                 <div className="col-6 text-start ps-4">
//                   - Swimming <br />
//                   - Gym Hall <br />
//                   - Theatre <br />- Casino
//                 </div>
//                 <div className="col-6 text-start ps-2">
//                   - SPA Massage <br />
//                   - Live Music <br />
//                   - Dance Bar <br />- Seminar Hall
//                 </div>
//               </div>
//               <div className="row d-flex align-items-center">
//                 <div className="col-12">
//                   <a href="reserve-hotel.html">
//                     {" "}
//                     <button>
//                       <span>Book Now</span>
//                     </button>
//                   </a>
//                 </div>
//                 <div className="col-12">
//                   <a href="hotel_details.html">
//                     {" "}
//                     <button>
//                       <span>View Details</span>
//                     </button>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* hotel-3 */}
//       <div className="col-sm-6 col-md-4 col-lg-3 col-10 offset-1 offset-sm-0 mb-3">
//         <div className="flip-card">
//           <div className="flip-card-inner">
//             <div className="flip-card-front">
//               <div className="flip-image position-relative">
//                 <img src="images/hotel4.jpg" alt="" />
//               </div>
//               <div className="image-part position-absolute col-12">
//                 <p className="text-bg-primary">
//                   Hotel RaSuwas &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;7
//                   <i className="bx bxs-star" />
//                 </p>
//               </div>
//             </div>
//             <div className="flip-card-back">
//               <h3 className="hotel-name fw-bold text-decoration-underline">
//                 Hotel RaSuwas{" "}
//               </h3>
//               <p className="hotel-location">
//                 <i className="bx bxs-map text-black" /> Rasuwa, Nepal
//               </p>
//               <a
//                 href="tel:010-98765432"
//                 className="text-decoration-none text-white"
//               >
//                 <p className="hotel-phone">
//                   <i className="bx bxs-phone-call text-danger" /> 010-98765432{" "}
//                 </p>
//               </a>
//               <h5 className="facilities">Hotel Facilities</h5>
//               <div className="row d-flex flex-wrap align-items-start">
//                 <div className="col-6 text-start ps-4">
//                   - Swimming <br />
//                   - Gym Hall <br />
//                   - Theatre <br />- Casino
//                 </div>
//                 <div className="col-6 text-start ps-2">
//                   - SPA Massage <br />
//                   - Live Music <br />
//                   - Dance Bar <br />- Seminar Hall
//                 </div>
//               </div>
//               <div className="row d-flex align-items-center">
//                 <div className="col-12">
//                   <a href="reserve-hotel.html">
//                     {" "}
//                     <button>
//                       <span>Book Now</span>
//                     </button>
//                   </a>
//                 </div>
//                 <div className="col-12">
//                   <a href="hotel_details.html">
//                     {" "}
//                     <button>
//                       <span>View Details</span>
//                     </button>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* hotel-4 */}
//       <div className="col-sm-6 col-md-4 col-lg-3 col-10 offset-1 offset-sm-0 mb-3">
//         <div className="flip-card">
//           <div className="flip-card-inner">
//             <div className="flip-card-front">
//               <div className="flip-image position-relative">
//                 <img src="images/hotel5.jpg" alt="" />
//               </div>
//               <div className="image-part position-absolute col-12">
//                 <p className="text-bg-primary">
//                   Hotel Royal Family &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;5
//                   <i className="bx bxs-star" />
//                 </p>
//               </div>
//             </div>
//             <div className="flip-card-back">
//               <h3 className="hotel-name fw-bold text-decoration-underline">
//                 Hotel Royal Family{" "}
//               </h3>
//               <p className="hotel-location">
//                 <i className="bx bxs-map text-black" /> Thamel, Kathmandu
//               </p>
//               <a
//                 href="tel:010-98765432"
//                 className="text-decoration-none text-white"
//               >
//                 <p className="hotel-phone">
//                   <i className="bx bxs-phone-call text-danger" /> 010-98765432{" "}
//                 </p>
//               </a>
//               <h5 className="facilities">Hotel Facilities</h5>
//               <div className="row d-flex flex-wrap align-items-start">
//                 <div className="col-6 text-start ps-4">
//                   - Swimming <br />
//                   - Gym Hall <br />
//                   - Theatre <br />- Casino
//                 </div>
//                 <div className="col-6 text-start ps-2">
//                   - SPA Massage <br />
//                   - Live Music <br />
//                   - Dance Bar <br />- Seminar Hall
//                 </div>
//               </div>
//               <div className="row d-flex align-items-center">
//                 <div className="col-12">
//                   <a href="reserve-hotel.html">
//                     {" "}
//                     <button>
//                       <span>Book Now</span>
//                     </button>
//                   </a>
//                 </div>
//                 <div className="col-12">
//                   <a href="hotel_details.html">
//                     {" "}
//                     <button>
//                       <span>View Details</span>
//                     </button>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* hotel-5 */}
//       <div className="col-sm-6 col-md-4 col-lg-3 col-10 offset-1 offset-sm-0 mb-3 d-none d-md-block d-lg-none">
//         <div className="flip-card">
//           <div className="flip-card-inner">
//             <div className="flip-card-front">
//               <div className="flip-image position-relative">
//                 <img src="images/hotel6.jpg" alt="" />
//               </div>
//               <div className="image-part position-absolute col-12">
//                 <p className="text-bg-primary">
//                   Hotel Himalayan &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;5
//                   <i className="bx bxs-star" />
//                 </p>
//               </div>
//             </div>
//             <div className="flip-card-back">
//               <h3 className="hotel-name fw-bold text-decoration-underline">
//                 Hotel Himalayan{" "}
//               </h3>
//               <p className="hotel-location">
//                 <i className="bx bxs-map text-black" /> Thamel, Kathmandu
//               </p>
//               <a
//                 href="tel:010-98765432"
//                 className="text-decoration-none text-white"
//               >
//                 <p className="hotel-phone">
//                   <i className="bx bxs-phone-call text-danger" /> 010-98765432{" "}
//                 </p>
//               </a>
//               <h5 className="facilities">Hotel Facilities</h5>
//               <div className="row d-flex flex-wrap align-items-start">
//                 <div className="col-6 text-start ps-4">
//                   - Swimming <br />
//                   - Gym Hall <br />
//                   - Theatre <br />- Casino
//                 </div>
//                 <div className="col-6 text-start ps-2">
//                   - SPA Massage <br />
//                   - Live Music <br />
//                   - Dance Bar <br />- Seminar Hall
//                 </div>
//               </div>
//               <div className="row d-flex align-items-center">
//                 <div className="col-12">
//                   <a href="reserve-hotel.html">
//                     {" "}
//                     <button>
//                       <span>Book Now</span>
//                     </button>
//                   </a>
//                 </div>
//                 <div className="col-12">
//                   <a href="hotel_details.html">
//                     {" "}
//                     <button>
//                       <span>View Details</span>
//                     </button>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* hotel-6*/}
//       <div className="col-sm-6 col-md-4 col-lg-3 col-10 offset-1 offset-sm-0 mb-3 d-none d-md-block d-lg-none">
//         <div className="flip-card">
//           <div className="flip-card-inner">
//             <div className="flip-card-front">
//               <div className="flip-image position-relative">
//                 <img src="images/hotel3.jpg" alt="" />
//               </div>
//               <div className="image-part position-absolute col-12">
//                 <p className="text-bg-primary">
//                   Hotel Yarsa &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;5
//                   <i className="bx bxs-star" />
//                 </p>
//               </div>
//             </div>
//             <div className="flip-card-back">
//               <h3 className="hotel-name fw-bold text-decoration-underline">
//                 Hotel Yarsa{" "}
//               </h3>
//               <p className="hotel-location">
//                 <i className="bx bxs-map text-black" /> Thamel, Kathmandu
//               </p>
//               <a
//                 href="tel:010-98765432"
//                 className="text-decoration-none text-white"
//               >
//                 <p className="hotel-phone">
//                   <i className="bx bxs-phone-call text-danger" /> 010-98765432{" "}
//                 </p>
//               </a>
//               <h5 className="facilities">Hotel Facilities</h5>
//               <div className="row d-flex flex-wrap align-items-start">
//                 <div className="col-6 text-start ps-4">
//                   - Swimming <br />
//                   - Gym Hall <br />
//                   - Theatre <br />- Casino
//                 </div>
//                 <div className="col-6 text-start ps-2">
//                   - SPA Massage <br />
//                   - Live Music <br />
//                   - Dance Bar <br />- Seminar Hall
//                 </div>
//               </div>
//               <div className="row d-flex align-items-center">
//                 <div className="col-12">
//                   <a href="reserve-hotel.html">
//                     {" "}
//                     <button>
//                       <span>Book Now</span>
//                     </button>
//                   </a>
//                 </div>
//                 <div className="col-12">
//                   <a href="hotel_details.html">
//                     {" "}
//                     <button>
//                       <span>View Details</span>
//                     </button>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* /hotels */}
//   {/* start of most-popular packages */}
//   <div className="container " id="popular-packages">
//     <h3 className="text-center align-content-around py-4 ">
//       Most Popular Packages
//     </h3>
//     <a
//       href="filterpackages.html"
//       className=" text-decoration-none col-1 offset-10 mb-5"
//     >
//       Most Popular Packages
//     </a>
//     <div className="row d-flex mt-3">
//       {/* popular-packages-card-1 */}
//       <div className="col-sm-6 col-10 offset-1 offset-sm-0 col-lg-4 col-xl-3 position-relative">
//         <div className="card mb-3 pop-packages-card">
//           <a href="trek_description.html">
//             <img src="images/domestic11.png" alt="" className="card-img-top" />
//           </a>
//           <span className=" position-absolute end-0 bottom-50 bg-primary rounded-start-2 ms-2 ms-md-2 ms-sm-1 px-1 mt-3 package-price text-white">
//             100<span className="package-price">$</span>
//             <span className="fs-6">/person</span>{" "}
//           </span>
//           <div className="card-body">
//             <a
//               href="trek_description.html"
//               className="card-title text-decoration-none fw-bold"
//             >
//               KTM valley Tour
//             </a>
//             {/* <h5 class="card-subtitle">Special for natural scenes and Tamang Heritage Culture</h5> */}
//             <a href="trek_description.html" className="text-decoration-none">
//               <p className="card-text">
//                 Special For Cultural Heritages.
//                 <br />
//                 <span className="fw-bold text-danger">Read More....</span>
//               </p>
//             </a>
//             <div className="card-footer d-flex  flex-lg-row mb-1 ">
//               <div className="col-7 d-flex flex-column flex-md-column ">
//                 <div className="star-icon col-12 ">
//                   <i className="bx bxs-star " />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                 </div>
//                 <div className="reviews col-12 ">(102 Reviews)</div>
//               </div>
//               <div className="col-5  offset-md-1  offset-xl-0 text-md-center text-center  d-flex flex-md-column flex-column  ">
//                 <div className="time-icon col-md-12 col-xl-12">
//                   <i className="bx bx-time fw-bold" />
//                 </div>
//                 <div className="time-descr col-md-12 ">100D/99N</div>
//               </div>
//             </div>
//             <div className="btns-books d-flex align-content-lg-start">
//               <a href="booknow2.html" className="btn btn-primary mx-auto">
//                 Book Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* popular-packages-card-2 */}
//       <div className="col-sm-6 col-10 offset-1 offset-sm-0 col-lg-4 col-xl-3 position-relative">
//         <div className="card mb-3 pop-packages-card">
//           <a href="trek_description.html">
//             <img src="images/mntn_flag.jpg" alt="" className="card-img-top" />
//           </a>
//           <span className=" position-absolute end-0 bottom-50 bg-primary rounded-start-2 ms-2 ms-md-2 ms-sm-1 px-1 mt-3 package-price text-white">
//             55000<span className="package-price">$</span>
//             <span className="fs-6">/person</span>{" "}
//           </span>
//           <div className="card-body">
//             <a
//               href="trek_description.html"
//               className="card-title text-decoration-none fw-bold"
//             >
//               Everest Trek
//             </a>
//             {/* <h5 class="card-subtitle">Special for natural scenes and Tamang Heritage Culture</h5> */}
//             <a href="trek_description.html" className="text-decoration-none">
//               <p className="card-text">
//                 Special For mountains.
//                 <br />
//                 <span className="fw-bold text-danger">Read More....</span>
//               </p>
//             </a>
//             <div className="card-footer d-flex  flex-lg-row mb-1 ">
//               <div className="col-7 d-flex flex-column flex-md-column ">
//                 <div className="star-icon col-12 ">
//                   <i className="bx bxs-star " />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                 </div>
//                 <div className="reviews col-12 ">(102 Reviews)</div>
//               </div>
//               <div className="col-5  offset-md-1  offset-xl-0 text-md-center text-center  d-flex flex-md-column flex-column  ">
//                 <div className="time-icon col-md-12 col-xl-12">
//                   <i className="bx bx-time fw-bold" />
//                 </div>
//                 <div className="time-descr col-md-12 ">100D/99N</div>
//               </div>
//             </div>
//             <div className="btns-books d-flex align-content-lg-start">
//               <a href="booknow2.html" className="btn btn-primary mx-auto">
//                 Book Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* popular-packages-card-3 */}
//       <div className="col-sm-6 col-10 offset-1 offset-sm-0 col-lg-4 col-xl-3 position-relative">
//         <div className="card mb-3 pop-packages-card">
//           <a href="trek_description.html">
//             <img src="images/gosainkunda.jpg" alt="" className="card-img-top" />
//           </a>
//           <span className=" position-absolute end-0 bottom-50 bg-primary rounded-start-2 ms-2 ms-md-2 ms-sm-1 px-1 mt-3 package-price text-white">
//             15000<span className="package-price">$</span>
//             <span className="fs-6">/person</span>{" "}
//           </span>
//           <div className="card-body">
//             <a
//               href="trek_description.html"
//               className="card-title text-decoration-none fw-bold"
//             >
//               Langtang Trek
//             </a>
//             {/* <h5 class="card-subtitle">Special for natural scenes and Tamang Heritage Culture</h5> */}
//             <a href="trek_description.html" className="text-decoration-none">
//               <p className="card-text">
//                 Special For Natural Scenes.
//                 <br />
//                 <span className="fw-bold text-danger">Read More....</span>
//               </p>
//             </a>
//             <div className="card-footer d-flex  flex-lg-row mb-1 ">
//               <div className="col-7 d-flex flex-column flex-md-column ">
//                 <div className="star-icon col-12 ">
//                   <i className="bx bxs-star " />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                 </div>
//                 <div className="reviews col-12 ">(102 Reviews)</div>
//               </div>
//               <div className="col-5  offset-md-1  offset-xl-0 text-md-center text-center  d-flex flex-md-column flex-column  ">
//                 <div className="time-icon col-md-12 col-xl-12">
//                   <i className="bx bx-time fw-bold" />
//                 </div>
//                 <div className="time-descr col-md-12 ">100D/99N</div>
//               </div>
//             </div>
//             <div className="btns-books d-flex align-content-lg-start">
//               <a href="booknow2.html" className="btn btn-primary mx-auto">
//                 Book Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* popular-packages-card-4 */}
//       <div className="col-sm-6 col-10 offset-1 offset-sm-0 col-lg-4 col-xl-3 d-block d-lg-none d-xl-block position-relative">
//         <div className="card mb-3 pop-packages-card">
//           <a href="trek_description.html">
//             <img src="images/domestic31.png" alt="" className="card-img-top" />
//           </a>
//           <span className=" position-absolute end-0 bottom-50 bg-primary rounded-start-2 ms-2 ms-md-2 ms-sm-1 px-1 mt-3 package-price text-white">
//             1500<span className="package-price">$</span>
//             <span className="fs-6">/person</span>{" "}
//           </span>
//           <div className="card-body">
//             <a
//               href="trek_description.html"
//               className="card-title text-decoration-none fw-bold"
//             >
//               Australian Camp Trek
//             </a>
//             {/* <h5 class="card-subtitle">Special for natural scenes and Tamang Heritage Culture</h5> */}
//             <a href="trek_description.html" className="text-decoration-none">
//               <p className="card-text">
//                 Special For Natural Scenes.
//                 <br />
//                 <span className="fw-bold text-danger">Read More....</span>
//               </p>
//             </a>
//             <div className="card-footer d-flex  flex-lg-row mb-1 ">
//               <div className="col-7 d-flex flex-column flex-md-column ">
//                 <div className="star-icon col-12 ">
//                   <i className="bx bxs-star " />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                   <i className="bx bxs-star" />
//                 </div>
//                 <div className="reviews col-12 ">(102 Reviews)</div>
//               </div>
//               <div className="col-5  offset-md-1  offset-xl-0 text-md-center text-center  d-flex flex-md-column flex-column  ">
//                 <div className="time-icon col-md-12 col-xl-12">
//                   <i className="bx bx-time fw-bold" />
//                 </div>
//                 <div className="time-descr col-md-12 ">100D/99N</div>
//               </div>
//             </div>
//             <div className="btns-books d-flex align-content-lg-start">
//               <a href="booknow2.html" className="btn btn-primary mx-auto">
//                 Book Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* end of most-popular packages */}
//   {/* gallery starts */}
//   <div className="container my-4" id="gallery">
//     <div className="why-section-head clo-sm-12 mb-4">
//       <h2 className="text-center position-relative ">
//         Our{" "}
//         <span className="text-danger fw-bold d-inline-block text-decoration-none ">
//           {" "}
//           Gallery
//         </span>{" "}
//       </h2>
//       <p className="text-center">
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
//         minus quia eligendi qui, quos expedita impedit pariatur mollitia
//         incidunt sapiente suscipit, dolores ipsa rem esse exercitationem harum
//         sunt a et?
//       </p>
//     </div>{" "}
//     {/*end div of why-section-head*/}
//     {/* first row of gallery */}
//     {/* <div class="row">
//   <div class="col-12 "> */}
//     <div className="row d-flex justify-content-evenly">
//       <div className="col-md-4 g-1 ">
//         <div className="gallery-item">
//           <img src="images/peak_climb1.jpg" alt="Image 2" />
//           <div className="overlay-content">
//             {/* popup */}
//             {/* <div class="popup-image">
//         <span>&times;</span>
//         <img src="images/peak_climb1.jpg" alt="peak climbing">
//       </div> */}
//             <div className="content col-12">
//               <h4 className="fw-bold">Peak Climbing</h4>
//               <p>Peak Climbing by a strong lady with proper guidance.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-4 g-1">
//         <div className="gallery-item-2 mb-1">
//           <img
//             src="images/rock_climb1.jpg"
//             alt="Image 3"
//             className="img-fluid"
//           />
//           <div className="overlay-content">
//             <div className="content col-12">
//               <h4 className="fw-bold">Rock Climbing</h4>
//               {/* <p>Peak Climbing by a strong lady with proper guidance.</p> */}
//             </div>
//           </div>
//         </div>
//         <div className="gallery-item-2">
//           <img src="images/bungee.jpg" alt="Image 4" className="img-fluid" />
//           <div className="overlay-content">
//             <div className="content col-12">
//               <h4 className="fw-bold">Bungee Jumping</h4>
//               {/* <p>Peak Climbing by a strong lady with proper guidance.</p> */}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-4 g-1 ">
//         <div className="gallery-item">
//           <img src="images/rafting.jpg" alt="Image 6" className="img-fluid" />
//           <div className="overlay-content">
//             <div className="content col-12">
//               <h4 className="fw-bold">Rafting</h4>
//               {/* <p>Peak Climbing by a strong lady with proper guidance.</p> */}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* </div>

//     </div> */}
//     </div>
//     {/* second row of gallery */}
//     <div className="row d-flex justify-content-evenly">
//       <div className="col-md-4 g-1">
//         <div className="gallery-item-2 mb-1">
//           <img
//             src="images/rock_climb1.jpg"
//             alt="Image 3"
//             className="img-fluid"
//           />
//           <div className="overlay-content">
//             <div className="content col-12">
//               <h4 className="fw-bold">Rock Climbing</h4>
//               {/* <p>Peak Climbing by a strong lady with proper guidance.</p> */}
//             </div>
//           </div>
//         </div>
//         <div className="gallery-item-2">
//           <img src="images/bungee.jpg" alt="Image 4" className="img-fluid" />
//           <div className="overlay-content">
//             <div className="content col-12">
//               <h4 className="fw-bold">Bungee Jumping</h4>
//               {/* <p>Peak Climbing by a strong lady with proper guidance.</p> */}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* second row second column  */}
//       <div className="col-md-4 g-1 ">
//         <div className="gallery-item">
//           <img src="images/peak_climb1.jpg" alt="Image 2" />
//           <div className="overlay-content">
//             <div className="content col-12">
//               <h4 className="fw-bold">Peak Climbing</h4>
//               <p>Peak Climbing by a strong lady with proper guidance.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* second row-third column*/}
//       <div className="col-md-4">
//         <div className="row d-flex">
//           <div className="col-sm-6 g-1 ">
//             <div className="gallery-item">
//               <img
//                 src="images/rafting.jpg"
//                 alt="Image 6"
//                 className="img-fluid"
//               />
//               <div className="overlay-content">
//                 <div className="content col-12">
//                   <h4 className="fw-bold">Rafting</h4>
//                   {/* <p>Peak Climbing by a strong lady with proper guidance.</p> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-6 g-1 ">
//             <div className="gallery-item">
//               <img
//                 src="images/everest.jpg"
//                 alt="mt-everest"
//                 className="img-fluid"
//               />
//               <div className="overlay-content">
//                 <div className="content col-12">
//                   <h4 className="fw-bold">Rafting</h4>
//                   {/* <p>Peak Climbing by a strong lady with proper guidance.</p> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/*row-2 closing div*/}
//   </div>{" "}
//   {/*container of gallery closing div*/}
//   {/* gallery-ends */}
//   {/* video starts */}
//   <div className="container my-3">
//     <h className="text-center">Video Gallery</h>
//     <div className="row d-flex gx-2 gy-1">
//       <div className=" col-md-6  ">
//         <iframe
//           width="100%"
//           height={300}
//           src="https://www.youtube.com/embed/uu7e17izrqU"
//           title="YouTube video player"
//           frameBorder={0}
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen=""
//         />
//       </div>
//       <div className=" col-md-6 e ">
//         <iframe
//           width="100%"
//           height={300}
//           src="https://www.youtube.com/embed/rbjbqqQrKnI"
//           title="YouTube video player"
//           frameBorder={0}
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen=""
//         />
//       </div>
//       <div className=" col-md-6  ">
//         <iframe
//           width="100%"
//           height={300}
//           src="https://www.youtube.com/embed/GGHTF9QSpVg"
//           title="YouTube video player"
//           frameBorder={0}
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen=""
//         />
//       </div>
//       <div className=" col-md-6  ">
//         <iframe
//           width="100%"
//           height={300}
//           src="https://www.youtube.com/embed/d8GbAlh9tgw"
//           title="YouTube video player"
//           frameBorder={0}
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen=""
//         />
//       </div>
//     </div>
//   </div>
//   {/* video ends */}
//   {/* testimonial slider starts */}
//   <div className="container ">
//     <div className="row">
//       <div className="splide">
//         <div className="splide__track">
//           <div className="splide__list">
//             {/* testimonial-1 */}
//             <div className="col-md-3 col-sm-4 splide__slide ">
//               <div className="card testi-card">
//                 <div className="box3"></div>
//                 <div className="card-content">
//                   <div className="testi-image">
//                     <img src="images/client2.jpg" alt="" />
//                   </div>
//                   <div className="name-profession">
//                     <span className="name">Peter Hitter</span>
//                     <span className="profession">Nepali Resident</span>
//                   </div>
//                   <div className="rating">
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                   </div>
//                   <div className="about text-center">
//                     The Himalaya Travel's team is really supportive and
//                     intelligent as well as they explain every microscopic
//                     details on the way to our trek to Poon Hill. Dherai Ramro
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* testimonial-2 */}
//             <div className="col-sm-4 col-md-3 splide__slide ">
//               <div className="card testi-card">
//                 <div className="box1"></div>
//                 <div className="card-content">
//                   <div className="testi-image">
//                     <img src="images/client1.jpg" alt="" />
//                   </div>
//                   <div className="name-profession">
//                     <span className="name">Nakkali Maya</span>
//                     <span className="profession">Resident of USA</span>
//                   </div>
//                   <div className="rating">
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                   </div>
//                   <div className="about text-center">
//                     On last May, I went to the EBC trek with Himalayn Travels.
//                     It was the moment when I really felt the calmness and peace
//                     of mind in Himalaya.
//                     <br />
//                     Lots of Love..
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* testimonial-3*/}
//             <div className="col-md-3 col-sm-4 splide__slide ">
//               <div className="card testi-card">
//                 <div className="box3"></div>
//                 <div className="card-content">
//                   <div className="testi-image">
//                     <img src="images/ceo.jpg" alt="" />
//                   </div>
//                   <div className="name-profession">
//                     <span className="name">Silly Chilly </span>
//                     <span className="profession">Swiss Resident</span>
//                   </div>
//                   <div className="rating">
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                   </div>
//                   <div className="about text-center">
//                     The Himalaya Travel's team is really supportive and
//                     intelligent as well as they explain every microscopic
//                     details on the way to our trek to Poon Hill.
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* testimonial-4 */}
//             <div className="col-md-3 col-sm-4 splide__slide">
//               <div className="card testi-card">
//                 <div className="box2"></div>
//                 <div className="card-content">
//                   <div className="testi-image">
//                     <img src="images/client2.jpg" alt="" />
//                   </div>
//                   <div className="name-profession">
//                     <span className="name">Jack Smilly</span>
//                     <span className="profession">Resident of Australia</span>
//                   </div>
//                   <div className="rating">
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                   </div>
//                   <div className="about text-center">
//                     Nice, Superb, Amazing and Supportive as well as Friendly
//                     Staff with A+ Hospitality.
//                     <br />
//                     Loved that!
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-sm-4 col-md-3 splide__slide ">
//               <div className="card testi-card">
//                 <div className="box1"></div>
//                 <div className="card-content">
//                   <div className="testi-image">
//                     <img src="images/client1.jpg" alt="" />
//                   </div>
//                   <div className="name-profession">
//                     <span className="name">Tanjarrh Trides</span>
//                     <span className="profession">Resident of USA</span>
//                   </div>
//                   <div className="rating">
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                   </div>
//                   <div className="about text-center">
//                     On last May, I went to the EBC trek with Himalayn Travels. I
//                     really felt the calmness and peace of mind in Himalaya.
//                     <br />
//                     Lots of Love..
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-sm-4 col-md-3 splide__slide ">
//               <div className="card testi-card">
//                 <div className="box1"></div>
//                 <div className="card-content">
//                   <div className="testi-image">
//                     <img src="images/client1.jpg" alt="" />
//                   </div>
//                   <div className="name-profession">
//                     <span className="name">Tanjarrh Trides</span>
//                     <span className="profession">Resident of USA</span>
//                   </div>
//                   <div className="rating">
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                   </div>
//                   <div className="about text-center">
//                     On last May, I went to the EBC trek with Himalayn Travels.
//                     It was the moment when I really felt the calmness and peace
//                     of mind in Himalaya.
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-sm-4 col-md-3 splide__slide ">
//               <div className="card testi-card">
//                 <div className="box1"></div>
//                 <div className="card-content">
//                   <div className="testi-image">
//                     <img src="images/client1.jpg" alt="" />
//                   </div>
//                   <div className="name-profession">
//                     <span className="name">Tanjarrh Trides</span>
//                     <span className="profession">Resident of USA</span>
//                   </div>
//                   <div className="rating">
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                   </div>
//                   <div className="about text-center">
//                     On last May, I went to the EBC trek with Himalayn Travels.I
//                     really felt the calmness and peace of mind in Himalaya.
//                     <br />
//                     Lots of Love..
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-sm-4 col-md-3 splide__slide ">
//               <div className="card testi-card">
//                 <div className="box1"></div>
//                 <div className="card-content">
//                   <div className="testi-image">
//                     <img src="images/client1.jpg" alt="" />
//                   </div>
//                   <div className="name-profession">
//                     <span className="name">Tanjarrh Trides</span>
//                     <span className="profession">Resident of USA</span>
//                   </div>
//                   <div className="rating">
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                   </div>
//                   <div className="about text-center">
//                     On last May, I went to the EBC trek with Himalayn Travels.
//                     It was the moment when I really felt the calmness and peace
//                     of mind in Himalaya.
//                     <br />
//                     Lots of Love..
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-sm-4 col-md-3 splide__slide ">
//               <div className="card testi-card">
//                 <div className="box1"></div>
//                 <div className="card-content">
//                   <div className="testi-image">
//                     <img src="images/client1.jpg" alt="" />
//                   </div>
//                   <div className="name-profession">
//                     <span className="name">Tanjarrh Trides</span>
//                     <span className="profession">Resident of USA</span>
//                   </div>
//                   <div className="rating">
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                   </div>
//                   <div className="about text-center">
//                     On last May, I went to the EBC trek with Himalayn Travels.
//                     It was the moment when I really felt the calmness and peace
//                     of mind in Himalaya.
//                     <br />
//                     Lots of Love..
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-sm-4 col-md-3 splide__slide ">
//               <div className="card testi-card">
//                 <div className="box1"></div>
//                 <div className="card-content">
//                   <div className="testi-image">
//                     <img src="images/client1.jpg" alt="" />
//                   </div>
//                   <div className="name-profession">
//                     <span className="name">Tanjarrh Trides</span>
//                     <span className="profession">Resident of USA</span>
//                   </div>
//                   <div className="rating">
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                   </div>
//                   <div className="about text-center">
//                     On last May, I went to the EBC trek with Himalayn Travels.
//                     It was the moment when I really felt the calmness and peace
//                     of mind in Himalaya.
//                     <br />
//                     Lots of Love..
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-sm-4 col-md-3 splide__slide ">
//               <div className="card testi-card">
//                 <div className="box1"></div>
//                 <div className="card-content">
//                   <div className="testi-image">
//                     <img src="images/client1.jpg" alt="" />
//                   </div>
//                   <div className="name-profession">
//                     <span className="name">Tanjarrh Trides</span>
//                     <span className="profession">Resident of USA</span>
//                   </div>
//                   <div className="rating">
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                     <i className="fas fa-star" />
//                   </div>
//                   <div className="about text-center">
//                     On last May, I went to the EBC trek with Himalayn Travels.
//                     It was the moment when I really felt the calmness and peace
//                     of mind in Himalaya.
//                     <br />
//                     Lots of Love..
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* testimonial slider ends */}
//   {/* start of faq section */}
//   <div className="container " id="faq">
//     <h2 className="text-center align-content-around fw-bold pb-4">FAQs</h2>
//     <div className="accordion accordion-flush" id="accordionExample">
//       {/* accordion-1 */}
//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button
//             className="accordion-button collapsed"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#collapseOne"
//             aria-expanded="false"
//             aria-controls="collapseOne"
//           >
//             <i className="bi bi-question-octagon text-primary fw-bold me-2" />
//             Which are the most visited place in Nepal?
//           </button>
//         </h2>
//         <div
//           id="collapseOne"
//           className="accordion-collapse collapse"
//           data-bs-parent="#accordionExample"
//         >
//           <div className="accordion-body">
//             <strong>Kathmandu and Pokhara.</strong> Some of the most visited
//             places of Nepal include Kathmandu, Bhaktapur, Lalitpur( city of
//             Temple), Pokhara(City of the lake), Lukla (gateway to the mountain
//             range), Manang(ancient forbidden kingdom), and Mustang(Cold Desert
//             of Nepal).
//           </div>
//         </div>
//       </div>
//       {/* accordion-2 */}
//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button
//             className="accordion-button collapsed"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#collapseTwo"
//             aria-expanded="false"
//             aria-controls="collapseTwo"
//           >
//             <i className="bi bi-question-octagon text-primary fw-bold me-2" />
//             What are the best things to do in Nepal?
//           </button>
//         </h2>
//         <div
//           id="collapseTwo"
//           className="accordion-collapse collapse"
//           data-bs-parent="#accordionExample"
//         >
//           <div className="accordion-body">
//             <strong>Many More....</strong>
//             As a tourist, you can visit the amazing valleys and admire the
//             stunning scenes they offer, experience the rich culture and history
//             by visiting the old and ancient monuments, try various mouthwatering
//             dishes of Nepal and go for a trek in the stunning peaks and
//             mountains.
//           </div>
//         </div>
//       </div>
//       {/* accordion-3 */}
//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button
//             className="accordion-button collapsed"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#collapseThree"
//             aria-expanded="false"
//             aria-controls="collapseThree"
//           >
//             <i className="bi bi-question-octagon text-primary fw-bold me-2" />
//             Where are can I find my itinerary once my trip is booked?
//           </button>
//         </h2>
//         <div
//           id="collapseThree"
//           className="accordion-collapse collapse"
//           data-bs-parent="#accordionExample"
//         >
//           <div className="accordion-body">
//             <p>
//               You can find your Itinerary on our official website
//               www.ahimalayantravel.com. We will send a copy of the itinerary to
//               your mail id upon request.
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* accordion-4 */}
//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button
//             className="accordion-button collapsed"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#collapseFour"
//             aria-expanded="false"
//             aria-controls="collapseFour"
//           >
//             <i className="bi bi-question-octagon text-primary fw-bold me-2" />
//             What do we need to travel in Nepal as Foreigner?{" "}
//           </button>
//         </h2>
//         <div
//           id="collapseFour"
//           className="accordion-collapse collapse"
//           data-bs-parent="#accordionExample"
//         >
//           <div className="accordion-body">
//             <strong>
//               You have to bring your Passport and Visa papers along with
//               Covit-test Negative documents in order to travel/visit in Nepal.
//             </strong>
//           </div>
//         </div>
//       </div>
//       {/* accordion-5 */}
//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button
//             className="accordion-button collapsed"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#collapseFive"
//             aria-expanded="false"
//             aria-controls="collapseFive"
//           >
//             <i className="bi bi-question-octagon text-primary fw-bold me-2" />
//             Where are You Located?
//           </button>
//         </h2>
//         <div
//           id="collapseFive"
//           className="accordion-collapse collapse"
//           data-bs-parent="#accordionExample"
//         >
//           <div className="accordion-body">
//             <strong>We are Located at Thamel in Kathmandu.</strong> View in Map:
//             <a
//               href="https://www.google.com/maps/dir//I.J+Plaza,+%E0%A4%AC%E0%A4%BF%E0%A4%AE+%E0%A4%AE%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%97,+Kathmandu+44600/@27.7103524,85.2481356,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39eb19014f8d1f91:0xe5782a069dafdcd7!2m2!1d85.3181496!2d27.7103776?entry=ttu"
//               className="text-decoration-none"
//             >
//               {" "}
//               <i className="bx bxs-map fs-1 text-primary" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="row mt-4">
//       <h3>Still Got Questions?</h3>
//       <p>
//         If you can not find answer to your questions in our FAQ, you can always{" "}
//         <a
//           href="contact.html"
//           className="text-decoration-none text-primary fs-3 fst-italic"
//         >
//           contact us
//         </a>
//         . We will answer to you shortly!
//       </p>
//     </div>
//   </div>
//   {/* end of faq section */}
//   {/* start of footer */}
//   <div className="container-fluid p-3 footer-section ">
//     <footer className="py-5">
//       <div className="row">
//         <div className="col-lg-2  col-sm-6 mb-3">
//           <h5 className="fw-semibold">Company</h5>
//           <ul className="nav flex-column">
//             <li className="nav-item mb-2">
//               <a href="tourism_project.html" className="nav-link p-0 text-dark">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a
//                 href="about_company_info.html"
//                 className="nav-link p-0 text-dark"
//               >
//                 About
//               </a>
//             </li>
//             {/* <li class="nav-item mb-2"><a href="" class="nav-link p-0 text-dark">Our Services</a></li> */}
//             <li className="nav-item mb-2">
//               <a href="blog.html" className="nav-link p-0 text-dark">
//                 Blog
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href="#faq" className="nav-link p-0 text-dark">
//                 FAQs
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="col-lg-3 col-sm-6 mb-3 ">
//           <h5 className="fw-semibold">Contact Us</h5>
//           <ul className="nav flex-column">
//             <li className="nav-item mb-2">
//               <a
//                 href="https://www.google.com/maps/place/28%C2%B000'37.7%22N+85%C2%B015'13.9%22E/@28.0104644,85.2525755,18z/data=!3m1!4b1!4m4!3m3!8m2!3d28.010462!4d85.253863?entry=ttu"
//                 className="nav-link p-0 text-dark"
//               >
//                 Rasuwa, Nepal
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href="tel: 9741716087" className="nav-link p-0 text-dark">
//                 +977 9741716087
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a
//                 href="mailto:suwasghale2281@gmail.com"
//                 className="nav-link p-0 text-dark"
//               >
//                 suwasghale2281@gmail.com
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="col-lg-2 col-sm-6 mb-3   ">
//           <h5 className="fw-semibold">Quick Links</h5>
//           <ul className="nav flex-column">
//             <li className="nav-item mb-2">
//               <a href="terms.html" className="nav-link p-0 text-dark">
//                 Terms and Conditions
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href="career.html" className="nav-link p-0 text-dark">
//                 Careers{" "}
//                 <span className="badge bg-secondary rounded-pill">
//                   We're Hiring
//                 </span>{" "}
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href="contact.html" className="nav-link p-0 text-dark">
//                 Help-Center
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="col-lg-5  col-sm-6  mb-3  ">
//           <form>
//             <h5 className="fw-semibold">Subscribe to our newsletter</h5>
//             <p>Monthly digest of what's new and exciting from us.</p>
//             <div className="d-flex flex-column flex-sm-row w-100 gap-2">
//               <label htmlFor="newsletter1" className="visually-hidden">
//                 Email address
//               </label>
//               <input
//                 id="newsletter1"
//                 type="text"
//                 className="form-control"
//                 placeholder="Email address"
//                 required=""
//               />
//               <button className="btn btn-primary" type="button">
//                 Subscribe
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div className="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 border-top">
//         <p>
//           © 2023 |{" "}
//           <span className="text-white fst-italic fw-bold">SuwasGhale</span>
//           <i className="bx bxs-heart text-danger" />
//           Inc. All rights reserved.
//         </p>
//         <ul className="list-unstyled d-flex mx-5 ">
//           <li className="twitter-icon">
//             <a href="https://www.twitter.com">
//               <i className="bx bxl-twitter px-1 fs-1" />
//             </a>
//           </li>
//           <li className="fb-icon">
//             <a href="https://www.facebook.com/suwas.ghale.39/">
//               <i className="bx bxl-facebook-circle px-1 fs-1" />
//             </a>
//           </li>
//           <li className="insta-icon">
//             <a href="https://www.instagram.com/suwasghale10/">
//               <i className="bx bxl-instagram-alt px-1 fs-1" />
//             </a>
//           </li>
//           <li className="linkedin-icon">
//             <a href="https://www.linkedin.com">
//               <i className="bx bxl-linkedin-square px-1 fs-1" />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </footer>
//   </div>

// </>


//     </>
//   )
// }

// export default Try