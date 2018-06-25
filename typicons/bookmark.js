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
      _react2.default.createElement('path', { d: 'M17 2H9C7.3 2 6 3.3 6 5v14c0 .5.1.9.3 1.3.6.9 1.8 1 2.8 0l3.2-3.2c.4-.4 1-.4 1.4 0l3.2 3.2c.5.5 1 .7 1.5.7.8 0 1.6-.6 1.6-2V5c0-1.7-1.3-3-3-3zM9 4h8c.6 0 1 .5 1 1v9.9l-2.4-2.2c-1.5-1.3-3.7-1.3-5.1 0L8 14.9V5c0-.5.4-1 1-1zm6.1 11.7c-.5-.6-1.3-.9-2.1-.9s-1.6.3-2.1.9L8 18.6v-2.3l3.1-2.9c1.1-1 2.7-1 3.8 0l3.1 2.9v2.3l-2.9-2.9z' })
    )
  );
};

exports.default = Icon;