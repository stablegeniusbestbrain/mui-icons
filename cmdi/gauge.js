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
      _react2.default.createElement('path', { d: 'M17.3 18c1.7-1.5 2.7-3.6 2.7-6 0-4.4-3.6-8-8-8s-8 3.6-8 8c0 2.4 1 4.5 2.7 6 1.5-1.3 3.3-2 5.3-2s3.9.7 5.3 2zM12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zM7 9c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm3-3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm7 3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-2.6-2.9c.5.2.7.8.6 1.3l-1.4 3.4c.2.3.4.7.4 1.2 0 1.1-.9 2-2 2s-2-.9-2-2c0-1 .7-1.9 1.7-2l1.4-3.3c.2-.6.8-.8 1.3-.6z' })
    )
  );
};

exports.default = Icon;