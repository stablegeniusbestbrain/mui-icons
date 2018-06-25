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
      _react2.default.createElement('path', { d: 'M20 12c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.8 0 1.5.1 2.2.3l1.6-1.6C14.6 2.3 13.3 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10M7.9 10.1l-1.4 1.4L11 16 21 6l-1.4-1.4-8.6 8.6-3.1-3.1z' })
    )
  );
};

exports.default = Icon;