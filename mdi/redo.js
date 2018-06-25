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
      _react2.default.createElement('path', { d: 'M18.4 10.6C16.6 9 14.2 8 11.5 8c-4.7 0-8.6 3-10 7.2l2.4.8c1.1-3.2 4-5.5 7.6-5.5 1.9 0 3.7.7 5.1 1.9L13 16h9V7l-3.6 3.6z' })
    )
  );
};

exports.default = Icon;