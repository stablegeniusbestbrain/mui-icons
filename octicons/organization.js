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
      _react2.default.createElement('path', { d: 'M24 19.5c0 .7-.7 1.5-1.5 1.5H12c-.8 0-1.5-.7-1.5-1.5h-9C.7 19.5 0 18.7 0 18c0-4 4.5-6 4.5-6s.3-.6 0-1.5C3.2 9.6 2.9 9.6 3 6c.1-3.6 2.1-4.5 3.8-4.5s3.6.9 3.7 4.5c.1 3.6-.2 3.6-1.5 4.5-.3.9 0 1.5 0 1.5s2.3 1.1 3.6 3.1c1.2-1 2.4-1.6 2.4-1.6s.3-.6 0-1.5c-1.3-.9-1.6-.9-1.5-4.5.1-3.6 2.1-4.5 3.8-4.5s3.6.9 3.7 4.5c.1 3.6-.2 3.6-1.5 4.5-.4.9 0 1.5 0 1.5s4.5 2 4.5 6' })
    )
  );
};

exports.default = Icon;