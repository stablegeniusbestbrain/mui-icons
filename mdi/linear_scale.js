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
      _react2.default.createElement('path', { d: 'M19.5 9.5c-1 0-1.9.6-2.3 1.5h-2.9c-.4-.9-1.3-1.5-2.3-1.5s-1.9.6-2.3 1.5H6.8c-.4-.9-1.3-1.5-2.3-1.5C3.1 9.5 2 10.6 2 12s1.1 2.5 2.5 2.5c1 0 1.9-.6 2.3-1.5h2.9c.4.9 1.3 1.5 2.3 1.5s1.9-.6 2.3-1.5h2.9c.4.9 1.3 1.5 2.3 1.5 1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5z' })
    )
  );
};

exports.default = Icon;