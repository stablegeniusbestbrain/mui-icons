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
      _react2.default.createElement('path', { d: 'M3 20.6h8.1V5.1H2.6v15q0 .2.1.3t.3.2zm18.4-.5v-15h-8.5v15.5H21q.2 0 .3-.2t.1-.3zm1.7-16.2v16.2q0 .9-.6 1.6t-1.5.6H3q-.9 0-1.5-.6t-.6-1.6V3.9q0-.9.6-1.6T3 1.7h18q.9 0 1.5.6t.6 1.6z' })
    )
  );
};

exports.default = Icon;