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
      _react2.default.createElement('path', { d: 'M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8c1.6 0 3.2-.5 4.5-1.4.5-.3.6-.9.3-1.4-.3-.4-1-.5-1.4-.2-1 .6-2.2 1-3.4 1-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6v.5c0 .6-.4 1-1 1s-1-.4-1-1v-3c0-.6-.4-1-1-1-.4 0-.8.3-.9.7-.6-.4-1.3-.7-2.1-.7-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5c1 0 2-.5 2.6-1.2.6.7 1.4 1.2 2.4 1.2 1.7 0 3-1.3 3-3V12c0-4.4-3.6-8-8-8zm0 9.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z' })
    )
  );
};

exports.default = Icon;