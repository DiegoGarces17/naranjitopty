import React from 'react';
import PropTypes from 'prop-types';

const BUILD_TIME = new Date().getTime();

export default class HTML extends React.Component {
	static propTypes = {
		body: PropTypes.string,
	};

	render() {
		let css;
		if (process.env.NODE_ENV === 'production') {
			css = (
				<style
					dangerouslySetInnerHTML={{
						__html: require('!raw!../public/styles.css'),
					}}
				/>
			);
		}

		return (
			<html lang="en">
				<head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                    <meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					{this.props.headComponents}
					{css}
				</head>
				<body>
					<div
						id="___gatsby"
						className="full-height"
						dangerouslySetInnerHTML={{ __html: this.props.body }}
					/>
					{this.props.postBodyComponents}
				</body>
			</html>
		);
	}
}