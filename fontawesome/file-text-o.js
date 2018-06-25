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
      _react2.default.createElement('path', { d: 'M21.4 5.1q.4.4.6 1t.3 1.2v15.4q0 .6-.4.9t-.9.4H3q-.5 0-.9-.4t-.4-.9V1.3q0-.6.4-.9T3 0h12q.5 0 1.2.3t1 .6zm-6-3.3v5.1h5.1l-.3-.6L16 2.1l-.6-.3zm5.2 20.5V8.6H15q-.5 0-.9-.4t-.4-.9V1.7H3.4v20.6h17.2zM6.9 10.7q0-.2.1-.3t.3-.1h9.4q.2 0 .3.1t.1.3v.9q0 .2-.1.3t-.3.1H7.3q-.2 0-.3-.1t-.1-.3v-.9zm9.8 3q.2 0 .3.1t.1.3v.9q0 .2-.1.3t-.3.1H7.3q-.2 0-.3-.1t-.1-.3v-.9q0-.1.1-.3t.3-.1h9.4zm0 3.4q.2 0 .3.2t.1.3v.8q0 .2-.1.3t-.3.2H7.3q-.2 0-.3-.2t-.1-.3v-.8q0-.2.1-.3t.3-.2h9.4z' })
    )
  );
};

exports.default = Icon;