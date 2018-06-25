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
      _react2.default.createElement('path', { d: 'M12.6 14.3c-.4.3-.6.7-.6 1.2V21h7c1.1 0 2-.9 2-2v-6c-.9-.3-1.9-.5-3-.5-2 0-3.9.7-5.4 1.8z' }),
      _react2.default.createElement('circle', { cx: '18', cy: '6', r: '5' }),
      _react2.default.createElement('path', { d: 'M11.5 6c0-1.1.3-2.1.7-3H5c-1.1 0-2 .9-2 2v14c0 .6.2 1.1.6 1.4l9.8-9.8A6.42 6.42 0 0 1 11.5 6z' })
    )
  );
};

exports.default = Icon;