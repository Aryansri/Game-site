import React, { Component } from 'react'
import $ from 'jquery'
import {Link} from 'react-router-dom'

export default class Notifications extends Component {

    constructor(props) {
        super(props);
        this.state = {
          open: false,
          wallet:false
        }
      }

    componentDidMount(){

        $(function () {
          //    console.log('toglle called')
          'use strict'
        
          $('[data-toggle="offcanvas"]').on('click', function () {
            $('.offcanvas-collapse').toggleClass('open')
          })
        })
        $(document).ready(function(){
            $('[data-toggle=offcanvas]').click(function() {
                $('.row-offcanvas').toggleClass('active');
                //$('.collapse').toggleClass('in').toggleClass('hidden-xs').toggleClass('visible-xs');
            });
        });
        
     }
    render() {
        return (
            <div>
                

                <div class="container-fluid">
			<div className="row d-flex">
				<div className="col-12 col-lg-3 blue-bg text-center px-0">
					<a href="#" class="navbar-brand N-brand">
						{/* <img src="images/logo.png" class="d-none d-sm-none d-lg-block" alt="Fantastic 3">
                        <img src="images/logo-m.png" class="d-block d-sm-block d-lg-none" alt="Fantastic 3"> */}
                        
                        <img src = { process.env.PUBLIC_URL + "/logo.png" }className="d-none d-sm-none d-lg-block" alt="Fantastic 3"/>
                     <img src = { process.env.PUBLIC_URL + "/logo-m.png"} className="d-block d-sm-block d-lg-none" alt="Fantastic 3"/>

                    
					
                    </a>
					<nav className="navbar navbar-expand-lg">
						<button className="navbar-toggler taggler" type="button" data-toggle="offcanvas">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="navbar-collapse offcanvas-collapse" id="collapsingNavbar1">
							<ul className="nav flex-column text-left side-menu">
								<li className="nav-item">
									<a   onClick={function(){this.setState({open:!this.state.open})}.bind(this)}class="nav-link active dropdown-toggle" href="#" data-toggle="collapse" aria-expanded="false"><span class="profile"></span>Edit Profile</a>
									 {this.state.open &&<ul  id="editProfile">
                                    <li >
											{/* <a href="profile.html">Profile</a> */}
                                            <Link  Link to={'/Profile'}>Profile</Link>

										</li>
										<li>
											{/* <a href="documents.html">Documents</a> */}
                                            <Link Link to={'/Documents'}>Documents</Link>
										</li>
										<li>
											{/* <a href="change-password.html">Change Password</a> */}
                                            <Link Link to={'/ChangePassword'}>Change-Password</Link>
										</li>
										<li>
											{/* <a href="notification.html">Notifications</a> */}
                                            <Link Link to={'/Notifications'}>Notification</Link>
										</li>
									</ul>}
								</li>
								<li className="nav-item">
									<a  onClick={function(){this.setState({wallet:!this.state.wallet})}.bind(this)} class="nav-link dropdown-toggle" href="#" data-toggle="collapse" aria-expanded="false"><span class="my-wallet"></span>My Wallet</a>
									{this.state.wallet &&<ul  id="myWallet">
                                    <li>
											{/* <a href="deposit.html">Deposit</a> */}
                                            <Link  Link to={'/Deposit'}>Deposit</Link>
										</li>
										<li>
											{/* <a href="withdraw.html">Withdraw</a> */}
                                            <Link  Link to={'/WithDraw'}>Withdraw</Link>
										</li>
										<li>
											{/* <a href="balance-history.html">Balance History</a> */}
                                            <Link  Link to={'/BalanceHistory'}>Balance History</Link>
										</li>
									</ul>}
								</li>
								<li className="nav-item">
								
                                <Link className="nav-link"Link to={'/Mybet'}><span  class="bonuses"></span>My Bets</Link>
                                        
								</li>
								<li className="nav-item">

									{/* <a class="nav-link" href="bonuses.html"><span class="bonuses"></span>Bonuses</a> */}
                                    <Link className="nav-link"Link to={'/Bonuses'}><span  class="bonuses"></span>Bonuses</Link>
								</li>
								<li className="nav-item">
									{/* <a class="nav-link" href="#"><span class="messages"></span>Messages</a> */}
                                    <Link className="nav-link"Link to={'/Messages'}><span  class="messages"></span>messages</Link>

								</li>
							</ul>
						</div>
					</nav>
				</div>
				<div className="col-12 col-lg-9 px-0">
					<div className="gray-bg border-bottom">
						<div className="container-fluid">
							<div className="row">
								<div className="col-12 col-sm-5 col-lg-7 px-3 py-3">
									<span className="user">Username</span>
								</div>
								<div className="col-5 col-sm-3 col-lg-2 border-left m-border px-3 py-3">
									<div className="balance">
										MAIN BALANCE
										<span>0.00 INR</span>
									</div>	
								</div>
								<div className="col-5 col-sm-3 col-lg-2 border-left px-3 py-3">
									<div className="bonus-balance">
										Bonus Balance
										<span>0.00 INR</span>
									</div>	
								</div>
								<div className="col-2 col-sm-1 col-lg-1 border-left px-3 py-3 text-center">
									<a href="#" class="sign-out"></a>
								</div>	
							</div>
						</div>	
					</div>
					<div className="gray-bg">
						<div className="container-fluid px-3 py-3">
							<nav className="navbar navbar-expand-lg inner text-center text-md-left">
								<div id="navbarText" class="mx-auto mx-md-0">
									<ul className="navbar-nav mr-auto">
									<li className="nav-item">
										
                                            <Link  className="nav-link " Link to={'/Profile'}>Profile</Link>


										</li>
										<li className="nav-item">
									
                                            <Link  className="nav-link " Link to={'/Documents'}>Documents</Link>
										</li>
										<li class="nav-item">		
                                            <Link  className="nav-link " Link to={'/ChangePassword'}>Change Password</Link>
										</li>
										<li class="nav-item">
                                            <Link  className="nav-link active" Link to={'/Notifications'}>Notifications</Link>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
					<div className="container-fluid px-3 py-3 px-md-5 py-md-5">
						<h1 className="inner">Notifications</h1>
						<div className="light-gray-bg px-3 py-3 px-md-5 py-md-5">
							<p>
								Notify me about news and offers by
							</p>
							<div className="row">
								<form className="inner-form col-12">
									<div className="border px-3 mb-3">
										<div className="row pt-2">
											<div className="col-6 col-md-6">
												Internal Message
											</div>
											<div className="col-6 col-md-6 text-right">
												<div className="custom-control custom-radio custom-control-inline">
												  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
												  <label className="custom-control-label" for="customRadioInline1"></label>
												</div>
												<div className="custom-control custom-radio custom-control-inline">
												  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"/>
												  <label className="custom-control-label" for="customRadioInline2"></label>
												</div>
											</div>
										</div>
									</div>
									<div className="border px-3 mb-3">
										<div className="row pt-2">
											<div className="col-6 col-md-6">
												Push Notification
											</div>
											<div className="col-6 col-md-6 text-right">
												<div className="custom-control custom-radio custom-control-inline">
												  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
												  <label className="custom-control-label" for="customRadioInline1"></label>
												</div>
												<div className="custom-control custom-radio custom-control-inline">
												  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"/>
												  <label className="custom-control-label" for="customRadioInline2"></label>
												</div>
											</div>
										</div>
									</div>
									<div className="border px-3 mb-3">
										<div className="row pt-2">
											<div className="col-6 col-md-6">
												E-mail
											</div>
											<div className="col-6 col-md-6 text-right">
												<div className="custom-control custom-radio custom-control-inline">
												  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
												  <label className="custom-control-label" for="customRadioInline1"></label>
												</div>
												<div className="custom-control custom-radio custom-control-inline">
												  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"/>
												  <label className="custom-control-label" for="customRadioInline2"></label>
												</div>
											</div>
										</div>
									</div>
									<div className="border px-3 mb-3">
										<div className="row pt-2">
											<div className="col-6 col-md-6">
												SMS
											</div>
											<div className="col-6 col-md-6 text-right">
												<div className="custom-control custom-radio custom-control-inline">
												  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
												  <label className="custom-control-label" for="customRadioInline1"></label>
												</div>
												<div className="custom-control custom-radio custom-control-inline">
												  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"/>
												  <label className="custom-control-label" for="customRadioInline2"></label>
												</div>
											</div>
										</div>
									</div>
									<div className="border px-3 mb-3">
										<div className="row pt-2">
											<div className="col-6 col-md-6">
												Phone Call
											</div>
											<div className="col-6 col-md-6 text-right">
												<div className="custom-control custom-radio custom-control-inline">
												  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
												  <label className="custom-control-label" for="customRadioInline1"></label>
												</div>
												<div className="custom-control custom-radio custom-control-inline">
												  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"/>
												  <label className="custom-control-label" for="customRadioInline2"></label>
												</div>
											</div>
										</div>
									</div>
									<hr class="my-3 my-md-5"/>
									<button className="btn btn-light" type="submit">Confirm</button>
								</form>
							</div>
						</div>
					</div>	
				</div>
			</div>
		</div>
		<footer class="text-center">
			<div class="container">
				<div class="social-media mt-3">
					<a href="#" target="_blank" class="facebook"></a>
					<a href="#" target="_blank" class="twitter"></a>
					<a href="#" target="_blank" class="youtube"></a>
					<a href="#" target="_blank" class="instagram"></a>
				</div>
			</div>
			<div className="border-top">
				<div className="container">
					<div className="row py-4">
						<div className="col-12 col-md-6 text-left">
                        <Link Link to={'/TermsAndCondition'}>Terms &amp; Conditions</Link> &nbsp; | &nbsp;<Link Link to={'/PrivacyPolicy'}>Privacy Policy</Link>
						</div>
						<div className="col-12 col-md-6 text-right">
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
