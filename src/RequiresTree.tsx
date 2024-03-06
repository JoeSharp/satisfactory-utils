import React from 'react';
import { Resource } from './types';
import { RESOURCES } from './resources';

interface Props {
  resource: Resource;
}

const RequiresTree: React.FC<Props> = ({resource}) => {
  
  return <div className='tree-node'>
    {resource.requires
      .map(r => RESOURCES.find(res => res.name === r))
      .map(r => r && <div className='resource-node' key={r.name}>{r.name}
        {r && <RequiresTree resource={r} />}
      </div>)}
  </div>
}

export default RequiresTree;
