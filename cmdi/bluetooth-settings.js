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
      _react2.default.createElement('path', { d: 'M14.9 14.3L13 16.2v-3.8l1.9 1.9zM13 3.8l1.9 1.9L13 7.6m4.7-1.9L12 0h-1v7.6L6.4 3 5 4.4l5.6 5.6L5 15.6 6.4 17l4.6-4.6V20h1l5.7-5.7-4.3-4.3 4.3-4.3zM15 24h2v-2h-2m-8 2h2v-2H7m4 2h2v-2h-2v2z' })
    )
  );
};

exports.default = Icon;