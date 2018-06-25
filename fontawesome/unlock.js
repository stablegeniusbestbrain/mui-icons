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
      _react2.default.createElement('path', { d: 'M23.1 7.7v3.4q0 .4-.2.6t-.6.3h-.9q-.3 0-.6-.3t-.2-.6V7.7q0-1.4-1-2.4t-2.5-1-2.4 1-1 2.4v2.6H15q.5 0 .9.4t.4.9v7.7q0 .5-.4.9t-.9.4H2.1q-.5 0-.9-.4t-.3-.9v-7.7q0-.6.3-.9t.9-.4h9V7.7q0-2.5 1.8-4.2t4.2-1.8 4.3 1.8 1.7 4.2z' })
    )
  );
};

exports.default = Icon;