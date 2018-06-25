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
      _react2.default.createElement('path', { d: 'M8 3.3L6.6 1.9l-.9.7L7.2 4m9.3 14.4c-1.2 1-2.8 1.6-4.5 1.6-3.9 0-7-3.1-7-7 0-1.7.6-3.3 1.6-4.5M2.9 2.3L1.6 3.6 3 4.9l-1.1.9 1.4 1.5 1.1-1 .8.8C3.8 8.7 3 10.8 3 13c0 5 4 9 9 9 2.3 0 4.3-.8 5.9-2.2l2.2 2.2 1.3-1.3L3.9 3.3l-1-1zM22 5.7l-4.6-3.8-1.3 1.5 4.6 3.9L22 5.7zM12 6c3.9 0 7 3.1 7 7 0 .8-.2 1.7-.4 2.4l1.5 1.5c.6-1.2.9-2.5.9-3.9 0-5-4-9-9-9-1.4 0-2.7.3-3.9.9l1.5 1.5c.7-.2 1.6-.4 2.4-.4z' })
    )
  );
};

exports.default = Icon;