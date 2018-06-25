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
      _react2.default.createElement('path', { d: 'M19.6 3H15V1h8v8h-2V4.4l-4.8 4.8c.5.8.8 1.8.8 2.8 0 2.4-1.7 4.4-4 4.9V19h2v2h-2v2h-2v-2H9v-2h2v-2.1c-2.3-.5-4-2.5-4-4.9 0-1 .3-2 .8-2.7L6.6 8.1 5.2 9.5 3.8 8l1.4-1.3L3 4.4V8H1V1h7v2H4.4l2.2 2.2 1.5-1.4 1.4 1.4-1.4 1.5 1.1 1.1C10 7.3 11 7 12 7c1 0 2 .3 2.8.8L19.6 3zM12 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z' })
    )
  );
};

exports.default = Icon;