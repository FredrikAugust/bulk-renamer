import React from 'react';
import './App.css';

import { parse } from 'esprima';
import esrefactor from 'esrefactor';

import { StageOneInput } from './StageOneInput';
import { CodeRenamer } from './CodeRenamer';

const prepareAndValidateInput = ({ target }, setError, setCode) => {
	const content = target.previousSibling.value;
	try {
		parse(content);
	} catch (e) {
		setError("Invalid JavaScript code.");
		return;
	}

	setCode(new esrefactor.Context(content));
}

const renameSymbol = (code, i, setCode) => {
	try {
		setCode(new esrefactor.Context(code.rename(code.identify(i), prompt("New name for variable: "))));
	} catch(e) {
		console.warn("Invalid renaming.");
		setCode(code);
	}
}

const App = () => {
	const [error, setError] = React.useState(null);
	const [code, setCode] = React.useState(null); // this is where we will store the code

  return (
		<>
			<h1>Bulk renamer for JavaScript by <a href="https://twitter.com/otterinjection">@otterinjection</a> [<a href="https://github.com/fredrikaugust/bulk-renamer">source</a>]</h1>
			<p>How does one use this tool? Insert some JS, click the "Bulk Rename" button, and when prompted with your parsed code,
			you want to click the variable you wish to rename. You will then be presented with a dialog box asking you for your new
			variable name. Simply enter it, and press enter, and voilla, you're done.</p>
			{ error ? <h5 id="error">{error}</h5> : '' }
			{ code ? <CodeRenamer code={code} renameSymbol={renameSymbol} setCode={setCode} /> :
				<StageOneInput prepareAndValidateInput={prepareAndValidateInput} setError={setError} setCode={setCode} />
			}
		</>
  );
};

export default App;
