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
      _react2.default.createElement('circle', { cx: '6.18', cy: '17.82', r: '2.18' }),
      _react2.default.createElement('path', { d: 'M4 4.4v2.9c7 0 12.7 5.7 12.7 12.7h2.9c0-8.6-7-15.6-15.6-15.6zm0 5.7v2.8c3.9 0 7.1 3.2 7.1 7.1h2.8c0-5.5-4.4-9.9-9.9-9.9z' })
    )
  );
};

exports.default = Icon;