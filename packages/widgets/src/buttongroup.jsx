import React, {Component} from 'preact-compat';

export default class ButtonGroup extends Component {
	render() {
		let size = 'HIDDEN';
		const type = this.props.vertical ? 'btn-group-vertical' : 'btn-group';

		if (Array.isArray(this.props.children)) {
			this.props.children.forEach(child => {
				if (child.nodeName.name !== 'Button') {
					console.warn('[widgets]: Using non-<Button> children to a <ButtonGroup> is BAD PRACTICE. Consider refactoring your JS(X)/HTML.');
				}
			});
		}

		if (this.props.size === undefined) {
			size = '';
		} else if (this.props.size.startsWith('s')) {
			size = 'sm';
		} else if (this.props.size.startsWith('l')) {
			size = 'lg';
		} else {
			size = '';
		}

		return <div class={`${type} ${size === '' ? '' : 'btn-group-' + size}`}>{this.props.children}</div>;
	}
}

