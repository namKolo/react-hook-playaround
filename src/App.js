import React, { useState, useMemo } from 'react';

import MasonryLayout from './Masonry';

const App = () => {
  const [childHeight, setChildHeight] = useState(0);
  const [items, setItems] = useState([450, 230]);
  const children = useMemo(
    () =>
      items.map((height, index) => (
        <div
          style={{
            height,
            display: 'flex',
            alignItems: 'center',
            borderRadius: 10,
            justifyContent: 'center',
            background: 'linear-gradient(45deg, #f05f70, #164b78)',
            color: 'white',
            width: 200
          }}
        >
          Hello {index}
        </div>
      )),
    [items]
  );

  return (
    <div style={{ width: '100vw', minHeight: '100vh', display: 'flex', padding: '20px' }}>
      <MasonryLayout gap={20} columnWidth={200} columnCount={3}>
        {children}
      </MasonryLayout>
      <div style={{ marginLeft: 20 }}>
        <input
          placeholder="Child height"
          onChange={e => setChildHeight(parseInt(e.target.value))}
          type="number"
        />
        <button onClick={() => setItems(items.concat([childHeight]))}>Add children</button>
      </div>
    </div>
  );
};

export default App;
