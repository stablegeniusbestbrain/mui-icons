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
      _react2.default.createElement('path', { d: 'M11.5 22h.4c.7-.2 1.2-.6 1.4-1.2.1-.3.2-.5.2-.8h-4c0 1.1.9 2 2 2zM18 10.5c0-3.1-2.1-5.6-5-6.3v-.7c0-.8-.7-1.5-1.5-1.5S10 2.7 10 3.5v.7c-2.9.7-5 3.2-5 6.3V16l-2 2v1h17v-1l-2-2m2-6h2c-.2-3.2-1.8-6-4.2-7.8l-1.4 1.4C18.5 5 19.8 7.3 20 10zM6.6 3.6L5.2 2.1C2.8 4 1.2 6.8 1 10h2c.2-2.7 1.5-5 3.6-6.4z' })
    )
  );
};

exports.default = Icon;