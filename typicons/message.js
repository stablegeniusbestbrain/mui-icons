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
      _react2.default.createElement('path', { d: 'M18 7c.5 0 1 .5 1 1v7c0 .5-.5 1-1 1H9.2l-.2.2V16H6c-.5 0-1-.5-1-1V8c0-.5.5-1 1-1h12m0-2H6C4.3 5 3 6.3 3 8v7c0 1.6 1.3 3 3 3h1v3l3-3h8c1.6 0 3-1.4 3-3V8c0-1.7-1.4-3-3-3z' })
    )
  );
};

exports.default = Icon;