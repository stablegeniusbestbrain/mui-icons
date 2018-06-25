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
      _react2.default.createElement('path', { d: 'M15 5h-1V4h1m-5 1H9V4h1m5.5-1.8L16.8.9c.2-.2.2-.6 0-.8-.2-.2-.5-.2-.7 0l-1.4 1.5C13.8 1.2 13 1 12 1c-1 0-1.9.2-2.7.6L7.9.1c-.2-.2-.6-.2-.8 0-.2.2-.2.6 0 .8l1.4 1.3C7 3.3 6 5 6 7h12c0-2-1-3.7-2.5-4.8zm5 5.8c-.8 0-1.5.7-1.5 1.5v7c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-7c0-.8-.7-1.5-1.5-1.5zm-17 0C2.7 8 2 8.7 2 9.5v7c0 .8.7 1.5 1.5 1.5S5 17.3 5 16.5v-7C5 8.7 4.3 8 3.5 8zM6 18c0 .5.4 1 1 1h1v3.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V19h2v3.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V19h1c.6 0 1-.5 1-1V8H6v10z' })
    )
  );
};

exports.default = Icon;