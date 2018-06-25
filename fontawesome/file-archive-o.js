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
      _react2.default.createElement('path', { d: 'M10.3 5.1V3.4H8.6v1.7h1.7zM12 6.9V5.1h-1.7v1.8H12zm-1.7 1.7V6.9H8.6v1.7h1.7zm1.7 1.7V8.6h-1.7v1.7H12zm9.4-5.2q.4.4.6 1t.3 1.2v15.4q0 .5-.4.9t-.9.4H3q-.5 0-.9-.4t-.4-.9V1.3q0-.6.4-.9T3 0h12q.5 0 1.2.3t1 .6zm-6-3.3v5.1h5.1l-.3-.6L16 2.1l-.6-.3zm5.2 20.5V8.6H15q-.5 0-.9-.4t-.4-.9V1.7H12v1.7h-1.7V1.7H3.4v20.6h17.2zm-8.4-9.7l1.4 4.7q.1.4.1.7 0 1.1-1 1.8t-2.4.8-2.5-.8-.9-1.8q0-.3.1-.7.2-.8 1.6-5.3v-1.7h1.7V12h1q.3 0 .6.2t.3.4zm-1.9 6.3q.7 0 1.2-.3t.5-.6-.5-.6-1.2-.3-1.2.3-.5.6.5.6 1.2.3z' })
    )
  );
};

exports.default = Icon;