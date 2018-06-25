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
      _react2.default.createElement('path', { d: 'M20.2 15.2c-1.4-1.4-5.2-5-7.4-3.9L4.5 3 3 4.5l8.3 8.3c-1 2.2 2.6 5.8 4 7.3 1.8 1.7 3 .8 4.3-.5 1.5-1.5 2-3 .6-4.4z' })
    )
  );
};

exports.default = Icon;