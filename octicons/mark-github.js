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
      _react2.default.createElement('path', { d: 'M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3 .5-3.8-.8-4-1.4-.2-.4-.7-1.4-1.3-1.7-.4-.3-1-.8 0-.8s1.7.8 1.9 1.2c1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.4-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.4 3.3 1.2 1-.3 2-.4 3-.4s2.1.1 3 .4C17.3 4.6 18.3 5 18.3 5c.7 1.6.3 2.8.1 3.1.8.9 1.3 1.9 1.3 3.3 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 24 12c0-6.6-5.4-12-12-12z' })
    )
  );
};

exports.default = Icon;