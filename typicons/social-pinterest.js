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
      _react2.default.createElement('path', { d: 'M12.5 4.8c-4.2 0-6.4 3-6.4 5.5 0 1.6.6 2.9 1.8 3.4.3.1.4 0 .5-.2l.2-.7c0-.2 0-.3-.2-.5-.3-.4-.5-1-.5-1.7 0-2.3 1.6-4.3 4.3-4.3 2.4 0 3.7 1.5 3.7 3.4 0 2.6-1.1 4.7-2.8 4.7-.9 0-1.6-.7-1.4-1.7.3-1.1.8-2.3.8-3.1 0-.8-.4-1.4-1.2-1.4-.9 0-1.7 1-1.7 2.3 0 .9.3 1.4.3 1.4l-1.2 4.9c-.3 1.4 0 3.2 0 3.4 0 .1.2.1.2 0 .1-.1 1.2-1.5 1.6-2.9l.6-2.4c.4.6 1.3 1.1 2.2 1.1 2.9 0 4.8-2.6 4.8-6.1 0-2.7-2.2-5.1-5.6-5.1z' })
    )
  );
};

exports.default = Icon;