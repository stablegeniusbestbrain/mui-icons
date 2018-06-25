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
      _react2.default.createElement('path', { d: 'M10 21H4v-4.4l3.8-3.8c-.2-.6-.3-1.2-.3-1.8 0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6H12v2h-2v2zm-4-2h2v-2h2v-2h3.5c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4c0 .6.1 1.1.4 1.6l.2.7L6 17.4V19zm7.5-9c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1m0-1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;