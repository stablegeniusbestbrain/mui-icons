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
      _react2.default.createElement('path', { d: 'M12.9 3l1.9.4L11.1 21l-1.9-.4L12.9 3zm6.7 9L16 8.4V5.6l6.4 6.4-6.4 6.4v-2.8l3.6-3.6zm-18 0L8 5.6v2.8L4.4 12 8 15.6v2.8L1.6 12z' })
    )
  );
};

exports.default = Icon;