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
      _react2.default.createElement('path', { d: 'M5 14.5h14v-6H5v6zM11 .6v2.9h2V.6h-2zM19 3l-1.7 1.8 1.4 1.5 1.8-1.8L19 3zm-6 19.4v-2.9h-2v2.9h2zm7.4-3.9l-1.8-1.7-1.4 1.4L19 20l1.4-1.5zM3.5 4.5l1.8 1.8 1.5-1.5L5 3 3.5 4.5zM5 19.9l1.8-1.8-1.5-1.4-1.8 1.8L5 19.9z' })
    )
  );
};

exports.default = Icon;