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
      _react2.default.createElement('path', { d: 'M18 12c0-1.7-.7-3.2-1.8-4.2C15.2 6.7 13.7 6 12 6c-1.7 0-3.2.7-4.2 1.8C6.7 8.8 6 10.3 6 12c0 1.7.7 3.2 1.8 4.2S10.3 18 12 18c1.7 0 3.2-.7 4.2-1.8 1.1-1 1.8-2.5 1.8-4.2z' })
    )
  );
};

exports.default = Icon;