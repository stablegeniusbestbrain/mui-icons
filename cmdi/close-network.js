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
      _react2.default.createElement('path', { d: 'M14.6 6L12 8.6 9.4 6 8 7.4l2.6 2.6L8 12.6 9.4 14l2.6-2.6 2.6 2.6 1.4-1.4-2.6-2.6L16 7.4 14.6 6zM17 3c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-4v2h1c.6 0 1 .4 1 1h7v2h-7c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1H2v-2h7c0-.6.4-1 1-1h1v-2H7c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h10z' })
    )
  );
};

exports.default = Icon;