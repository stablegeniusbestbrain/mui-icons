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
      _react2.default.createElement('path', { d: 'M18.4 10.7c-.8-.8-2-.8-2.8 0L14 12.2V5c0-1.1-.9-2-2-2s-2 .9-2 2v7.2l-1.6-1.5c-.8-.8-2-.8-2.8 0s-.8 2 0 2.8l6.4 6.4 6.4-6.4c.8-.8.8-2.1 0-2.8z' })
    )
  );
};

exports.default = Icon;