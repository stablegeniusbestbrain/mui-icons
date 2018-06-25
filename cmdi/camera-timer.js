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
      _react2.default.createElement('path', { d: 'M4.9 6.3c-.4-.3-.4-1 0-1.4.4-.4 1.1-.4 1.5 0l6.7 5.4.3.3c.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0l-.3-.3-5.4-6.8zM12 20c4.4 0 8-3.6 8-8 0-2.2-.9-4.2-2.3-5.7l1.4-1.4C20.9 6.7 22 9.2 22 12c0 5.5-4.5 10-10 10S2 17.5 2 12h2c0 4.4 3.6 8 8 8zm0-19c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z' })
    )
  );
};

exports.default = Icon;