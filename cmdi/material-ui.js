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
      _react2.default.createElement('path', { d: 'M8 16.6v-1.2l6-3.5V7.2l-5 2.9-5-2.9V13l-1 .6-1-.6V5l1.1-.6L9 7.8l3.9-2.3 2-1.1L16 5v8.1L10.9 16l4.1 2.3 5-2.9V11l1-.6 1 .6v5.6l-7 4-7-4zm14-6.8l-1 .5-1-.5V8.6l1-.6 1 .6v1.2z' })
    )
  );
};

exports.default = Icon;