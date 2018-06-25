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
      _react2.default.createElement('path', { d: 'M17.8 7L14 3.3l-10 10V17h3.8l10-10zm2.9-3c.4-.4.4-1 0-1.4L18.4.3c-.4-.4-1-.4-1.4 0l-2 2L18.8 6l1.9-2z' }),
      _react2.default.createElement('path', { d: 'M0 20h24v4H0z' })
    )
  );
};

exports.default = Icon;