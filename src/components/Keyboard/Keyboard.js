import React from 'react';
import { KEYS } from '../../constants';


function Keyboard({ keyDict }) {
    return (
      <div className="keyboard">
          {KEYS.map((row, rowIndex) => (
              <div key={rowIndex} className="keyboard-row">
                  {row.map((key) => (
                      <button
                          key={key}
                          className={`keyboard-key ${keyDict[key] || ''}`}
                      >
                          {key}
                      </button>
                  ))}
              </div>
          ))}
      </div>
  );
}

export default Keyboard;
