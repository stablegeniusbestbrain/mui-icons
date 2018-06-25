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
      _react2.default.createElement('path', { d: 'M21.4 5.1q.4.4.6 1t.3 1.2v15.4q0 .6-.4.9t-.9.4H3q-.5 0-.9-.4t-.4-.9V1.3q0-.6.4-.9T3 0h12q.5 0 1.2.3t1 .6zm-6-3.3v5.1h5.1l-.3-.6L16 2.1l-.6-.3zm5.2 20.5V8.6H15q-.5 0-.9-.4t-.4-.9V1.7H3.4v20.6h17.2zM7.3 19.2v1.4h4.4v-1.4h-1.3v-2.3h1.9q1 0 1.5-.2.9-.3 1.5-1.2t.5-1.9q0-1.1-.5-1.9T14 10.5q-.7-.2-1.8-.2H7.3v1.4h1.2v7.5H7.3zm4.7-3.8h-1.6v-3.6H12q.7 0 1.1.3.8.4.8 1.5 0 1.2-.8 1.6-.5.2-1.1.2z' })
    )
  );
};

exports.default = Icon;