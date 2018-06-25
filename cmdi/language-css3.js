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
      _react2.default.createElement('path', { d: 'M5 3l-.7 3.3h13.6l-.4 2.2H3.9l-.6 3.3h13.5l-.7 3.8-5.5 1.9-4.7-1.9.3-1.6H2.9l-.8 4 7.8 3 9.1-3 1.2-6 .2-1.2L21.9 3H5z' })
    )
  );
};

exports.default = Icon;