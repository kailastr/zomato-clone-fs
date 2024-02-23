import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import classnames from 'classnames';

const MenuCategory = (props) => {
    const { _id } = useParams();
    return (
        <>
            <a
                className={classnames("py-2 px-1", {
                    "text-zomato-400 bg-zomato-50 border-r-4 border-zomato-400": props.isActive
                })}
                onClick={props.onClickHandler}
                href={`/restaurant/${_id}/order-online/#${props.target}`}
                id={props.name}
            >
                {props.name} ({props.items.length})
            </a>
        </>
    )
}

export default MenuCategory