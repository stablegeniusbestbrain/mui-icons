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
      _react2.default.createElement('path', { d: 'M23.7 16.7c-3-2.9-7.2-4.7-11.7-4.7-4.5 0-8.7 1.8-11.7 4.7-.2.2-.3.4-.3.7 0 .3.1.5.3.7l2.5 2.5c.2.2.4.3.7.3.3 0 .5-.1.7-.3.8-.8 1.7-1.4 2.6-1.9.4-.1.6-.5.6-.9v-3.1c1.4-.4 3-.7 4.6-.7s3.2.3 4.6.7v3.1c0 .4.2.8.6.9.9.5 1.8 1.1 2.6 1.9.2.2.5.3.7.3.3 0 .6-.2.7-.3l2.5-2.5c.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7zM21.2 6.3l-1.4-1.5-3.6 3.6 1.4 1.4s3.5-3.5 3.6-3.5zM13 2h-2v5h2V2zM6.4 9.8l1.4-1.4-3.5-3.6-1.5 1.5c.1 0 3.6 3.5 3.6 3.5z' })
    )
  );
};

exports.default = Icon;