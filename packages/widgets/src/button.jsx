import React, {Component} from 'preact-compat';

export default class Button extends Component {
	render(props) {
		let type = 'HIDDEN__IF_YOU_SEE_THIS_IN_THE_INSPECTOR_THERE_IS_SOMETHING_GOING_ON';

		if (props.outline !== undefined && props.type !== undefined) {
			type = `btn-outline-${props.type}`;
		} else if (props.outline !== undefined && props.type === undefined) {
			type = 'btn-outline';
		} else if (props.type === undefined) {
			type = '';
		} else {
			type = `btn-${props.type}`;
		}
		return <button class={'btn ' + type}>{this.props.children}</button>;
	}
}
