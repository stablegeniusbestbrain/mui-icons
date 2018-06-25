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
      _react2.default.createElement('path', { d: 'M9 7l.1.1 5 4.9L9 17V7m0-2c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2 .5 0 1-.2 1.4-.6L17 12l-6.6-6.4C10 5.2 9.5 5 9 5z' })
    )
  );
};

exports.default = Icon;