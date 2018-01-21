describe('Button', () => {
	function runCbWithAllButtonTypes(cb) {
		cb('success');
		cb('warning');
		cb('primary');
		cb('secondary');
		cb('dark');
		cb('light');
	}

	// eslint-disable-next-line no-unused-vars
	const Button = onliffewidgets.default.Button.default; // Wish we had import...

	it('should create a <button> element in the DOM', () => {
		React.render(<Button></Button>, document.body);
		$('body button').length.should.not.equal(0);
	});

	it('should create a <button> element with the `btn` class', () => {
		React.render(<Button></Button>, document.body);
		$('body button').get(0).attr('class').should.match(/.*btn.*/);
	});

	it('should create a <button> element with the correct children', () => {
		React.render(<Button>Hi</Button>, document.body);
		$('body button').get(0).node.innerHTML.should.eql('Hi');
		React.render(<Button><p>Hi</p></Button>, document.body);
		$('body button').get(0).n.innerHTML.should.eql('<p>Hi</p>');
	});

	it('should create a <button> element with classes corresponding to `type`', () => {
		function testFunction(type) {
			React.render(<Button type={type}>Hi</Button>, document.body);
			$('body button').get(0).attr('class').should.match(new RegExp(`.*btn-${type}.*`));
		}

		runCbWithAllButtonTypes(testFunction);
	});

	it('should create a <button> element with classes corresponding to `type` and `outline`', () => {
		function testFunction(type) {
			React.render(<Button outline type={type}>Hi</Button>, document.body);
			$('body button').get(0).attr('class').should.match(new RegExp(`.*btn-outline-${type}.*`));
		}

		runCbWithAllButtonTypes(testFunction);
	});
});
