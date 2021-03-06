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
      _react2.default.createElement('circle', { cx: '7.2', cy: '14.4', r: '3.2' }),
      _react2.default.createElement('circle', { cx: '14.8', cy: '18', r: '2' }),
      _react2.default.createElement('circle', { cx: '15.2', cy: '8.8', r: '4.8' })
    )
  );
};

exports.default = Icon;