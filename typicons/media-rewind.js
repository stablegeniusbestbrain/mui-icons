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
      _react2.default.createElement('path', { d: 'M10.2 6.4c-.5 0-.9.2-1.3.5C6.6 9.2 3 12.7 3 12.7l5.9 5.8c.4.3.8.5 1.3.5 1 0 1.8-.8 1.8-1.8v-9c0-1-.8-1.8-1.8-1.8zm9 0c-.5 0-.9.2-1.3.5-2.3 2.3-5.9 5.8-5.9 5.8l5.9 5.8c.4.3.8.5 1.3.5 1 0 1.8-.8 1.8-1.8v-9c0-1-.8-1.8-1.8-1.8z' })
    )
  );
};

exports.default = Icon;