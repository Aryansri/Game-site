import React, { Component } from 'react'
import Home from './Components/Home';
// import 'App.css'
import { BrowserRouter, Route } from 'react-router-dom'

// import Mybet from './Components/Mybet';
import About from './Components/About';
import Faq from './Components/Faq';

// import Mybet from './Components/Mybet';
import LiveCasino from './Components/LiveCasino';
import TermsAndCondition from './Components/TermsAndCondition';
import PrivacyPolicy from './Components/PrivacyPolicy';
// import $ from 'jquery'
import Profile from './Components/Profile'
import Deposit from './Components/Deposit';
import WithDraw from './Components/WithDraw';
import Notifications from './Components/Notifications';
import Documents from './Components/Documents';
import Bonuses from './Components/Bonuses';
import BalanceHistory from './Components/BalanceHistory';
import ChangePassword from './Components/ChangePassword';
import Mybet from './Components/Mybet';

export default class App extends Component {
  
  render() {
    return (
  <BrowserRouter >
        

            <Route exact path = '/' component = { Home }/>
            <Route path = '/About' component = {About }   />
            <Route path = '/FAQ'component = { Faq }/>
      
            <Route path = '/LiveCasino' component = { LiveCasino } />
      <Route path='/TermsAndCondition' component= { TermsAndCondition }/>
      <Route path='/PrivacyPolicy' component= { PrivacyPolicy }/>  
      <Route path='/Profile' component= { Profile }/>  
      <Route path='/WithDraw' component= { WithDraw }/>  
      <Route path='/Notifications' component= { Notifications }/> 
      <Route path='/Documents' component= { Documents }/> 
      <Route path='/Bonuses' component= { Bonuses }/> 
      <Route path='/BalanceHistory' component= { BalanceHistory }/> 
      <Route path='/Changepassword' component= { ChangePassword }/> 
      <Route path='/Deposit' component= { Deposit }/> 
      <Route path='/Mybet' component= { Mybet }/> 

      </BrowserRouter>

  
  
    )
  }
}
