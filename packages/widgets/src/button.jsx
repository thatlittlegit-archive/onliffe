import React, {Component} from 'preact-compat';

export default class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {toggle: null};
		this.switchToggleState = this.switchToggleState.bind(this);
	}
	switchToggleState() {
		this.setState(prev => ({
			toggle: typeof prev.toggle === 'undefined' ? undefined : !prev.toggle
		}));
	}
	render() {
		const props = this.props;
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

		if (props.toggle !== undefined && this.state.toggle === null) {
			this.state.toggle = String(props.toggle) !== 'false';
		}

		return <button class={'btn ' + type + ' ' + (this.state.toggle ? 'active' : '')} onclick={this.switchToggleState}>{this.props.children}</button>;
	}
}
