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
      _react2.default.createElement('path', { d: 'M11.1 18.9l4.5-5.2H5.4L.9 18.9h10.2zM24.7 4.4q.2.5.1 1t-.4.9L12.4 20q-.5.6-1.3.6H.9q-.6 0-1-.3t-.6-.7q-.2-.5-.1-1t.4-.9L11.6 4q.5-.6 1.3-.6h10.2q.6 0 1 .3t.6.7z' })
    )
  );
};

exports.default = Icon;