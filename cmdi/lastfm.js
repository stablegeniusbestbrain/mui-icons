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
      _react2.default.createElement('path', { d: 'M18 17.9c-2.1 0-3.2-1-4-2.8l-.2-.5-1.9-4.4C11.3 8.7 9.7 7.6 8 7.6c-2.4 0-4.4 2-4.4 4.4 0 2.4 2 4.4 4.4 4.4 1.6 0 3.1-1 3.8-2.4l.8 1.8C11.5 17.1 9.8 18 8 18c-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.4 1.3 5.5 3.7 0 .2 1 2.5 1.9 4.5.6 1.3 1 2.1 2.5 2.2 1.5 0 2.5-.9 2.5-2s-.8-1.4-2.1-1.8c-2.3-.8-3.5-1.6-3.5-3.5 0-1.8 1.2-3 3.2-3 1.3 0 2.2.6 2.9 1.8l-1.3.6c-.5-.7-1-.9-1.7-.9-.9 0-1.6.6-1.6 1.5 0 1.2 1.1 1.4 2.7 1.9 2 .7 3 1.5 3 3.4 0 2.1-1.7 3.5-4 3.5z' })
    )
  );
};

exports.default = Icon;