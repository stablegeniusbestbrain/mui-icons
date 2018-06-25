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
      _react2.default.createElement('path', { d: 'M15.1 1.8l-2.8 2.8c-.8.8-.8 2.1 0 2.9l1.4 1.4-4.6 4.5-2.8-2.8L4.9 12c-5 5-1.4 8.5-1.4 8.5S7 24 12 19.1l1.4-1.4-2.8-2.8 4.5-4.6 1.4 1.4c.8.8 2.1.8 2.9 0l2.8-2.8-7.1-7.1zm2.8 8.5l-1.3-1.4-1.5-1.4-1.4-1.4 1.4-1.4 4.3 4.2-1.5 1.4z' })
    )
  );
};

exports.default = Icon;