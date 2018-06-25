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
      _react2.default.createElement('path', { d: 'M13 3c-5 0-9 4-9 9H1l3.9 3.9.1.1 4-4H6c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7c-1.9 0-3.7-.8-4.9-2.1l-1.5 1.5C8.3 20 10.5 21 13 21c5 0 9-4 9-9s-4-9-9-9zm-1 5v5l4.3 2.5.7-1.2-3.5-2.1V8H12z' })
    )
  );
};

exports.default = Icon;