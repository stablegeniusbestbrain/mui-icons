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
      _react2.default.createElement('path', { d: 'M3.1 1C2 1 1 2 1 3.1V5h2V3h2V1H3.1zM7 1v2h3V1H7zm5 0v2h2v2h2V3.1C16 2 15 1 13.9 1H12zM1 7v3h2V7H1zm8 0c-1.1 0-2 .9-2 2v7h6.9c1.1 0 2.1-1 2.1-2.1V7H9zm9 0v2h2v2h2V9c0-1.1-.9-2-2-2h-2zM9 9h5v5H9V9zm-8 3v1.9C1 15 2 16 3.1 16H5v-2H3v-2H1zm19 1v3h2v-3h-2zM7 18v2c0 1.1.9 2 2 2h2v-2H9v-2H7zm13 0v2h-2v2h2c1.1 0 2-.9 2-2v-2h-2zm-7 2v2h3v-2h-3z' })
    )
  );
};

exports.default = Icon;