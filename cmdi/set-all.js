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
      _react2.default.createElement('path', { d: 'M9 5c1 0 2.1.2 3 .7.9-.5 2-.7 3-.7 3.9 0 7 3.1 7 7s-3.1 7-7 7c-1 0-2.1-.2-3-.7-.9.5-2 .7-3 .7-3.9 0-7-3.1-7-7s3.1-7 7-7zm-.5 7c0 1.9.8 3.6 2.1 4.8l1-.5c-1.3-1-2.1-2.6-2.1-4.3 0-1.7.8-3.3 2.1-4.3l-1-.5C9.3 8.4 8.5 10.1 8.5 12zm7 0c0-1.9-.8-3.6-2.1-4.7l-1 .4c1.3 1 2.1 2.6 2.1 4.3 0 1.7-.8 3.3-2.1 4.3l1 .5c1.3-1.2 2.1-2.9 2.1-4.8z' })
    )
  );
};

exports.default = Icon;