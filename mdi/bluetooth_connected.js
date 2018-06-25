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
      _react2.default.createElement('path', { d: 'M7 12l-2-2-2 2 2 2 2-2zm10.7-4.3L12 2h-1v7.6L6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l4.6-4.6V22h1l5.7-5.7-4.3-4.3 4.3-4.3zM13 5.8l1.9 1.9L13 9.6V5.8zm1.9 10.5L13 18.2v-3.8l1.9 1.9zM19 10l-2 2 2 2 2-2-2-2z' })
    )
  );
};

exports.default = Icon;