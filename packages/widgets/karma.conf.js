module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['browserify', 'mocha', 'chai'],
		files: [
			'dist.js',
			'test/header.js',
			'test/*.test.jsx'
		],
		preprocessors: {
			'test/*.js': ['browserify'],
			'test/*.jsx': ['browserify']
		},
		reporters: ['mocha'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Firefox'],
		singleRun: true,
		concurrency: Infinity,

		browserify: {
			transform: ['babelify']
		}
	});
};
