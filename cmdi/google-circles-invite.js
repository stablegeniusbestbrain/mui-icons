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
      _react2.default.createElement('path', { d: 'M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm5.5-5H14V8l4 4-4 4v-3h-3.5v-2zM5 6c-.5 0-.9 0-1.3.1C5.6 3.1 9.1 1 13 1c6.1 0 11 4.9 11 11s-4.9 11-11 11c-3.9 0-7.4-2.1-9.3-5.1.4 0 .8.1 1.3.1.8 0 1.6-.2 2.3-.4C8.7 19.1 10.7 20 13 20c4.4 0 8-3.6 8-8s-3.6-8-8-8c-2.3 0-4.3.9-5.7 2.4C6.6 6.2 5.8 6 5 6z' })
    )
  );
};

exports.default = Icon;