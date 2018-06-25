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
      _react2.default.createElement('path', { d: 'M14 4v4H6V4h8zm1 9c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm-2 6v-4H7v4h6zm2-10c1.7 0 3 1.3 3 3v5h-3v4H5v-4H2v-5c0-1.7 1.3-3 3-3h10zm7-2v5h-2V7h2zm0 7v2h-2v-2h2z' })
    )
  );
};

exports.default = Icon;