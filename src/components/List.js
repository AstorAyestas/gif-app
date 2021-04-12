import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import Item from './Item';
const List = ({ url }) => {
    const { data, loading } = useFetch(url)
    return (
        <>
            {
                loading ? <div>Loading...</div> :
                    data && data.map(item =>
                        <Item key={item.id} item={item} />
                    )
            }
        </>
    )
}

List.propTypes = {
    url: PropTypes.string.isRequired,
}

export default List

