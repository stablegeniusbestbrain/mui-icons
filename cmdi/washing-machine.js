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
      _react2.default.createElement('path', { d: 'M14.8 11.2c1.6 1.5 1.6 4.1 0 5.6-1.5 1.6-4.1 1.6-5.6 0l5.6-5.6zM6 2h12c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm1 2c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm3 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm2 4c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z' })
    )
  );
};

exports.default = Icon;