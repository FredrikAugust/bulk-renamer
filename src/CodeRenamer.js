import React from 'react';

import { parse } from 'esprima';
import escodegen from 'escodegen';

export const CodeRenamer = ({ code, renameSymbol, setCode }) => {
	const [done, setDone] = React.useState(false);

	return (
		<>
			{!done ?
				<>
					{code._code
						.split('')
						.map(
							(e,i) => (
								<span
									onClick={() => renameSymbol(code, i, setCode)}
									key={`code-${i}`} id={`code-${i}`}
								>
									{e}
								</span>
							)
						)}
					<button id="done-button" onClick={() => setDone(true)}>Done?</button>
				</> : <pre>{escodegen.generate(parse(code._code))}</pre>
			}
		</>
	);
}