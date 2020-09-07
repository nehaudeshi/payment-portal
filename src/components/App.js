import React, {useState, useEffect} from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'jquery/dist/jquery.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'
import '../App.css';
import { faCreditCard, faWallet ,faUniversity } from '@fortawesome/free-solid-svg-icons'
import PaymentOption from './PaymentOption';
import Card from './Payments/Card';
import UPI from './Payments/UPI';
import Netbanking from './Payments/Netbanking';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(1)
  const [accDetails, setAccDetails] = useState({})

  useEffect(() => {
    setAccDetails({
      accId : "AJNDFIJ9845QFJ",
      name : "John Doe",
      email : "johndoe@abc.com",
      contact : "9427594285",
      date: new Date(Date.now()),
      invoiceId : "E00067",
      invoiceAmt : 2510.01
    })
  },[]) 

  useEffect(() => {
    for(let card in document.getElementsByClassName("hoverCard")){
      if(document.getElementsByClassName("hoverCard")[card].style){
        if(card == selectedOption-1){
          document.querySelectorAll(".hoverCard .card")[card].style.color = "white"
          document.querySelectorAll(".hoverCard .card")[card].style.background = "#007BFF"
        } else {
          document.querySelectorAll(".hoverCard .card")[card].style.background = "white"
          document.querySelectorAll(".hoverCard .card")[card].style.color = "black"
        }
      }
    }
  },[selectedOption])

  return (
    <div>
      <Header/>
      <div className="container mt-5">
        <div className="card text-center table-responsive">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Invoice Date</th>
                <th>Invoice ID</th>
                <th>Invoice Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{accDetails.name }</td>
                <td>{accDetails.date ? accDetails.date.getDate() + "/" + (accDetails.date.getMonth()+1) + "/" + accDetails.date.getFullYear() : null}</td>
                <td>{accDetails.invoiceId}</td>
                <td>INR {accDetails.invoiceAmt}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container">
          <div className="card mt-5">
            <div className="card-header text-center">
              <h4>Choose Payment Option</h4>
              <div className="row">
                <div className="col-md-4 hoverCard mb-1" onClick={() => setSelectedOption(1)}>
                  <PaymentOption name="Debit Card / Credit Card" icon={faCreditCard}/>
                </div>
                <div className="col-md-4 hoverCard mb-1" onClick={() => setSelectedOption(2)}>
                  <PaymentOption name="BHIM UPI" icon={faWallet}/>
                </div>
                <div className="col-md-4 hoverCard mb-1" onClick={() => setSelectedOption(3)}>
                  <PaymentOption name="Netbanking" icon={faUniversity}/>
                </div>
              </div>
            </div>
            <div className="card-body">
                  {selectedOption === 1 && <Card account={accDetails}/>}
                  {selectedOption === 2 && <UPI account={accDetails}/>}
                  {selectedOption === 3 && <Netbanking account={accDetails}/>}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
