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
      _react2.default.createElement('path', { d: 'M13.1 19.1l2.3-2.3-2.3-2.3v4.6zm0-9.6l2.3-2.3-2.3-2.3v4.6zm.5 2.5l4.7 4.8-7.2 7.2v-9.5l-4 3.9L5.7 17l5-5-5-5 1.4-1.4 4 3.9V0l7.2 7.2z' })
    )
  );
};

exports.default = Icon;