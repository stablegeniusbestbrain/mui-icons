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
      _react2.default.createElement('path', { d: 'M14.3 7.5l3.7 3.8-3.7 3.7-1.2-1.1 2.7-2.6-2.7-2.7 1.2-1.1zm-4.5 0L6 11.3 9.8 15l1.1-1.1-2.6-2.6 2.6-2.7-1.1-1.1zM3 19.5V3c0-.8.7-1.5 1.5-1.5h15c.8 0 1.5.7 1.5 1.5v16.5c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5zm1.5 0h15V3h-15v16.5z' })
    )
  );
};

exports.default = Icon;