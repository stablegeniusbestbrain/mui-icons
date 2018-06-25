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
      _react2.default.createElement('path', { d: 'M2 15c1.7-.7 3.3-1.5 5-1.8V5c0-1.7 1.3-3 3-3 1.3 0 2.4.8 2.8 2H10c-.6 0-1 .4-1 1v1h5V5c0-1.7 1.3-3 3-3 1.3 0 2.4.8 2.8 2H17c-.6 0-1 .4-1 1v9.9c2-.3 4-1.9 6-1.9v2c-2.2 0-4.4 2-6.7 2-2.2 0-4.4-2-6.6-2-2.3 0-4.5 1-6.7 2v-2zm12-7H9v2h5V8zm0 4H9v1c1.7.2 3.3 1.3 5 1.8V12zM2 19c2.2-1 4.4-2 6.7-2 2.2 0 4.4 2 6.6 2 2.3 0 4.5-2 6.7-2v2c-2.2 0-4.4 2-6.7 2-2.2 0-4.4-2-6.6-2-2.3 0-4.5 1-6.7 2v-2z' })
    )
  );
};

exports.default = Icon;