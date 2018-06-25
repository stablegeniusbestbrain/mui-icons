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
      _react2.default.createElement('path', { d: 'M12 2C9.1 2 6.6 3.6 5.3 6 2.3 6.4 0 8.9 0 12c0 3.3 2.7 6 6 6v4h12v-4h1c2.8 0 5-2.2 5-5 0-2.6-2.1-4.8-4.6-5-.7-3.4-3.8-6-7.4-6zM8 13h8v7H8v-7zm1 1v1h6v-1H9zm0 2v1h6v-1H9zm0 2v1h6v-1H9z' })
    )
  );
};

exports.default = Icon;