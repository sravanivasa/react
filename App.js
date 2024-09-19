import React from 'react';

const heading = React.createElement("h1",{id : "heading"},"hello world form React");
// we need to put this heading in our div i.e root for this first create the root ele
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);