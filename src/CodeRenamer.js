import React from 'react';

export const CodeRenamer = ({ code, renameSymbol, setCode }) => {
	return code._code
		.split('')
		.map(
			(e,i) => <span onClick={() => renameSymbol(code, i, setCode)} key={`code-${i}`} id={`code-${i}`}>{e}</span>
		)
}