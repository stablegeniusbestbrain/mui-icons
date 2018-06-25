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
      _react2.default.createElement('path', { d: 'M13.3 13.7l.8-3.4h-3.4l-.8 3.4h3.4zM23.6 7l-.8 3q-.1.3-.4.3H18l-.8 3.4h4.1q.2 0 .4.2.1.2 0 .4l-.7 3q-.1.3-.4.3h-4.4L15.1 22q-.1.3-.4.3h-3q-.2 0-.4-.2-.1-.1 0-.3l1-4.2H8.9L7.8 22q-.1.3-.4.3h-3q-.2 0-.3-.2-.2-.1-.1-.3l1-4.2H.9q-.2 0-.4-.2-.1-.1-.1-.4l.8-3q.1-.3.4-.3H6l.8-3.4H2.7q-.2 0-.4-.2-.1-.2 0-.3l.7-3q.1-.4.4-.4h4.4L8.9 2q.1-.3.4-.3h3q.2 0 .4.2.1.1 0 .4l-1 4.1h3.4L16.2 2q.1-.3.4-.3h3q.2 0 .3.2.2.1.1.4l-1 4.1h4.1q.2 0 .4.2.1.2.1.4z' })
    )
  );
};

exports.default = Icon;