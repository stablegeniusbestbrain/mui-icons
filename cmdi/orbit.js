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
      _react2.default.createElement('path', { d: 'M8.1 1.7C9.3 1.3 10.6 1 12 1c6.1 0 11 4.9 11 11s-4.9 11-11 11S1 18.1 1 12c0-1.4.3-2.7.7-3.9.5.5 1.1.9 1.8 1.1-.3.9-.5 1.8-.5 2.8 0 5 4 9 9 9s9-4 9-9-4-9-9-9c-1 0-1.9.2-2.8.5-.2-.7-.6-1.3-1.1-1.8zM4.9 2.9c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM12 7c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z' })
    )
  );
};

exports.default = Icon;