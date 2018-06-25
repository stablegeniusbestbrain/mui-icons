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
      _react2.default.createElement('path', { d: 'M14.4 5.6c-.8-.8-2-.8-2.8 0L5.2 12l6.4 6.4c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8L10.8 12l3.6-3.6c.8-.8.8-2 0-2.8z' })
    )
  );
};

exports.default = Icon;