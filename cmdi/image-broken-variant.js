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
      _react2.default.createElement('path', { d: 'M21 5v6.6l-3-3-4 4-4-4-4 4-3-3V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.4l3 3V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.6l3 3 4-4 4 4' })
    )
  );
};

exports.default = Icon;