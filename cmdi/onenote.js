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
      _react2.default.createElement('path', { d: 'M2 4.8l12-1.7V5h7c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-1v8h-6v2L2 19.2V4.8zm9 12V8.3l-2 .2v4.3l-2-4L5 9v7l1.5.3v-5.5L9 16.5l2 .3zm3-2.8h4v-1h-4v1zm0-3h4v-1h-4v1zm0-3h4V7h-4v1zm0 8v1h4v-1h-4z' })
    )
  );
};

exports.default = Icon;