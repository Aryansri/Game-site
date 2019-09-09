import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  $ from 'jquery'

export default class Faq extends Component {
    componentDidMount(){
        $(function () {
            'use strict'
          
            $('[data-toggle="offcanvas"]').on('click', function () {
              $('.offcanvas-collapse1').toggleClass('open')
            })
          })
    }
    render() {
        return (
            <div>
            <header className="mt-2 mt-sm-4 fixed-top">
            <div className="container-fluid px-0 text-center">
                <a href="#" class="sign-in">Sign In / Register</a>
                <nav className="navbar navbar-expand-lg orange-bg mt-4 mt-md-5">
                    <a href="index.html" class="navbar-brand">
          <img src = { process.env.PUBLIC_URL + "/logo.png" }className="d-none d-sm-none d-md-block" alt="Fantastic 3"/>
          <img src = { process.env.PUBLIC_URL + "/logo-m.png"} className="d-block d-sm-none" alt="Fantastic 3"/>

                    </a>
          <button className="navbar-toggler" type="button" data-toggle="offcanvas">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse offcanvas-collapse1" id="collapsingNavbar">
                        <ul className="navbar-nav mr-5 ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link "  Link to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">

                    <Link className="nav-link "  Link to={'/About'}>About Us</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-5 mr-auto">
                            <li className="nav-item">

                    <Link className="nav-link "  Link to={'/LiveCasino'}>Live Casino</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active " Link to={'/Faq'}>Faq</Link>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <div id="carouselExampleIndicators" className="carousel inner slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active text-center">

                </div>
            </div>
        </div>

        <section className="block dark-blue-bg">
            <div className="container-fluid pb-5">
                <h1 className="h1">FAQ</h1>
                <div className="row justify-content-md-center pb-5">
                    <div className="col-12 col-lg-6 px-4 px-sm-5">
                        <h2 className="orange">Registration</h2>
                        <div className="accordion" id="accordion1">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion1">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion1">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion1">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 px-4 px-sm-5">
                        <h2 className="orange">Placing bet &amp; Settlement</h2>
                        <div className="accordion" id="accordion2">
                            <div className="card">
                                <div className="card-header" id="headingFour">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseFour" className="collapse show" aria-labelledby="headingFour" data-parent="#accordion2">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            <div classname="card">
                                <div className="card-header" id="headingFive">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion2">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingSix">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion2">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid dashed-border pt-5">
                <div className="row justify-content-md-center py-5">
                    <div className="col-12 col-lg-6 px-4 px-sm-5">
                        <h2 className="orange">Live Bet</h2>
                        <div className="accordion" id="accordion3">
                            <div className="card">
                                <div className="card-header" id="headingSeven">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseSeven" className="collapse show" aria-labelledby="headingSeven" data-parent="#accordion3">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingEight">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordion3">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingNine">
                                    <h5 class="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordion3">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 px-4 px-sm-5">
                        <h2 className="orange">Casino</h2>
                        <div className="accordion" id="accordion4">
                            <div className="card">
                                <div className="card-header" id="headingTen">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTen" aria-expanded="true" aria-controls="collapseTen">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseTen" className="collapse show" aria-labelledby="headingTen" data-parent="#accordion4">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingEleven">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseEleven" class="collapse" aria-labelledby="headingEleven" data-parent="#accordion4">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwelve">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseTwelve" className="collapse" aria-labelledby="headingTwelve" data-parent="#accordion4">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="px-3 py-3 px-sm-5 py-sm-5 green-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6"><h1 class="black">Live Dealer Game</h1></div>
                    <div className="col-12 col-md-6 text-center"> <Link className="btn-block"Link to={'/Deposit'}>Deposit</Link>
           </div>
                </div>
            </div>
        </section>

        <footer className="text-center">
            <div className="container">
                <ul className="nav navbar-nav">
        <li className="nav-item">
                          <Link className="nav-link "  Link to={'/'}>Home</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link "  Link to={'/About'}>About Us</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link "  Link to={'/LiveCasino'}>Live Casino</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link " Link to={'/FAQ'}>Faq</Link>
                  </li>
                </ul>
                <div className="clearfix"></div>
                <div className="social-media">
                    <a href="#" target="_blank" class="facebook"></a>
                    <a href="#" target="_blank" class="twitter"></a>
                    <a href="#" target="_blank" class="youtube"></a>
                    <a href="#" target="_blank" class="instagram"></a>
                </div>
            </div>
            <div className="border-top">
                <div className="container">
                    <div className="row py-4">
                        <div className="col-12 col-sm-6 col-md-6 text-left">
                        <Link Link to={'/TermsAndCondition'}>Terms &amp; Conditions</Link> &nbsp; | &nbsp;<Link Link to={'/PrivacyPolicy'}>Privacy Policy</Link>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 text-right">
                            &copy; 2019 Fantastic 3
                        </div>
                    </div>
                </div>
            </div>
        </footer>


</div>


        )
    }
}
