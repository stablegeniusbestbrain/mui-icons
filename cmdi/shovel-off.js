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
      _react2.default.createElement('path', { d: 'M15.1 1.8l-2.8 2.9c-.8.7-.8 2 0 2.8l1.4 1.4-.7.7 1.4 1.5.8-.8 1.4 1.4c.7.8 2 .8 2.8 0l2.8-2.8-7.1-7.1zm2.8 8.5l-4.2-4.2 1.4-1.5 4.2 4.3-1.4 1.4zm2.8 9.9l-1.4 1.5-7.8-7.8-1 1 2.8 2.8-1.3 1.4c-5 4.9-8.5 1.4-8.5 1.4S-.1 17 4.9 12l1.4-1.4 2.8 2.8 1-1-7.8-7.7 1.5-1.4 16.9 16.9z' })
    )
  );
};

exports.default = Icon;