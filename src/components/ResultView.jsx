import React from 'react';
import PropTypes from 'prop-types';

function ResultView({ history, output }) {
	// CHANGE COLOR TO RED IF ERROR OCCURRED
	let colorStyle = {
		color: output === 'Error' ? '#f11' : '#fff'
	};

	return (
		<div style={colorStyle} className="result">
			<MyNameComponent /> {/* Thêm thành phần MyNameComponent */}
			<div className="history">{history}</div>
			<div className="output">{output}</div>
		</div>
	);
}

ResultView.propTypes = {
	history: PropTypes.string,
	output: PropTypes.string
};


// Thêm thành phần ABCComponent
function MyNameComponent() {
	return <div className="myname">Huỳnh Vĩnh Tiến</div>;
}
export default ResultView;
