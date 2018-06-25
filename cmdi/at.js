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
      _react2.default.createElement('path', { d: 'M17.4 15c.4-.9.6-1.9.6-3 0-3.9-2.7-7-6-7s-6 3.1-6 7 2.7 7 6 7c1.5 0 3 0 4-.8v2.3c-1 .5-2.5.5-4 .5-4.4 0-8-4-8-9s3.6-9 8-9 8 4 8 9c0 1.8-.5 3.6-1.3 5H14v-1.5c-.6.9-1.5 1.5-2.5 1.5C9.6 17 8 14.8 8 12s1.6-5 3.5-5c1 0 1.9.6 2.5 1.5V8h2v7h1.4zM12 9c-1.1 0-2 1.3-2 3s.9 3 2 3 2-1.3 2-3-.9-3-2-3z' })
    )
  );
};

exports.default = Icon;