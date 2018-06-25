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
      _react2.default.createElement('path', { d: 'M20 22c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h11zm0-2H9V9h11v11zM5 16v-2H3V3h11v2h2V3c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h2z' })
    )
  );
};

exports.default = Icon;