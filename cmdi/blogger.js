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
      _react2.default.createElement('path', { d: 'M14 13H9.9c-.5 0-1 .4-1 1s.5 1 1 1H14c.6 0 1-.4 1-1s-.4-1-1-1zm-4.1-3h2.6c.6 0 1-.4 1-1s-.4-1-1-1H9.9c-.5 0-1 .4-1 1s.5 1 1 1zM16 9v1c0 .6.4 1 1 1s1 .4 1 1v3c0 1.7-1.3 3-3 3H9c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3h4c1.7 0 3 1.3 3 3m4-6H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;