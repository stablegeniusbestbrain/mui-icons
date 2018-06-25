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
      _react2.default.createElement('path', { d: 'M20.4 19.4l-4-1.4-1.4 4-3.1-6L9 22l-1.4-4-4 1.4 2.9-6C5.6 12.2 5 10.7 5 9c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.7-.6 3.2-1.5 4.4l2.9 6zM7 9l2.7 1.3-.2 3 2.5-1.6 2.5 1.6-.2-3L17 9l-2.7-1.3.2-3L12 6.3 9.5 4.7l.2 3L7 9z' })
    )
  );
};

exports.default = Icon;