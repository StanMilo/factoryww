import React from 'react';

const TableHeader = (props) => {
    const element = props.elements[0];

    return (
      <>
        {Object.keys(element).map((key, index) => <th className="thead" key={index}>{key.toUpperCase()}</th>)}
      </>
    )
}

export default TableHeader