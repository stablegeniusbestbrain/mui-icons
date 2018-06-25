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
      _react2.default.createElement('path', { d: 'M16.5 6.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 5.5c1.9 0 3.5-1.6 3.5-3.5S18.4 5 16.5 5 13 6.6 13 8.5s1.6 3.5 3.5 3.5zm-9-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 5.5c1.9 0 3.5-1.6 3.5-3.5S9.4 5 7.5 5 4 6.6 4 8.5 5.6 12 7.5 12zm14 5.5H14v-1.2c0-.5-.2-.9-.5-1.3.9-.3 1.9-.5 3-.5 2.4 0 5 1.2 5 1.8m-9 1.2h-10v-1.2c0-.6 2.6-1.8 5-1.8s5 1.2 5 1.8m4-3.3c-1.2 0-3.1.3-4.5 1-1.4-.7-3.3-1-4.5-1C5.3 13 1 14.1 1 16.3V19h22v-2.7c0-2.2-4.3-3.3-6.5-3.3z' })
    )
  );
};

exports.default = Icon;