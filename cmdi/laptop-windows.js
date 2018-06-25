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
      _react2.default.createElement('path', { d: 'M3 4h18c.6 0 1 .4 1 1v11c0 .6-.4 1-1 1h1l2 3v1H0v-1l2-3h1c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1zm1 2v9h16V6H4z' })
    )
  );
};

exports.default = Icon;