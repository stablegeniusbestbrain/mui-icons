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
      _react2.default.createElement('path', { d: 'M21.4 5.1q.4.4.6 1t.3 1.2v15.4q0 .6-.4.9t-.9.4H3q-.5 0-.9-.4t-.4-.9V1.3q0-.6.4-.9T3 0h12q.5 0 1.2.3t1 .6zm-6-3.3v5.1h5.1l-.3-.6L16 2.1l-.6-.3zm5.2 20.5V8.6H15q-.5 0-.9-.4t-.4-.9V1.7H3.4v20.6h17.2zm-8.6-12q.7 0 1.2.5t.5 1.2v5.1q0 .7-.5 1.2t-1.2.6H6.9q-.7 0-1.2-.6t-.6-1.2V12q0-.7.6-1.2t1.2-.5H12zm6.6 0q.3.1.3.4v7.7q0 .3-.3.4-.1.1-.2.1-.2 0-.3-.2l-3.5-3.5V14l3.5-3.6q.1-.1.3-.1h.2z' })
    )
  );
};

exports.default = Icon;