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
      _react2.default.createElement('path', { d: 'M7 6h10c3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-.8-4.5-2h-1c-1.1 1.2-2.7 2-4.5 2-3.3 0-6-2.7-6-6s2.7-6 6-6zM6 9v2H4v2h2v2h2v-2h2v-2H8V9H6zm9.5 3c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm3-3c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5S19.3 9 18.5 9z' })
    )
  );
};

exports.default = Icon;