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
      _react2.default.createElement('path', { d: 'M10.5 13.5h-3L12 9l4.5 4.5h-3V21h-3v-7.5zm7.5-6c0-.7-1.4-4.5-6.7-4.5-3.7 0-6.8 2.9-6.8 6-3 0-4.5 2.3-4.5 4.5C0 15.8 1.5 18 4.5 18H9v-1.9H4.5c-2.4 0-2.5-2.2-2.5-2.6 0-.3 0-2.6 2.5-2.6h2V9c0-2.1 2.3-4.1 4.8-4.1 3.8 0 4.6 2.4 4.8 2.7v1.8H18c1.2 0 4.1.4 4.1 3.4 0 3.1-3.4 3.3-4.1 3.3h-3V18h3c3.1 0 6-1.7 6-5.2 0-3.7-2.9-5.3-6-5.3z' })
    )
  );
};

exports.default = Icon;