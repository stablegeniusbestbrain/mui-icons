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
      _react2.default.createElement('path', { d: 'M9.4 12V6.9H6v3.4q0 .7.5 1.2t1.2.5h1.7zm13.7 6v2.6H7.7V18l1.7-2.6H7.7q-2.1 0-3.6-1.5t-1.5-3.6V6l-.9-.9.4-1.7h6.5L9 1.7h12.9l.4 2.6-.9.4v10.7z' })
    )
  );
};

exports.default = Icon;