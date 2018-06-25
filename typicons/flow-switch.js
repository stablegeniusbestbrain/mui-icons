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
      _react2.default.createElement('path', { d: 'M8 16.2v-.7c0-.8.5-1.6 1.3-2-.7-.3-1.3-.7-1.8-1.2-.9.8-1.5 2-1.5 3.2v.7c-1.2.4-2 1.5-2 2.8 0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.3-.8-2.4-2-2.8zM7 20c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm9-12.2v.4c0 1-.5 1.8-1.3 2.3.6.3 1.2.7 1.8 1.1.9-.9 1.5-2.1 1.5-3.4v-.4c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3s-3 1.3-3 3c0 1.3.8 2.4 2 2.8zM17 4c.6 0 1 .5 1 1s-.4 1-1 1-1-.5-1-1 .4-1 1-1zm.9 12.2C17.5 13.3 15 11 12 11c-1.9 0-3.6-1.4-3.9-3.2C9.2 7.4 10 6.3 10 5c0-1.7-1.3-3-3-3S4 3.3 4 5c0 1.3.9 2.4 2.1 2.8.4 3 2.9 5.2 5.9 5.2 1.9 0 3.6 1.4 3.9 3.2-1.1.4-1.9 1.5-1.9 2.8 0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.3-.9-2.4-2.1-2.8zM7 4c.6 0 1 .5 1 1s-.4 1-1 1-1-.5-1-1 .4-1 1-1zm10 16c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z' })
    )
  );
};

exports.default = Icon;