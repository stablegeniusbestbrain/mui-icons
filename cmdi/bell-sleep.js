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
      _react2.default.createElement('path', { d: 'M14 9.8l-2.8 3.4H14V15H9v-1.8l2.8-3.4H9V8h5m4 8v-5.5c0-3.1-2.1-5.6-5-6.3v-.7c0-.8-.7-1.5-1.5-1.5S10 2.7 10 3.5v.7c-2.9.7-5 3.2-5 6.3V16l-2 2v1h17v-1m-8.5 4c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z' })
    )
  );
};

exports.default = Icon;