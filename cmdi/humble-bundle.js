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
      _react2.default.createElement('path', { d: 'M11.9 6.4l-1.1.7c-1.3-3.4.6-3.6.6-3.6-1.2 1.6.5 2.9.5 2.9zm1.5-2.8c1.1 0 2.9 2.1-2 6.7-4.7 4.4-.9 5.6-.9 5.6-2.1-2.2 1.7-4.7 1.7-4.7s2.8 1.3 3.8 1.9 1.6 4.1.1 5.9c-2.8 3.2-10.4 1.9-11.3-.7-.5-1.2-1.8-5.3.9-7.8 2.1-1.8 3.1-1.3 6.1-3.1 3.4-2 1.6-3.9 1.6-3.8zM2.2 3.1l8.1 4.2-1.9.9-6.9-3.6c-.4-.2-.6-.7-.4-1.1.2-.4.7-.6 1.1-.4zm20.5 10.7c.4.2.6.7.4 1.1-.2.4-.7.6-1.1.4l-9.4-4.9 1.1-1.3 9 4.7z' })
    )
  );
};

exports.default = Icon;