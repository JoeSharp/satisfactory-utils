import React from 'react';
import { RESOURCES } from './resources';
import ResourceTile from './ResourceTile';
import { Resource } from './types';
import RequiresTree from './RequiresTree';

const App: React.FC = () => {
  const [resource, setResource] = React.useState<Resource>();

  return (
    <>
      <h1>Satisfactory Utilities</h1>

      <h2>Choose a Resource</h2>
      <div className='resource-group'>
        {RESOURCES
          .filter(r => r.requires.length > 0)
          .map(r => <ResourceTile key={r.name} resource={r} onSelect={setResource} />)}
      </div>

      <h3>How to build {resource && resource.name}</h3>
      {resource && <RequiresTree resource={resource} />}
   </>
  )
}

export default App
