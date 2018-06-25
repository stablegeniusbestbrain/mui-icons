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
      _react2.default.createElement('path', { d: 'M16.9 15.5l1.4 1.4c.9-1.2 1.5-2.5 1.6-3.9h-2c-.1.9-.5 1.7-1 2.5zM13 17.9v2c1.4-.2 2.7-.7 3.9-1.6l-1.4-1.4c-.8.5-1.6.9-2.5 1zm6.9-6.9c-.1-1.4-.7-2.7-1.6-3.9l-1.4 1.4c.5.8.9 1.6 1 2.5m-2.3-5.5L11 1v3.1c-3.9.5-7 3.8-7 7.9s3 7.4 7 7.9v-2C8.2 17.4 6 15 6 12s2.2-5.4 5-5.9V10l4.6-4.5z' })
    )
  );
};

exports.default = Icon;