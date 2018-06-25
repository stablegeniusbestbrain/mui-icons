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
      _react2.default.createElement('path', { d: 'M17 21H9c-1.7 0-3-1.3-3-3V6c0-1.7 1.3-3 3-3h8c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3zM9 5c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H9z' }),
      _react2.default.createElement('circle', { cx: '10', cy: '11', r: '1' }),
      _react2.default.createElement('circle', { cx: '13', cy: '11', r: '1' }),
      _react2.default.createElement('circle', { cx: '16', cy: '11', r: '1' }),
      _react2.default.createElement('circle', { cx: '10', cy: '14', r: '1' }),
      _react2.default.createElement('circle', { cx: '13', cy: '14', r: '1' }),
      _react2.default.createElement('circle', { cx: '16', cy: '14', r: '1' }),
      _react2.default.createElement('circle', { cx: '10', cy: '17', r: '1' }),
      _react2.default.createElement('circle', { cx: '13', cy: '17', r: '1' }),
      _react2.default.createElement('circle', { cx: '16', cy: '17', r: '1' }),
      _react2.default.createElement('path', { d: 'M16 7v1h-6V7h6m1-1H9v3h8V6z' })
    )
  );
};

exports.default = Icon;