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
      _react2.default.createElement('path', { d: 'M20 11h3v2h-3v-2zM1 11h3v2H1v-2zM13 1v3h-2V1h2zM4.9 3.5L7 5.6 5.6 7 3.5 4.9l1.4-1.4zM17 5.6l2.1-2.1 1.4 1.4L18.4 7 17 5.6zM12 6c3.3 0 6 2.7 6 6 0 2.2-1.2 4.2-3 5.2V19c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-1.8c-1.8-1-3-3-3-5.2 0-3.3 2.7-6 6-6zm2 15v1c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-1h4zm-3-3h2v-2.1c1.7-.5 3-2 3-3.9 0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.9 1.3 3.4 3 3.9V18z' })
    )
  );
};

exports.default = Icon;