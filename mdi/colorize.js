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
      _react2.default.createElement('path', { d: 'M20.7 5.6l-2.3-2.3c-.4-.4-1-.4-1.4 0l-3.2 3.1-1.9-1.9-1.4 1.4 1.4 1.4-8.9 9V21h4.8l8.9-8.9 1.4 1.4 1.4-1.4-1.9-1.9L20.7 7c.4-.4.4-1 0-1.4zM6.9 19L5 17.1 13.1 9l1.9 1.9L6.9 19z' })
    )
  );
};

exports.default = Icon;