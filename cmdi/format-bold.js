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
      _react2.default.createElement('path', { d: 'M13.5 15.5H10v-3h3.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5zm-3.5-9h3c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-3m5.6 1.3c1-.7 1.7-1.8 1.7-2.8 0-2.3-1.8-4-4-4H7v14h7c2.1 0 3.8-1.7 3.8-3.8 0-1.5-.9-2.8-2.2-3.4z' })
    )
  );
};

exports.default = Icon;