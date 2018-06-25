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
      _react2.default.createElement('path', { d: 'M8 5.6v15.7q0 .4-.2.6t-.5.3q-.2 0-.4-.2L.7 18.9q-.3-.1-.5-.4t-.2-.6V2.6q0-.3.1-.5t.4-.2q.2 0 .6.2L8 5.6zM8.9 7L16 18.6 8.9 15V7zm15.1.2v14.1q0 .4-.2.6t-.5.2-.6-.2L16.8 19zm0-1.6q0 .1-3.5 5.6t-4 6.6l-5.2-8.5 4.3-7.1q.2-.4.7-.4.2 0 .4.1l7.2 3.6.1.1z' })
    )
  );
};

exports.default = Icon;