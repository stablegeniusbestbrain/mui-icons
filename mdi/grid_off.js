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
      _react2.default.createElement('path', { d: 'M8 4v1.5l2 2V4h4v4h-3.4l2 2H14v1.4l2 2V10h4v4h-3.4l2 2H20v1.4l2 2V4c0-1.1-.9-2-2-2H4.5l2 2H8zm8 0h4v4h-4V4zM1.3 1.3L0 2.5l2 2V20c0 1.1.9 2 2 2h15.5l2 2 1.2-1.3L1.3 1.3zM10 12.6l1.4 1.4H10v-1.4zm-6-6L5.5 8H4V6.5zM8 20H4v-4h4v4zm0-6H4v-4h3.5l.5.6V14zm6 6h-4v-4h3.4l.6.5V20zm2 0v-1.5l1.5 1.5H16z' })
    )
  );
};

exports.default = Icon;