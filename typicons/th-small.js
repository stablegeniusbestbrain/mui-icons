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
      _react2.default.createElement('circle', { cx: '5', cy: '19', r: '2.5' }),
      _react2.default.createElement('circle', { cx: '5', cy: '12', r: '2.5' }),
      _react2.default.createElement('circle', { cx: '5', cy: '5', r: '2.5' }),
      _react2.default.createElement('circle', { cx: '12', cy: '19', r: '2.5' }),
      _react2.default.createElement('circle', { cx: '12', cy: '12', r: '2.5' }),
      _react2.default.createElement('circle', { cx: '12', cy: '5', r: '2.5' }),
      _react2.default.createElement('circle', { cx: '19', cy: '19', r: '2.5' }),
      _react2.default.createElement('circle', { cx: '19', cy: '12', r: '2.5' }),
      _react2.default.createElement('circle', { cx: '19', cy: '5', r: '2.5' })
    )
  );
};

exports.default = Icon;