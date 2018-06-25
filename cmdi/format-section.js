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
      _react2.default.createElement('path', { d: 'M15.7 4.4c-1-.6-2.1-.9-3.3-.8-1.5 0-2.7.7-2.7 2C9.7 7 11 7.5 13 8.1c2.5.9 4.4 1.9 4.4 4.3 0 1.3-.7 2.5-1.8 3.2.6.6 1 1.5 1 2.4 0 2.8-2.6 4-5.1 4-1.5 0-2.9-.4-4.2-1.1l.7-1.6c1 .7 2.3 1.1 3.5 1.1 1.7 0 3-.7 3-2.2 0-1.2-.8-1.9-3.3-2.7-2.7-1-4.6-2-4.6-4.3.1-1.3.8-2.5 2-3.1-.6-.6-1-1.4-1-2.3C7.6 3.5 9.8 2 12.5 2c1.3 0 2.6.3 3.7.9l-.5 1.5zm-4.4 9c1.1.3 2.1.8 3.1 1.3.7-.5 1-1.2 1-2.1 0-1-.6-1.8-2.4-2.5-1.1-.3-2.2-.8-3.3-1.3-.7.4-1.2 1.2-1.2 2.1 0 1 .7 1.8 2.8 2.5z' })
    )
  );
};

exports.default = Icon;