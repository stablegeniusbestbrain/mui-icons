'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M164.466 64C109.266 64 64 89.98 64 143v283h22.14c12.86-26.334 44.24-42 78.326-42 40.224 0 73.877 27.528 81.616 64H248V95.346C230.76 73.95 198.98 64 164.466 64zm183.154 0c-34.33 0-66.712 9.85-83.62 31.01V448h1.797c7.74-36.472 41.495-64 81.722-64 34.084 0 61.148 11.666 78.428 42H448V143c0-53.02-45.177-79-100.38-79z' })
      )
    )
  );
};

exports.default = Icon;