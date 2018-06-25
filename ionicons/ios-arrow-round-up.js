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
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M264 376V155.3l74.4 66.3c3.4 2.9 8.1 3.2 11.2.1 3.1-3.1 3.3-8.5.1-11.4l-88-80c-.2-.2-.4-.4-.6-.5-.1-.1-.2-.1-.3-.2-.1-.1-.2-.2-.4-.3-.1-.1-.2-.1-.3-.2-.1-.1-.2-.1-.3-.2-.1-.1-.2-.1-.4-.2-.1-.1-.2-.1-.3-.2-.1 0-.2-.1-.4-.1-.1 0-.3-.1-.4-.1-.1 0-.2-.1-.4-.1-.1 0-.3-.1-.4-.1-.1 0-.3 0-.4-.1h-.3c-.5-.1-1.1-.1-1.6 0h-.3c-.1 0-.3 0-.4.1-.1 0-.3.1-.4.1-.1 0-.2.1-.4.1-.1 0-.3.1-.4.1-.1 0-.2.1-.4.1-.1 0-.2.1-.3.2-.1.1-.2.1-.4.2-.1.1-.2.1-.3.2-.1.1-.2.1-.3.2-.1.1-.2.2-.4.3-.1.1-.2.1-.3.2-.2.2-.4.3-.6.5l-88 80c-1.7 1.6-2.3 3.6-2.3 5.7 0 2 .8 4.1 2.3 5.7 3.1 3.1 8 3 11.3 0l74.3-66.3V376c0 4.4 3.6 8 8 8 4.5 0 8.1-3.6 8.1-8z' })
      )
    )
  );
};

exports.default = Icon;