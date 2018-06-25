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
      _react2.default.createElement('path', { d: 'M12 3.4c4.7 0 8.6 3.9 8.6 8.6s-3.9 8.6-8.6 8.6A8.6 8.6 0 0 1 3.4 12c0-4.7 3.9-8.6 8.6-8.6zm0-1.9C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zM13.5 6h-3v7.5h3V6zm0 9h-3v3h3v-3z' })
    )
  );
};

exports.default = Icon;