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
      _react2.default.createElement('path', { d: 'M5 3h2v2H5v5c0 1.1-.9 2-2 2 1.1 0 2 .9 2 2v5h2v2H5c-1.1-.3-2-.9-2-2v-4c0-1.1-.9-2-2-2H0v-2h1c1.1 0 2-.9 2-2V5c0-1.1.9-2 2-2zm14 0c1.1 0 2 .9 2 2v4c0 1.1.9 2 2 2h1v2h-1c-1.1 0-2 .9-2 2v4c0 1.1-.9 1.7-2 2h-2v-2h2v-5c0-1.1.9-2 2-2-1.1 0-2-.9-2-2V5h-2V3h2zm-7 12c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-4 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm8 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z' })
    )
  );
};

exports.default = Icon;