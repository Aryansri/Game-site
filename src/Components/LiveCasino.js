import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'
export default class LiveCasino extends Component {
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
            <header class="mt-2 mt-sm-4 fixed-top">
			<div class="container-fluid px-0 text-center">
				<a href="#" class="sign-in">Sign In / Register</a>
				<nav class="navbar navbar-expand-lg orange-bg mt-4 mt-md-5">
					<a href="#" class="navbar-brand">
                    <img src = { process.env.PUBLIC_URL + "/logo.png" }className="d-none d-sm-none d-md-block" alt="Fantastic 3"/>
						<img src = { process.env.PUBLIC_URL + "/logo-m.png"} className="d-block d-sm-none" alt="Fantastic 3"/>

					</a>
					<button class="navbar-toggler" type="button" data-toggle="offcanvas">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="navbar-collapse offcanvas-collapse1" id="collapsingNavbar">
						<ul class="navbar-nav mr-5 ml-auto">
                        <li className="nav-item active">
								<Link className="nav-link "  Link to={'/'}>Home</Link>
							</li>
							<li className="nav-item">

                	<Link className="nav-link "  Link to={'/About'}>About Us</Link>
							</li>
						</ul>
						<ul className="navbar-nav ml-5 mr-auto">
							<li className="nav-item">

                	<Link className="nav-link  active"  Link to={'/LiveCasino'}>Live Casino</Link>
							</li>
							<li className="nav-item">
							<Link className="nav-link " Link to={'/FAQ'}>Faq</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
		<div id="carouselExampleIndicators" class="carousel inner slide" data-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active text-center">
					
				</div>
			</div>
		</div>

		<section class="block dark-blue-bg">
			<div class="container-fluid">
				<h1 class="h1">Live Casino</h1>
				<div>
					{/* <!-- Place this code where you'd like the game to appear --> */}
					<div class="miniclip-game-embed" data-game-name="8-ball-pool-multiplayer" data-theme="5" data-width="100%" data-height="680" data-language="en"><a href="https://www.miniclip.com/games/8-ball-pool-multiplayer/">Play 8 Ball Pool</a></div>
					
					{/* <!-- Insert this code before your </body> tag --> */}
					<script src="//static.miniclipcdn.com/js/game-embed.js"></script>
				</div>
			</div>
		</section>
		
		<section class="px-3 py-3 px-sm-5 py-sm-5 green-bg">
			<div class="container">
				<div class="row">
					<div class="col-12 col-md-6"><h1 class="black">Live Dealer Game</h1></div>
					<div class="col-12 col-md-6 text-center"><Link className="btn-block"Link to={'/Deposit'}>Deposit</Link></div>
				</div>
			</div>
		</section>

		<footer class="text-center">
			<div class="container">
				<ul class="nav navbar-nav">
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
				<div class="clearfix"></div>
				<div class="social-media">
					<a href="#" target="_blank" class="facebook"></a>
					<a href="#" target="_blank" class="twitter"></a>
					<a href="#" target="_blank" class="youtube"></a>
					<a href="#" target="_blank" class="instagram"></a>
				</div>
			</div>
			<div class="border-top">
				<div class="container">
					<div class="row py-4">
						<div class="col-12 col-sm-6 col-md-6 text-left">
						<Link Link to={'/TermsAndCondition'}>Terms &amp; Conditions</Link> &nbsp; | &nbsp;<Link Link to={'/PrivacyPolicy'}>Privacy Policy</Link>						</div>
						<div class="col-12 col-sm-6 col-md-6 text-right">
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
