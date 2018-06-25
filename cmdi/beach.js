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
      _react2.default.createElement('path', { d: 'M15 18.5c2.1-.3 4.5-.5 7-.5v4H5c0-.6 3.2-2.1 8-3.1v-6.5c-.8.2-1.6.8-2 1.5-.6-1-1.7-1.6-3-1.6s-2.4.6-3 1.6c0-3.5 3.5-6.5 8-6.9 0-.6.4-1 1-1s1 .4 1 1c4.5.4 8 3.4 8 6.9-.6-1-1.7-1.6-3-1.6s-2.4.6-3 1.6c-.4-.7-1.2-1.3-2-1.5v6.1zM7 2c0 2.8-2.2 5-5 5V2h5z' })
    )
  );
};

exports.default = Icon;