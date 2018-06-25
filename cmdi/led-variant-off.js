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
      _react2.default.createElement('path', { d: 'M12 3c-2 0-3.6 1.4-3.9 3.3l8.7 8.7H18v-2h-2V7c0-2.2-1.8-4-4-4zM3.3 4L2 5.3l6 6V13H6v2h3v6h2v-6h.7l1.3 1.3V21h2v-2.7l3.7 3.7 1.3-1.3-5-5-7-7L3.3 4z' })
    )
  );
};

exports.default = Icon;