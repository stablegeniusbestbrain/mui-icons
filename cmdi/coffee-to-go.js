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
      _react2.default.createElement('path', { d: 'M3 19v-2h14l-1.7-1.8 1.4-1.4 4.1 4.2-4.1 4.2-1.4-1.4L17 19H3zM17 8V5h-2v3h2zm0-5c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-2v1c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4V3h14z' })
    )
  );
};

exports.default = Icon;