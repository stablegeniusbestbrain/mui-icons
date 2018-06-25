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
      _react2.default.createElement('path', { d: 'M19.3 11.7l-2.1 2.1-1.4-1.4-7.7 7.7L3.5 22 2 20.5l1.9-4.6 7.7-7.7-1.4-1.4 2.1-2.1 7 7zM16.8 3c1.1-1.2 3-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2l-1.9 2-4.3-4.3 2-1.9zM5.6 17l-1.1 2.5L7 18.4l7.4-7.4L13 9.6 5.6 17z' })
    )
  );
};

exports.default = Icon;