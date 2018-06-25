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
      _react2.default.createElement('path', { d: 'M22.5 13.2v-2.4l-2.9-1-.7-1.6 1.3-2.8-1.7-1.7-2.7 1.4-1.6-.7-1-2.9h-2.4l-1 2.9-1.7.7-2.7-1.3-1.7 1.7 1.4 2.7-.7 1.6-2.9 1v2.4l2.9 1 .7 1.6-1.3 2.8 1.7 1.7 2.7-1.4 1.6.7 1 2.9h2.4l1-2.9 1.6-.7 2.8 1.3 1.7-1.7-1.4-2.7.7-1.6 2.9-1.1v.1zM12 16.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z' })
    )
  );
};

exports.default = Icon;