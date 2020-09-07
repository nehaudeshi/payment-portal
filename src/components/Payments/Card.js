import React, { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

const Card = (props) => {
    const [expiryMonth] = useState(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
    const [expiryYear] = useState(["2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"])
    const [alert, setAlert] = useState({
        show: false,
        basicTitle:'',
        basicType:"default"
    })

    const onSubmit = (event) => {
        event.preventDefault()
        var body = {
            "entity": "event",
            "account_id": props.account.accId,
            "event": "order.paid",
            "contains": [
              "payment",
              "order"
            ],
            "payload": {
              "payment": {
                "entity": {
                  "id": "pay_DESp9bgForNoUd",
                  "entity": "payment",
                  "amount": props.account.invoiceAmt,
                  "currency": "INR",
                  "status": "captured",
                  "order_id": props.account.invoiceId,
                  "invoice_id": props.account.invoiceId,
                  "international": false,
                  "method": "card",
                  "amount_refunded": 0,
                  "refund_status": null,
                  "captured": true,
                  "description": null,
                  "card_id": "card_DESp9fNnu0RoNc",
                  "card": {
                    "id": "card_DESp9fNnu0RoNc",
                    "entity": "card",
                    "name": document.getElementById("fullname").value,
                    "cardNo": document.getElementById("cardNumber").value,
                    "cvc": document.getElementById("cvv").value,
                    "network": "Visa",
                    "type": "debit",
                    "issuer": null,
                    "international": false,
                    "emi": false
                  },
                  "bank": null,
                  "wallet": null,
                  "vpa": null,
                  "email": props.account.email,
                  "contact": props.account.contact,
                  "notes": [],
                  "fee": 2,
                  "tax": 0,
                  "error_code": null,
                  "error_description": null,
                  "created_at": props.account.date
                }
              },
              "order": {
                "entity": {
                  "id": "order_DESoU0U4ikYA19",
                  "entity": "order",
                  "amount": props.account.invoiceAmt,
                  "amount_paid": props.account.invoiceAmt,
                  "amount_due": 0,
                  "currency": "INR",
                  "receipt": "rcptid #1",
                  "offer_id": null,
                  "status": "paid",
                  "attempts": 1,
                  "notes": [],
                  "created_at": props.account.date
                }
              }
            },
            "created_at": Date.now()
        }

        // Since there is no backend and no API, the POST call fetch code has been commented out below
        
        // fetch('',{
        //     method:"post",
        //     headers:{
        //         'Accept': 'application/json',
        //         'Content-type': 'application/json',
        //     },
        //     body: JSON.stringify(body)
        // }).then(result => {
        //     result.json().then(response => {
        //     })
        // })

        console.log(body)

        setAlert({ show: true, basicType:'success', basicTitle:'Payment Successful' })

    }


    const closeAlert = () => {
        setAlert({
            show: false
        });
    }

  return (
    <form className="row formStyle" onSubmit={onSubmit}>
         <SweetAlert
            show={alert.show}
            type={alert.basicType}
            title={alert.basicTitle}
            onConfirm={closeAlert}
        >
            Please Check Console for Payload
        </SweetAlert>
        <div className="form-group col-12">
            <label>Full Name</label>
            <input className="form-control" id="fullname" type="text" required/>
        </div>
        <div className="form-group col-9">
            <label>Card Number</label>
            <input className="form-control" id="cardNumber" type="text" maxLength="16" required/>
        </div>
        <div className="form-group col-3 p-r-0">
            <label>CVV</label>
            <input className="form-control" id="cvv" type="text" maxLength="4" required/>
        </div>
        <div className="col-12">
        <label className="col-form-label p-t-0">Expiration Date</label>
        </div>
        <div className="form-group col-6 p-r-0">
        <select className="form-control" id="expiryMonth" size="1">
            {expiryMonth.map((month,i) => <option value={i+1}>{month}</option>)}
        </select>
        </div>
        <div className="form-group col-6">
        <select className="form-control" id="expiryYear" size="1">
            {expiryYear.map((year,i) => <option value={year}>{year}</option>)}
        </select>
        </div>
        <div className="col-12 text-center mt-3">
            <button className="btn btn-primary" type="submit">Pay INR 2,510.01</button>
        </div>
    </form>
  );
}

export default Card;
