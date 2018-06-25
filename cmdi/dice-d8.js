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
      _react2.default.createElement('path', { d: 'M12 8.3c1.3 0 2.4.9 2.4 2.1 0 .7-.4 1.3-1 1.7.7.4 1.2 1 1.2 1.8 0 1.2-1.2 2.2-2.6 2.2-1.4 0-2.6-1-2.6-2.2 0-.8.5-1.4 1.2-1.8-.6-.4-1-1-1-1.7 0-1.2 1.1-2.1 2.4-2.1zm0 4.4c-.6 0-1.1.4-1.1 1.1 0 .6.5 1 1.1 1 .6 0 1.1-.4 1.1-1 0-.7-.5-1.1-1.1-1.1zm0-3.2c-.5 0-.9.4-.9 1s.4 1 .9 1 .9-.4.9-1-.4-1-.9-1zm9.5 1.3c.6.7.6 1.7 0 2.4l-8.3 8.3c-.7.7-1.7.7-2.4 0l-8.3-8.3c-.7-.7-.7-1.7 0-2.4l8.3-8.3c.7-.7 1.7-.7 2.4 0l8.3 8.3zM20.3 12L12 3.7 3.7 12l8.3 8.3 8.3-8.3z' })
    )
  );
};

exports.default = Icon;