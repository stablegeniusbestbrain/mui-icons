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
      _react2.default.createElement('path', { d: 'M12 2c2.5 0 4.8.9 6.5 2.4C16.4 6.2 15 9 15 12s1.4 5.8 3.5 7.6c-1.7 1.5-4 2.4-6.5 2.4s-4.8-.9-6.5-2.4C7.6 17.8 9 15 9 12S7.6 6.2 5.5 4.4C7.2 2.9 9.5 2 12 2zm10 10c0 2.3-.8 4.5-2.1 6.1-1.8-1.4-2.9-3.6-2.9-6.1 0-2.5 1.1-4.7 2.9-6.2C21.2 7.5 22 9.7 22 12zM2 12c0-2.3.8-4.5 2.1-6.2C5.9 7.3 7 9.5 7 12s-1.1 4.7-2.9 6.1C2.8 16.5 2 14.3 2 12z' })
    )
  );
};

exports.default = Icon;