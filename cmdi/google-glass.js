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
      _react2.default.createElement('path', { d: 'M13 11v2.5h5.9c-.6 3.5-3.4 6-6.9 6-4.1 0-7.5-3.4-7.5-7.5S7.9 4.5 12 4.5c2.1 0 3.9.9 5.2 2.3l1.7-1.7C17.2 3.2 14.8 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10 9.5-4.5 9.5-10v-1H13z' })
    )
  );
};

exports.default = Icon;