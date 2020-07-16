import React from 'react';

function ErrorMessage(props) {
  return (
    <div className="error-message">
      {props.children}
    </div>
  );
}

export default ErrorMessage;
