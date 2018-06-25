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
      _react2.default.createElement('path', { d: 'M19 3H8C6.3 3 5 4.3 5 6v1H4c-.6 0-1 .4-1 1s.4 1 1 1h1v2H4c-.6 0-1 .4-1 1s.4 1 1 1h1v2H4c-.6 0-1 .4-1 1s.4 1 1 1h1v1c0 1.7 1.3 3 3 3h11c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zM7 6c0-.5.5-1 1-1v2H7V6zm0 3h1v2H7V9zm0 4h1v2H7v-2zm0 5v-1h1v2c-.5 0-1-.4-1-1zm13 0c0 .6-.4 1-1 1H9V5h10c.6 0 1 .5 1 1v12z' }),
      _react2.default.createElement('circle', { cx: '14', cy: '10.5', r: '2' }),
      _react2.default.createElement('path', { d: 'M14 13.4c-1.6 0-2.5.7-2.5 1.4 0 .3.9.7 2.5.7 1.5 0 2.5-.4 2.5-.7 0-.7-1-1.4-2.5-1.4z' })
    )
  );
};

exports.default = Icon;