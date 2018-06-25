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
      _react2.default.createElement('path', { d: 'M22.5 4.8l-2.1 2c.4 1 .6 2.1.6 3.2v10c0 1.7-1.3 3-3 3h-6v-2h7v-1h-4v-7.7l-6 6V20H7.3l-2.5 2.5-1.3-1.3L21.2 3.5l1.3 1.3zM12 1c2.5 0 4.8 1 6.5 2.7L17 5.1C15.8 3.8 14 3 12 3c-3.9 0-7 3.1-7 7v2h4v1.2l-5.5 5.5c-.3-.5-.5-1.1-.5-1.7v-7c0-5 4-9 9-9zm7 11v-2c0-.5-.1-1.1-.2-1.6L15.3 12H19z' })
    )
  );
};

exports.default = Icon;