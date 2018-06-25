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
      _react2.default.createElement('path', { d: 'M23 12l-2.4 2.8.3 3.7-3.6.8-1.9 3.2L12 21l-3.4 1.5-1.9-3.2-3.6-.8.3-3.7L1 12l2.4-2.8-.3-3.7 3.6-.8 1.9-3.2L12 3l3.4-1.5 1.9 3.2 3.6.8-.3 3.7L23 12zm-2.7 0l-1.8-2.1.2-2.8-2.7-.6-1.4-2.4L12 5.2 9.4 4.1 8 6.5l-2.7.6.2 2.8L3.7 12l1.8 2.1-.2 2.8 2.7.6 1.4 2.4 2.6-1.1 2.6 1.1 1.4-2.4 2.7-.6-.2-2.8 1.8-2.1z' })
    )
  );
};

exports.default = Icon;