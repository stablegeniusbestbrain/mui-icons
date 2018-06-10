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
      _react2.default.createElement('path', { d: 'M10 9c0-.6.4-1 1-1s1 .4 1 1v4.5l1.2.1 5 2.2c.5.2.8.8.8 1.3v4.4c0 .8-.7 1.5-1.5 1.5H11c-.4 0-.7-.2-1-.4l-4.9-4.2.7-.8c.2-.2.5-.3.8-.3h.2L10 19V9zm1-4c2.2 0 4 1.8 4 4 0 1.5-.8 2.8-2 3.5v-1.3c.6-.5 1-1.3 1-2.2 0-1.7-1.3-3-3-3S8 7.3 8 9c0 .9.4 1.7 1 2.2v1.3c-1.2-.7-2-2-2-3.5 0-2.2 1.8-4 4-4z' })
    )
  );
};

exports.default = Icon;