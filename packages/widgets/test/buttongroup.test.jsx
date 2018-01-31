describe('ButtonGroup', () => {
	// eslint-disable-next-line no-unused-vars
	const Button = onliffewidgets.default.Button.default;
	// eslint-disable-next-line no-unused-vars
	const ButtonGroup = onliffewidgets.default.ButtonGroup.default;

	it('should create a <div> element in the DOM', () => {
		React.render(<ButtonGroup></ButtonGroup>, document.body);
		$('body div').length.should.not.equal(0);
	});

	it('should create a <div> element with the `btn-group` class', () => {
		React.render(<ButtonGroup></ButtonGroup>, document.body);
		$('body div').hasClass('btn-group').should.equal(true);
	});

	it('should create a <div> element with the correct children', () => {
		React.render(<ButtonGroup><Button>Hi</Button></ButtonGroup>, document.body);
		$('body div').html().should.eql('<button class="btn  ">Hi</button>');
	});

	it('should warn if a non-<Button> is passed as a child', () => {
		let ok = false;
		console.warn = () => {
			ok = true;
		};

		React.render(<ButtonGroup><p>Hi</p></ButtonGroup>, document.body);

		// TODO(thatlittlegit): Come up with a better way for doing this, without setTimeout.
		setTimeout(() => ok.should.equal(true), 250);
	});
});
