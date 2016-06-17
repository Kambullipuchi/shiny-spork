var tslint = {
	"rules": {
		"class-name": true,
		"curly": true,
		"forin": false,
		"indent": [
			true,
			"spaces"
		],
		"interface-name": true,
		"label-position": true,
		"label-undefined": true,
		"max-line-length": false,
		"no-arg": true,
		"no-bitwise": true,
		"no-console": [
			true,
			"debug",
			"info",
			"time",
			"timeEnd",
			"trace"
		],
		"no-construct": true,
		"no-debugger": true,
		"no-duplicate-key": true,
		"no-duplicate-variable": true,
		"no-empty": false,
		"no-eval": true,
		"no-string-literal": false,
		"no-switch-case-fall-through": true,
		"no-trailing-whitespace": false,
		"no-unused-expression": true,
		"no-unused-variable": false,
		"no-unreachable": true,
		"no-use-before-declare": true,
		"one-line": [
			true,
			"check-open-brace",
			"check-catch",
			"check-whitespace"
		],
		"quotemark": [
			true,
			"double"
		],
		"radix": true,
		"semicolon": true,
		"triple-equals": [
			true,
			"allow-null-check"
		],
		"variable-name": false,
		"whitespace": [
			true,
			"check-branch",
			"check-decl",
			"check-operator",
			"check-type"
		]
	}
};

module.exports = tslint;