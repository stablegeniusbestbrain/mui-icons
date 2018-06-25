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
      _react2.default.createElement('path', { d: 'M12 21.3l-7.1-7.1c-1.2-1.2-1.2-3.1 0-4.3 1.1-1 3-1.1 4.1-.1V5c0-1.7 1.3-3 3-3s3 1.3 3 3v4.8c1.1-1 3-.9 4.1.1 1.2 1.2 1.2 3.1 0 4.3L12 21.3zM7 11.1c-.3 0-.5.1-.7.3-.4.4-.4 1 0 1.4l5.7 5.7 5.7-5.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L13 14.7V5c0-.5-.4-1-1-1s-1 .5-1 1v9.7l-3.3-3.3c-.2-.2-.4-.3-.7-.3z' })
    )
  );
};

exports.default = Icon;