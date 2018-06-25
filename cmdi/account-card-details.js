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
      _react2.default.createElement('path', { d: 'M2 3h20c1 0 2 1 2 2v14c0 1-1 2-2 2H2c-1 0-2-1-2-2V5c0-1 1-2 2-2zm12 3v1h8V6h-8zm0 2v1h8V8h-8zm0 2v1h7v-1h-7zm-6 3.9c-2 0-6 1.1-6 3.1v1h12v-1c0-2-4-3.1-6-3.1zM8 6C6.3 6 5 7.3 5 9s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z' })
    )
  );
};

exports.default = Icon;