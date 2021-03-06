import React, { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

const UPI = (props) => {
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
                  "id": "pay_DESyzxuld02Zul",
                  "entity": "payment",
                  "amount": props.account.invoiceAmt,
                  "currency": "INR",
                  "status": "captured",
                  "order_id": props.account.invoiceId,
                  "invoice_id": props.account.invoiceId,
                  "international": false,
                  "method": "upi",
                  "amount_refunded": 0,
                  "refund_status": null,
                  "captured": true,
                  "description": null,
                  "card_id": null,
                  "bank": null,
                  "wallet": null,
                  "vpa": document.getElementById("upiId").value,
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
                  "id": props.account.invoiceId,
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
            <input className="form-control" type="text" required/>
        </div>
        <div className="form-group col-12">
            <label>UPI ID</label>
            <input className="form-control" id="upiId" type="text" required/>
        </div>
        <div className="col-12 text-center mt-3">
            <button className="btn btn-primary" type="submit">Pay INR 2,510.01</button>
        </div>
    </form>
    );
}

export default UPI;
