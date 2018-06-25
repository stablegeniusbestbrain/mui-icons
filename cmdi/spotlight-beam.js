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
      _react2.default.createElement('path', { d: 'M9 16.5l.9-.9 5.2 5.2-.9.9L9 16.5zm6.5-6.5l.9-.9 5.2 5.2-.9.9-5.2-5.2zM6.7 2.7l3.4 3.4-4 4-3.4-3.4c-.8-.8-.8-2 0-2.8l1.2-1.2c.8-.8 2-.8 2.8 0zm7.9 4.8l.7.7-7.1 7.1-.7-.7-.9-3.5 4.5-4.5 3.5.9z' })
    )
  );
};

exports.default = Icon;