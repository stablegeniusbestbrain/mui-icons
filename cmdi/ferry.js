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
      _react2.default.createElement('path', { d: 'M6 6h12v4l-6-2-6 2m-2.1 9H4c1.6 0 3-.9 4-2 1 1.1 2.4 2 4 2s3-.9 4-2c1 1.1 2.4 2 4 2h.1l1.8-6.7c.1-.2.1-.5 0-.8-.1-.2-.4-.4-.6-.5l-1.3-.4V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.6l-1.3.4c-.2.1-.5.3-.6.5-.1.3-.1.6-.1.8M20 21c-1.4 0-2.8-.5-4-1.3-2.4 1.7-5.6 1.7-8 0-1.2.8-2.6 1.3-4 1.3H2v2h2c1.4 0 2.7-.3 4-1 2.5 1.3 5.5 1.3 8 0 1.3.7 2.6 1 4 1h2v-2h-2z' })
    )
  );
};

exports.default = Icon;