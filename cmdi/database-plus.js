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
      _react2.default.createElement('path', { d: 'M9 3C4.6 3 1 4.8 1 7s3.6 4 8 4 8-1.8 8-4-3.6-4-8-4zM1 9v3c0 2.2 3.6 4 8 4s8-1.8 8-4V9c0 2.2-3.6 4-8 4s-8-1.8-8-4zm0 5v3c0 2.2 3.6 4 8 4 1.4 0 2.8-.2 4-.5v-3c-1.2.3-2.6.5-4 .5-4.4 0-8-1.8-8-4zm17 0v3h-3v2h3v3h2v-3h3v-2h-3v-3' })
    )
  );
};

exports.default = Icon;