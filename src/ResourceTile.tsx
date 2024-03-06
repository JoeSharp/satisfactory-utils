import React from 'react';
import { Resource } from './types';

interface Props {
  resource: Resource;
  onSelect: (resource: Resource) => void;
}

const ResourceTile: React.FC<Props> = ({ resource, onSelect }) => {

  const onClick = React.useCallback(() => onSelect(resource), [resource, onSelect]);

  return <div className='resource-tile' role='button'>
    Resource: {resource.name}
    {resource.image && <img src={resource.image}></img>}
    <button onClick={onClick}>Select</button>
  </div>
}

export default ResourceTile;
