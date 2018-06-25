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
      _react2.default.createElement('path', { d: 'M9 22c-.6 0-1-.4-1-1v-3H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-6.1l-3.7 3.7c-.2.2-.4.3-.7.3H9zm1-6v3.1l3.1-3.1H20V4H4v12h6zM9.4 6L12 8.6 14.6 6 16 7.4 13.4 10l2.6 2.6-1.4 1.4-2.6-2.6L9.4 14 8 12.6l2.6-2.6L8 7.4 9.4 6z' })
    )
  );
};

exports.default = Icon;