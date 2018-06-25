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
      _react2.default.createElement('path', { d: 'M20 20H4c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h16c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3zM4 6c-.5 0-1 .5-1 1v10c0 .6.5 1 1 1h16c.6 0 1-.4 1-1V7c0-.5-.4-1-1-1H4zm6 9H6c-.6 0-1-.4-1-1s.4-1 1-1h4c.6 0 1 .4 1 1s-.4 1-1 1zm0-4H6c-.6 0-1-.4-1-1s.4-1 1-1h4c.6 0 1 .4 1 1s-.4 1-1 1z' }),
      _react2.default.createElement('circle', { cx: '16', cy: '10.5', r: '2' }),
      _react2.default.createElement('path', { d: 'M16 13.4c-1.6 0-2.5.7-2.5 1.4 0 .3.9.7 2.5.7 1.5 0 2.5-.4 2.5-.7 0-.7-1-1.4-2.5-1.4z' })
    )
  );
};

exports.default = Icon;