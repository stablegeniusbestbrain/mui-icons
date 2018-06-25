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
      _react2.default.createElement('path', { d: 'M6 3c1.7 0 3 1.3 3 3 0 1.3-.8 2.4-2 2.8v6.4c1.2.4 2 1.5 2 2.8 0 1.7-1.3 3-3 3s-3-1.3-3-3c0-1.3.8-2.4 2-2.8V8.8C3.8 8.4 3 7.3 3 6c0-1.7 1.3-3 3-3zm0 2c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm0 12c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm15 1c0 1.7-1.3 3-3 3s-3-1.3-3-3c0-1.3.8-2.4 2-2.8V7h-2v3.3L10.8 6 15 1.8V5h2c1.1 0 2 .9 2 2v8.2c1.2.4 2 1.5 2 2.8zm-3-1c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;