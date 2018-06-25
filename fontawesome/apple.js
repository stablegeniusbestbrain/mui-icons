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
      _react2.default.createElement('path', { d: 'M21.2 16.3q-.5 1.6-1.6 3.3-1.7 2.6-3.5 2.6-.6 0-1.8-.4-1.2-.4-2.1-.4-.8 0-1.9.4-1 .5-1.7.5-2.1 0-4.1-3.5-1.9-3.5-1.9-6.7 0-3.1 1.5-5 1.5-2 3.8-2 1 0 2.4.4t1.8.4q.6 0 1.9-.4 1.4-.5 2.3-.5 1.6 0 2.9.9.7.5 1.4 1.3-1.1.9-1.5 1.6-.9 1.3-.9 2.8 0 1.7.9 3t2.1 1.7zM16.2.6q0 .8-.4 1.8t-1.2 1.8q-.8.8-1.5 1-.5.1-1.4.2.1-2 1.1-3.4 1-1.5 3.3-2v.1q0 .1.1.2V.6z' })
    )
  );
};

exports.default = Icon;