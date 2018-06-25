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
      _react2.default.createElement('path', { d: 'M18 7l-1.4-1.4-6.3 6.3 1.4 1.4L18 7zm4.2-1.4L11.7 16.2 7.5 12l-1.4 1.4 5.6 5.6 12-12-1.5-1.4zM.4 13.4L6 19l1.4-1.4L1.8 12 .4 13.4z' })
    )
  );
};

exports.default = Icon;