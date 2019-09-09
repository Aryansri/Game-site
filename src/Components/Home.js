import React, { Component } from 'react'
import './Home.css' 
import {Link} from 'react-router-dom'
 import $ from 'jquery'

export default class Home extends Component {
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
				<a href="#" className="sign-in">Sign In / Register</a>
				<nav className="navbar navbar-expand-lg orange-bg mt-4 mt-md-5">
					<a href="index.html" className="navbar-brand">
						<img src = { process.env.PUBLIC_URL + "/logo.png" }className="d-none d-sm-none d-md-block" alt="Fantastic 3"/>
						<img src = { process.env.PUBLIC_URL + "/logo-m.png"} className="d-block d-sm-none" alt="Fantastic 3"/>


          </a>
					<button className="navbar-toggler" type="button" data-toggle="offcanvas">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="navbar-collapse offcanvas-collapse1" id="collapsingNavbar">
						<ul className="navbar-nav mr-5 ml-auto">
							<li className="nav-item active">
								<Link className="nav-link active"  Link to={'/'}>Home</Link>
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
							<Link className="nav-link " Link to={'/FAq'}>Faq</Link>
							</li>
							
							
						</ul>
					</div>
				</nav>
			</div>
		</header>
		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item first active text-center">
					<div className="carousel-caption">
						<h1>Live Dealer Game</h1>

                          <Link className="btn-dark"Link to={'/Deposit'}>Deposit</Link>


					</div>
				</div>
			</div>
		</div>

		<section className="grass-bg">
			<div className="scattered-dice">
				<div className="container text-center">
					<div className="col-12 col-md-5 col-lg-4 dark-gray-bg block px-4 mx-auto position-relative">
						<h1>Fantastic 3</h1>
						<p className="px-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<div className="coin-stack"></div>
					</div>
				</div>
			</div>
		</section>
		<section className="text-center yellow-bg">
			<div className="block round-bg pb-3">
				<div className="container text-center pb-5 px-0">
					<div className="table-bg mt-5 mb-0 mb-sm-5 mx-3 mx-sm-0">
						<div className="tips tip1">Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>
						<div className="tips tip2">Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>
						<div className="tips tip3">Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>
						<div className="tips tip4">Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>
						<div className="tips tip5">Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>
						<div className="tips tip6">Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>
					</div>
				</div>
			</div>

        <Link  className="btn-primary"Link to={'/MyBet'}>Go for it</Link>
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
