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
      _react2.default.createElement('circle', { cx: '9', cy: '9', r: '4' }),
      _react2.default.createElement('path', { d: 'M9 15c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4zm7.8-9.6L15.1 7c.8 1.2.8 2.8 0 3.9l1.7 1.7c2-2 2-5 0-7.2zM20.1 2l-1.7 1.6c2.8 3.1 2.8 7.6 0 10.8l1.7 1.6c3.9-3.9 3.9-9.9 0-14z' })
    )
  );
};

exports.default = Icon;