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
      _react2.default.createElement('path', { d: 'M2 5.3L3.3 4 20 20.7 18.7 22l-6-6H9v-2l.8-.9L2 5.3zM23 12h-6v-2l3.4-4H17V4h6v2l-3.4 4H23v2zM9.8 8H15v2l-1.5 1.7L9.8 8zM7 20H1v-2l3.4-4H1v-2h6v2l-3.4 4H7v2z' })
    )
  );
};

exports.default = Icon;