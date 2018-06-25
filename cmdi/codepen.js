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
      _react2.default.createElement('path', { d: 'M19.5 13.3l-2-1.3 2-1.3m-6.7 8.1v-3.6l3.3-2.3 2.7 1.8m-6.8-.9L9.3 12l2.7-1.8 2.7 1.8m-3.5 6.8l-6-4.1 2.7-1.8 3.3 2.3m-6.7-4.5l2 1.3-2 1.3m6.7-8.1v3.6l-3.3 2.3-2.7-1.8m7.6-4.1l6 4.1-2.7 1.8-3.3-2.3m8.2.4V9h-.1v-.1-.1h-.1v-.1h-.1v-.1l-8.3-5.5c-.2-.1-.6-.1-.8 0L3.3 8.6v.1h-.1v.1h-.1V9H3V15h.1v.2h.1v.1h.1v.1l8.3 5.5c.1.1.2.1.4.1s.3 0 .4-.1l8.3-5.5v-.1h.1v-.1h.1V15h.1v-.2-5.5-.1z' })
    )
  );
};

exports.default = Icon;