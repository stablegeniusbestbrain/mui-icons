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
      _react2.default.createElement('path', { d: 'M2 5.3L3.3 4 20 20.7 18.7 22l-4-4H13v-1.7L9.7 13H8v-1.7L5.5 8.8c-1 .7-1.6 1.9-1.6 3.2 0 2.3 1.8 4.1 4.1 4.1h3V18H8c-3.3 0-6-2.7-6-6 0-1.8.8-3.5 2.1-4.6L2 5.3zM16 6c3.3 0 6 2.7 6 6 0 2.2-1.2 4.1-3 5.2l-1.4-1.4c1.5-.6 2.5-2.1 2.5-3.8 0-2.3-1.8-4.1-4.1-4.1h-3V6h3zM8 6h3v1.9H9.7L7.8 6H8zm8 5v2h-1.2l-2-2H16z' })
    )
  );
};

exports.default = Icon;