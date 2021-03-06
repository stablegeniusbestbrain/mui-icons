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
      _react2.default.createElement('path', { d: 'M4 8.5c0 2.7 2.8 5.4 7 9.2V7.2C10.4 5.9 9 5 7.5 5 5.5 5 4 6.5 4 8.5zm9-1.3v13.2l-1 1-1.4-1.4C5.4 15.4 2 12.3 2 8.5 2 5.4 4.4 3 7.5 3 10 3 13 5 13 7.2z' })
    )
  );
};

exports.default = Icon;