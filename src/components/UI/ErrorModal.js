import React from 'react';
import Card from './Card';
import Button from './Button';

const ErrorModal = ({onConfirm}) => {
  return (
    <Card>
        <div className="backdrop"></div>
        <div className="errorModal">
            <h2>An error has occured</h2>
            <p>One or both of your fields is empty</p>
            <button onClick={onConfirm}>Okay</button>
        </div>
    </Card>
  )
}

export default ErrorModal