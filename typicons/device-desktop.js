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
      _react2.default.createElement('path', { d: 'M21 1H3C1.3 1 0 2.3 0 4v11c0 1.7 1.3 3 3 3h6v2H6c-.6 0-1 .4-1 1s.4 1 1 1h12c.6 0 1-.4 1-1s-.4-1-1-1h-3v-2h6c1.7 0 3-1.3 3-3V4c0-1.7-1.3-3-3-3zm-7 19h-4v-2h4v2zm8-5c0 .6-.4 1-1 1H3c-.5 0-1-.4-1-1V4c0-.5.5-1 1-1h18c.6 0 1 .5 1 1v11zM20 4H4c-.5 0-1 .5-1 1v8c0 .6.5 1 1 1h16c.6 0 1-.4 1-1V5c0-.5-.4-1-1-1zm0 9H4V5h16v8z' })
    )
  );
};

exports.default = Icon;