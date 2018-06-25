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
      _react2.default.createElement('path', { d: 'M21 11h-8V3c4.4 0 8 3.6 8 8zm-2 2c0 2.8-1.4 5.2-3.6 6.7L11.6 13H19zm-8 8c-2.8 0-5.2-1.4-6.7-3.6l6.5-3.7 3.8 6.5c-1.1.5-2.3.8-3.6.8zm-8-8c0-4.4 3.6-8 8-8v7.4l-7.2 4.2C3.3 15.5 3 14.3 3 13z' })
    )
  );
};

exports.default = Icon;