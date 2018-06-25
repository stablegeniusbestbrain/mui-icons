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
      _react2.default.createElement('path', { d: 'M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10c-5.4 0-9.7-4.2-10-9.5h7v2c0 .3.2.5.5.5h5c.3 0 .5-.2.5-.5v-5c0-.3-.2-.5-.5-.5h-5c-.3 0-.5.2-.5.5v2H2C2.3 6.2 6.6 2 12 2z' })
    )
  );
};

exports.default = Icon;