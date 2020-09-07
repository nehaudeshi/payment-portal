import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PaymentOption = (props) => {
  return (
    <div className="card text-center p-3">
        <span>
            <FontAwesomeIcon icon={props.icon} size="6x"/>
        </span>
        <span className="mt-2">
            <h6>{props.name}</h6>
        </span>
    </div>
  );
}

export default PaymentOption;
