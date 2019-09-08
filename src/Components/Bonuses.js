import React, { Component } from 'react'
import './Account.css'
import {Link} from 'react-router-dom'
import $ from 'jquery'
export default class Bonuses extends Component {
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
				<div class="col-12 col-lg-3 blue-bg text-center px-0">
					<a href="#" class="navbar-brand N-brand">
						
                    

                    
                    <img src = { process.env.PUBLIC_URL + "/logo.png" }class="d-none d-sm-none d-lg-block" alt="Fantastic 3"/>
                     <img src = { process.env.PUBLIC_URL + "/logo-m.png"} class="d-block d-sm-block d-lg-none" alt="Fantastic 3"/>

                    
                    
                    </a>
					
                    
                    
                    <nav class="navbar navbar-expand-lg">
						<button class="navbar-toggler taggler" type="button" data-toggle="offcanvas">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="navbar-collapse offcanvas-collapse" id="collapsingNavbar1">
							<ul class="nav flex-column text-left side-menu">
								<li class="nav-item">
									<a   onClick={function(){this.setState({open:!this.state.open})}.bind(this)}class="nav-link dropdown-toggle" href="#" data-toggle="collapse" aria-expanded="false"><span class="profile"></span>Edit Profile</a>
                                    {this. state.open &&<ul  id="editProfile">
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
									<a   onClick={function(){this.setState({wallet:!this.state.wallet})}.bind(this)}  class="nav-link dropdown-toggle" href="#" data-toggle="collapse" aria-expanded="false"><span class="my-wallet"></span>My Wallet</a>
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
											
                                            <Link  Link to={'/BalanceHistory'}>Balance History</Link>
										</li>
									</ul>}
								</li>
								<li class="nav-item">
								
                                <Link class="nav-link"Link to={'/Mybet'}><span  class="bonuses"></span>My Bets</Link>
                                        
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
				<div class="col-12 col-lg-9 px-0">
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
					<div class="container-fluid pb-5">
						<h1 class="inner mt-5">Bonuses</h1>
						<div class="row clearfix darkest-gray-bg d-none d-md-flex">
							<div class="col-md-5 row-title">Bonus Name</div>
							<div class="col-md-3 row-title">Amount</div>
							<div class="col-md-3 row-title">Status</div>
							<div class="col-md-1 row-title"></div>
						</div>
						<div class="accordion bonuses" id="accordionExample1">
							<div class="cardd mt-2">
								<div class="card-header" id="headingOne">
									<h5 class="mb-0">
										<div class="row">
											<div class="col-md-5">
												<h6>100% First Deposit Bonus up to 100 EUR</h6>
											</div>
											<div class="col-md-3 text-left text-md-center dark-gray">
												<span class="row-title d-inline d-md-none">Amount: </span><strong>-</strong>
											</div>
											<div class="col-md-3 text-left text-md-center dark-gray">
												<span class="row-title d-inline d-md-none">Status: </span><strong>Available Bonus</strong>
											</div>
											<div class="col-md-1">
												<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												</button>
											</div>
										</div>
									</h5>
								</div>
								<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample1">
									<div class="card-body">
										<div class="blue-bg px-3"><strong>Starting Date:</strong> 05/06/2019 05:30 &nbsp; | &nbsp; <strong>Ending Date:</strong> 01/12/2021 05:30</div>
										<div class="clearfix pt-3">	
											<div class="float-left"><strong>Wagered:</strong> 0 USD</div> <div class="float-right"><strong>Remaining:</strong> 0 USD</div>
										</div>
										<hr/>
										<div class="row mx-1">
											<div class="col-md-4 light-gray-bg d-none d-md-flex">
												<strong>Time to Wager</strong>
											</div>
											<div class="col-md-4 light-gray-bg d-none d-md-flex">
												<strong>Wagering Req</strong>
											</div>
											<div class="col-md-4 light-gray-bg d-none d-md-flex">
												<strong>Min/Max Deposit</strong>
											</div>
											<div class="col-md-4">
												<span class="row-title d-inline d-md-none">Time to Wager: </span>30 days
											</div>
											<div class="col-md-4">
												<span class="row-title d-inline d-md-none">Wagering Req: </span>35x
											</div>
											<div class="col-md-4">
												<span class="row-title d-inline d-md-none">Min/Max Deposit: </span>10 USD / 100 USD
											</div>
										</div>
										<hr/>
										<div class="clearfix pt-3">	
											<div class="float-left">
												<button class="btn btn-light small mt-0 mr-5" type="submit">Claim Bonus</button>
											</div>
											<div class="float-left pt-3">
												<p>Make your first deposit and the bonus will be activated automatically. 100 Free Spins on Starburst will be distributed over 5 days. Good luck.</p>
											</div>
										</div>		
									</div>
								</div>
							</div>
							<div class="card mt-2">
								<div class="card-header" id="headingTwo">
									<h5 class="mb-0">
										<div class="row">
											<div class="col-md-5">
												<h6>100% First Deposit Bonus up to 100 EUR</h6>
											</div>
											<div class="col-md-3 text-left text-md-center dark-gray">
												<span class="row-title d-inline d-md-none">Amount: </span><strong>-</strong>
											</div>
											<div class="col-md-3 text-left text-md-center dark-gray">
												<span class="row-title d-inline d-md-none">Status: </span><strong>Available Bonus</strong>
											</div>
											<div class="col-md-1">
												<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
												</button>
											</div>
										</div>
									</h5>
								</div>
								<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample1">
									<div class="card-body">
										<div class="blue-bg px-3"><strong>Starting Date:</strong> 05/06/2019 05:30 &nbsp; | &nbsp; <strong>Ending Date:</strong> 01/12/2021 05:30</div>
										<div class="clearfix pt-3">	
											<div class="float-left"><strong>Wagered:</strong> 0 USD</div> <div class="float-right"><strong>Remaining:</strong> 0 USD</div>
										</div>
										<hr/>
										<div class="row mx-1">
											<div class="col-md-4 light-gray-bg d-none d-md-flex">
												<strong>Time to Wager</strong>
											</div>
											<div class="col-md-4 light-gray-bg d-none d-md-flex">
												<strong>Wagering Req</strong>
											</div>
											<div class="col-md-4 light-gray-bg d-none d-md-flex">
												<strong>Min/Max Deposit</strong>
											</div>
											<div class="col-md-4">
												<span class="row-title d-inline d-md-none">Time to Wager: </span>30 days
											</div>
											<div class="col-md-4">
												<span class="row-title d-inline d-md-none">Wagering Req: </span>35x
											</div>
											<div class="col-md-4">
												<span class="row-title d-inline d-md-none">Min/Max Deposit: </span>10 USD / 100 USD
											</div>
										</div>
										<hr/>
										<div class="clearfix pt-3">	
											<div class="float-left">
												<button class="btn btn-light small mt-0 mr-5" type="submit">Claim Bonus</button>
											</div>
											<div class="float-left pt-3">
												<p>Make your first deposit and the bonus will be activated automatically. 100 Free Spins on Starburst will be distributed over 5 days. Good luck.</p>
											</div>
										</div>
									</div>
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
