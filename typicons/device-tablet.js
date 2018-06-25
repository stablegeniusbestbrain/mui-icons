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
      _react2.default.createElement('path', { d: 'M17 4H8c-.5 0-1 .5-1 1v12c0 .6.5 1 1 1h3.5c0 .6.4 1 1 1s1-.4 1-1H17c.6 0 1-.4 1-1V5c0-.5-.4-1-1-1zm0 13H8V5h9v12zm1-16H7C5.3 1 4 2.3 4 4v15c0 1.7 1.3 3 3 3h11c1.7 0 3-1.3 3-3V4c0-1.7-1.3-3-3-3zm1 18c0 .6-.4 1-1 1H7c-.5 0-1-.4-1-1V4c0-.5.5-1 1-1h11c.6 0 1 .5 1 1v15z' })
    )
  );
};

exports.default = Icon;