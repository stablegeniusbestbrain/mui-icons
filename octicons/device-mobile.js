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
      _react2.default.createElement('path', { d: 'M18 0H6c-.8 0-1.5.7-1.5 1.5v21c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5v-21C19.5.7 18.8 0 18 0zm-6 23c-1.1 0-1.9-.9-1.9-2s.8-1.9 1.9-1.9c1.1 0 1.9.8 1.9 1.9 0 1.1-.8 2-1.9 2zm6-5H6V3h12v15z' })
    )
  );
};

exports.default = Icon;