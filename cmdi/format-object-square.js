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
      _react2.default.createElement('path', { d: 'M12 7l5 10H7l5-10zM3 3h18v2H3V3zm0 4h3v2H3V7zm18 0v2h-3V7h3zM3 11h3v2H3v-2zm18 0v2h-3v-2h3zM3 15h3v2H3v-2zm18 0v2h-3v-2h3zM3 19h18v2H3v-2z' })
    )
  );
};

exports.default = Icon;