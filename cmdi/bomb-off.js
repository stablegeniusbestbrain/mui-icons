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
      _react2.default.createElement('path', { d: 'M14.5 2.8c-1.8 0-3.3 1.4-3.3 3.2H10v1.3c-.7.2-1.3.5-1.9.9l9.7 9.7c.8-1.1 1.2-2.5 1.2-3.9 0-3.2-2.1-5.9-5-6.7V6h-1.3c0-1 .8-1.7 1.8-1.7s1.7.7 1.7 1.7c0 1.2 1.1 2.3 2.3 2.3 1.2 0 2.2-1.1 2.2-2.3v-.7h-1.5V6c0 .4-.3.8-.7.8s-.8-.4-.8-.8c0-1.8-1.4-3.2-3.2-3.2zM3.4 6.4L2 7.8l3.5 3.5C5.2 12.1 5 13 5 14c0 3.9 3.1 7 7 7 .9 0 1.8-.2 2.7-.5l3.5 3.5 1.4-1.4L3.4 6.4z' })
    )
  );
};

exports.default = Icon;