import React from 'react';

export const StageOneInput = ({ prepareAndValidateInput, setError, setCode }) => (
	<>
		<textarea placeholder={`function a() {
  let b = 1;
  b = 2;
  b = 3;
}

function b() {
  let b = 3;
  let c = b;
  b = 4;
}`} />
		<button onClick={e => prepareAndValidateInput(e, setError, setCode)}>Bulk rename!</button>
	</>
);