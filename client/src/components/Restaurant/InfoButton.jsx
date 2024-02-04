import React from 'react';
import classnames from 'classnames';

const InfoButton = ({ children, ...props }) => {
  return (
    <button
      className={classnames(
        "flex items-center gap-3 border-gray-400 px-4 py-2 rounded-md border-solid border-2 hover:bg-gray-100 transition duration-200 ease-in-out",
        {
          "bg-zomato-400 text-white border-none hover:bg-zomato-500 transition duration-200 ease-in-out": props.isActive
        }
      )}>
      {children}
    </button>
  )
}

export default InfoButton