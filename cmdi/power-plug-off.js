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
      _react2.default.createElement('path', { d: 'M8 3v3.2c3.1 3 6.1 6.1 9.2 9.1.2-.3.6-.5.8-.9V8.8c0-1.1-1.3-1.6-2-2V3h-2v4h-4V3H8zM3.3 4c-.5.4-.9.8-1.3 1.3l4 4v5.2L9.5 18v3h5v-3c.2-.3.4.3.7.4 1.2 1.2 2.3 2.4 3.5 3.6.5-.4.9-.9 1.3-1.3C14.4 15.1 8.8 9.6 3.3 4z' })
    )
  );
};

exports.default = Icon;