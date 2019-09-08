import React, { Component } from 'react'
import $ from 'jquery'
import {Link}from 'react-router-dom'
import './Account.css'

export default class BalanceHistory extends Component {

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
			<div class="row d-flex">
				<div class="col-md-3 blue-bg text-center px-0">
					<a href="index.html" class="navbar-brand N-brand">
						{/* <img src="images/logo.png" class="d-none d-sm-none d-md-block" alt="Fantastic 3">
						<img src="images/logo-m.png" class="d-block d-sm-none" alt="Fantastic 3">
				
                 */}

                     <img src = { process.env.PUBLIC_URL + "/logo.png" }class="d-none d-sm-none d-md-block" alt="Fantastic 3"/>
                     <img src = { process.env.PUBLIC_URL + "/logo-m.png"} class="d-block d-sm-none" alt="Fantastic 3"/>

                    
                
                	</a>
					<nav class="navbar navbar-expand-lg">
						<button class="navbar-toggler taggler" type="button" data-toggle="offcanvas">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="navbar-collapse offcanvas-collapse" id="collapsingNavbar1">
							<ul class="nav flex-column text-left side-menu">
								<li class="nav-item">
									<a     onClick={function(){this.setState({open:!this.state.open})}.bind(this)}class="nav-link dropdown-toggle" href="#" data-toggle="collapse" aria-expanded="false"><span class="profile"></span>Edit Profile</a>
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
								<li class="nav-item">
									<a  onClick={function(){this.setState({wallet:!this.state.wallet})}.bind(this)} class="nav-link active dropdown-toggle" href="#" data-toggle="collapse" aria-expanded="false"><span class="my-wallet"></span>My Wallet</a>
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
								<li class="nav-item">
								
                                <Link class="nav-link"Link to={'/Mybet'}><span  class="bonuses"></span>Mybet</Link>
                                        
								</li>
								<li class="nav-item">

									{/* <a class="nav-link" href="bonuses.html"><span class="bonuses"></span>Bonuses</a> */}
                                    <Link class="nav-link"Link to={'/Bonuses'}><span  class="bonuses"></span>Bonuses</Link>
								</li>
								<li class="nav-item">
									{/* <a class="nav-link" href="#"><span class="messages"></span>Messages</a> */}
                                    <Link class="nav-link"Link to={'/Messages'}><span  class="messages"></span>messages</Link>

								</li>
							</ul>
						</div>	
					</nav>	
				</div>
				<div class="col-md-9 px-0">
					<div class="gray-bg border-bottom">
						<div class="container-fluid">
							<div class="row">
								<div class="col-12 col-sm-5 col-lg-7 px-3 py-3">
									<span class="user">Username</span>
								</div>
								<div class="col-5 col-sm-3 col-lg-2 border-left m-border px-3 py-3">
									<div class="balance">
										MAIN BALANCE
										<span>0.00 INR</span>
									</div>	
								</div>
								<div class="col-5 col-sm-3 col-lg-2 border-left px-3 py-3">
									<div class="bonus-balance">
										Bonus Balance
										<span>0.00 INR</span>
									</div>	
								</div>
								<div class="col-2 col-sm-1 col-lg-1 border-left px-3 py-3 text-center">
									<a href="#" class="sign-out"></a>
								</div>
							</div>
						</div>	
					</div>
					<div class="gray-bg">
						<div class="container-fluid px-3 py-3">
							<nav class="navbar navbar-expand-lg inner text-center text-md-left">
								<div id="navbarText" class="mx-auto mx-md-0">
									<ul class="navbar-nav mr-auto">
                                    <li class="nav-item">
											{/* <a class="nav-link active" href="deposit.html">Deposit</a> */}
                                            <Link  class="nav-link "  Link to={'/Deposit'}>Deposit</Link>
										</li>
										<li class="nav-item">
											{/* <a class="nav-link" href="withdraw.html">Withdraw</a> */}
                                            <Link   class="nav-link" Link to={'/WithDraw'}>Withdraw</Link>
										</li>
										<li class="nav-item">
											{/* <a class="nav-link" href="balance-history.html">Balance History</a> */}
                                            <Link  class="nav-link  active"  Link to={'/BalanceHistory'}>Balance History</Link>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
					<div class="pt-3 pt-md-5">
						<h1 class="inner">Balance History</h1>
						<div class="blue-bg px-3 py-3">
							<div class="row clearfix">
								<form class="form-inline">
									<div class="col-md-3">
										<label for="">Type</label>
										<input type="text" class="form-control" placeholder="All"/>
									</div>
									<div class="col-md-5">	
										<label for="">Range</label>
										<input type="text" class="form-control" placeholder="10/07/2019"/>
                                         <span class="px-4">-</span>
                                          <input type="text" class="form-control" placeholder="10/07/2019"/>
									</div>
									<div class="col-md-1">
										<button type="submit" class="reload"></button>
									</div>	
								</form>
							</div>	
						</div>
						<div class="container-fluid">
							<div class="row clearfix darkest-gray-bg d-none d-md-flex">
								<div class="col-md-8">
								
								</div>
								<div class="col-md-2 row-title">Stake</div>
								<div class="col-md-2 row-title">Returns</div>
							</div>
							<div class="row clearfix">
								<div class="col-md-8 px-3 py-3">
									<h6>Name goes here</h6>
									<span class="smallest light-gray d-block">15 July 2019, 12:00pm</span>
									<span class="smallest orange text-uppercase d-block pt-4">Single</span>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Stake: </span><strong>2000 INR</strong>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Returns: </span><strong>10000 INR</strong>
								</div>
							</div>
							<div class="row clearfix lighest-gray-bg">
								<div class="col-md-8 px-3 py-3">
									<h6>Name goes here</h6>
									<span class="smallest light-gray d-block">15 July 2019, 12:00pm</span>
									<span class="smallest orange text-uppercase d-block pt-4">Single</span>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Stake: </span><strong>2000 INR</strong>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Returns: </span><strong>10000 INR</strong>
								</div>
							</div>
							<div class="row clearfix">
								<div class="col-md-8 px-3 py-3">
									<h6>Name goes here</h6>
									<span class="smallest light-gray d-block">15 July 2019, 12:00pm</span>
									<span class="smallest orange text-uppercase d-block pt-4">Single</span>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Stake: </span><strong>2000 INR</strong>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Returns: </span><strong>10000 INR</strong>
								</div>
							</div>
							<div class="row clearfix lighest-gray-bg">
								<div class="col-md-8 px-3 py-3">
									<h6>Name goes here</h6>
									<span class="smallest light-gray d-block">15 July 2019, 12:00pm</span>
									<span class="smallest orange text-uppercase d-block pt-4">Single</span>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Stake: </span><strong>2000 INR</strong>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Returns: </span><strong>10000 INR</strong>
								</div>
							</div>
							<div class="row clearfix">
								<div class="col-md-8 px-3 py-3">
									<h6>Name goes here</h6>
									<span class="smallest light-gray d-block">15 July 2019, 12:00pm</span>
									<span class="smallest orange text-uppercase d-block pt-4">Single</span>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Stake: </span><strong>2000 INR</strong>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Returns: </span><strong>10000 INR</strong>
								</div>
							</div>
							<div class="row clearfix lighest-gray-bg">
								<div class="col-md-8 px-3 py-3">
									<h6>Name goes here</h6>
									<span class="smallest light-gray d-block">15 July 2019, 12:00pm</span>
									<span class="smallest orange text-uppercase d-block pt-4">Single</span>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Stake: </span><strong>2000 INR</strong>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Returns: </span><strong>10000 INR</strong>
								</div>
							</div>
							<div class="row clearfix">
								<div class="col-md-8 px-3 py-3">
									<h6>Name goes here</h6>
									<span class="smallest light-gray d-block">15 July 2019, 12:00pm</span>
									<span class="smallest orange text-uppercase d-block pt-4">Single</span>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Stake: </span><strong>2000 INR</strong>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Returns: </span><strong>10000 INR</strong>
								</div>
							</div>
							<div class="row clearfix darkest-gray-bg px-2 py-2 px-md-4 py-md-4 pagination">
								<div class="col-3 col-md-4 px-0">
									<a href="#" class="prev">Prev</a>
								</div>
								<div class="col-6 col-md-4 text-center px-0">
									<ul>
										<li><a href="#" class="active">1</a></li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">4</a></li>
									</ul>	
								</div>
								<div class="col-3 col-md-4 px-0 text-right">
									<a href="#" class="next">Next</a>
								</div>
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
			<div class="border-top">
				<div class="container">
					<div class="row py-4">
						<div class="col-12 col-md-6 text-left">
                        <Link Link to={'/TermsAndCondition'}>Terms &amp; Conditions</Link> &nbsp; | &nbsp;<Link Link to={'/PrivacyPolicy'}>Privacy Policy</Link>
						</div>
						<div class="col-12 col-md-6 text-right">
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
