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
      _react2.default.createElement('path', { d: 'M20.8 13.9l-2.3.7-2-1.2v-2.8l2-1.2 2.3.6.5-1.9-1.8-.5.5-1.7-1.9-.5-.7 2.3-2 1.1L13 7.4V5.1l1.7-1.7L13.3 2 12 3.3 10.7 2 9.3 3.4 11 5.1v2.3L8.5 8.8l-2-1.1-.6-2.3-1.9.5.5 1.8-1.8.4.5 2 2.3-.7 2 1.2v2.9l-2 1.1-2.3-.6-.5 1.9 1.8.5-.5 1.7 1.9.5.6-2.3 2.1-1.1 2.4 1.4v2.3l-1.7 1.7 1.4 1.4 1.3-1.3 1.3 1.3 1.4-1.4-1.7-1.7v-2.3l2.5-1.4 2 1.1.6 2.3 1.9-.5-.5-1.8 1.8-.4-.5-2zM9.5 10.6L12 9.1l2.5 1.5v2.8L12 14.9l-2.5-1.5v-2.8z' })
    )
  );
};

exports.default = Icon;