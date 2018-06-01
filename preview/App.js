/* eslint-disable no-console */

import React from 'react';
import ReactDOM from 'react-dom';
import NewMemberMemory from '../src/js/NewMemberMemory';

console.log('shmoop');

// const test = <div>this is a sentence</div>

if (typeof window !== 'undefined') {
  ReactDOM.render( 
    <NewMemberMemory />,
    document.getElementById('apptastic'));
}
