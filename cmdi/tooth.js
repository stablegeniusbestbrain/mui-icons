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
      _react2.default.createElement('path', { d: 'M7 2C4 2 2 5 2 8c0 2.1 1 5 2 6s2 8 4 8c4.5 0 2-7 4-7s-.5 7 4 7c2 0 3-7 4-8s2-3.9 2-6c0-3-2-6-5-6s-3 1-5 1-2-1-5-1zm0 2c2 0 3 1 5 1s3-1 5-1c1.7 0 3 2 3 4 0 1.8-.9 4.1-1.8 5.1-.9.8-2.1 6.8-2.7 6.8-.2 0-.5-1-.5-2.3 0-2-.6-4.6-3-4.6s-3 2.6-3 4.6c0 1.3-.3 2.3-.5 2.3-.6 0-1.8-6-2.7-6.8C4.9 12.1 4 9.8 4 8c0-2 1.3-4 3-4z' })
    )
  );
};

exports.default = Icon;