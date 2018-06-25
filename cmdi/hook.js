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
      _react2.default.createElement('path', { d: 'M18 6c0 1.8-1.2 3.4-3 3.9V17c0 2.8-2.2 5-5 5s-5-2.2-5-5v-5l5 5H7c0 1.7 1.3 3 3 3s3-1.3 3-3V9.9c-1.8-.5-3-2.1-3-3.9 0-2.2 1.8-4 4-4s4 1.8 4 4zm-4 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z' })
    )
  );
};

exports.default = Icon;