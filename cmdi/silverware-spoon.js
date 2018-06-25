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
      _react2.default.createElement('path', { d: 'M14.9 11.5l-9.8 9.8-1.4-1.4 9.8-9.8c-.7-1.5-.2-3.7 1.3-5.3 2-1.9 4.7-2.2 6.2-.8 1.4 1.5 1.1 4.2-.8 6.1-1.6 1.6-3.8 2.1-5.3 1.4z' })
    )
  );
};

exports.default = Icon;