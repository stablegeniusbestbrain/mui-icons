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
      _react2.default.createElement('path', { d: 'M6 14l3 3v5h6v-5l3-3V9H6zm5-12h2v3h-2zM3.5 5.9l1.4-1.4L7 6.6 5.6 8zm13.5.7l2.1-2.1 1.4 1.4L18.4 8z' })
    )
  );
};

exports.default = Icon;