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
      _react2.default.createElement('path', { d: 'M18 .2v3.5h-2.1q-1.2 0-1.6.5t-.4 1.4v2.6h4l-.6 3.9h-3.4v10.2H9.8V12.1H6.4V8.2h3.4v-3q0-2.5 1.4-3.8T14.9 0q2 0 3.1.2z' })
    )
  );
};

exports.default = Icon;