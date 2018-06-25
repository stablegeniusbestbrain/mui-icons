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
      _react2.default.createElement('path', { d: 'M17.5 10.5h2v1h-2zm-13 0h2v3h-2zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 13.5c0 .8-.7 1.5-1.5 1.5H3V9h3.5c.8 0 1.5.7 1.5 1.5v3zm4.6 1.5h-1.5L9.4 9h1.5l1 3.4 1-3.4h1.5l-1.8 6zm8.4-3.5c0 .6-.4 1.2-.9 1.4L21 15h-1.5l-.9-2h-1.1v2H16V9h3.5c.9 0 1.5.7 1.5 1.5v1z' })
    )
  );
};

exports.default = Icon;