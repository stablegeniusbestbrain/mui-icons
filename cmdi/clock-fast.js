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
      _react2.default.createElement('path', { d: 'M15 4c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm0 2c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm-1 2h1.5v3.8l2.3 2.3-1 1.1-2.8-2.8V8zM2 18c-.6 0-1-.4-1-1s.4-1 1-1h3.8c.3.7.7 1.4 1.2 2H2zm1-5c-.6 0-1-.4-1-1s.4-1 1-1h2v2H3zm1-5c-.6 0-1-.4-1-1s.4-1 1-1h3c-.5.6-.9 1.3-1.2 2H4z' })
    )
  );
};

exports.default = Icon;