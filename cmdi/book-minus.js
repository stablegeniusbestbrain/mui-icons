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
      _react2.default.createElement('path', { d: 'M18 22H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h1v7l2.5-1.5L12 9V2h6c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2zm0-4v-2h-6v2h6z' })
    )
  );
};

exports.default = Icon;