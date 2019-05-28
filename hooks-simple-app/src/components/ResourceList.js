import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ul>
      {resources.map(i => (
        <li key={i.id}>{i.title}</li>
      ))}
    </ul>
  );
}

export default ResourceList;
