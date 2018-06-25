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
      _react2.default.createElement('path', { d: 'M19.5 15H21v4.5c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5v-15C3 3.7 3.7 3 4.5 3H9v1.5H4.5v15h15V15zM12 3l3.4 3.4-4.9 4.9 2.3 2.2 4.8-4.9L21 12V3h-9z' })
    )
  );
};

exports.default = Icon;