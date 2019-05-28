import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

      setResources(response.data)
    })(resource);
  }, [resource])

  return (
    <ul>
      {resources.map(i => (
        <li key={i.id}>{i.title}</li>
      ))}
    </ul>
  );
}

export default ResourceList;
