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
      _react2.default.createElement('path', { d: 'M13 11h2v2h-2m0 2h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-2V7h4V5h-4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2zm8 2H7V3h14m0-2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5z' })
    )
  );
};

exports.default = Icon;