import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ item }) => {
    return (
        <div className="my-4 overflow-hidden bg-white border rounded shadow-lg ">
            <h3 className="my-2 text-xl font-bold text-center text-white cah3italize">
                <span className="text-transparent bg-gradient-to-r bg-clip-text from-red-400 to-blue-400">{item.title}</span>
            </h3>
            <figure>
                <img className="w-full bg-cover" loading="lazy" src={item.images.original.url} alt={item.title} />
            </figure>
        </div>
    )
}
Item.propTypes = {
    item: PropTypes.object.isRequired,
}

export default Item;