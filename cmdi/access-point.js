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
      _react2.default.createElement('path', { d: 'M4.9 4.9C3.1 6.7 2 9.2 2 12s1.1 5.3 2.9 7.1l1.4-1.4C4.9 16.2 4 14.2 4 12s.9-4.2 2.3-5.7L4.9 4.9zm14.2 0l-1.4 1.4C19.1 7.8 20 9.8 20 12s-.9 4.2-2.3 5.7l1.4 1.4c1.8-1.8 2.9-4.3 2.9-7.1s-1.1-5.3-2.9-7.1zM7.8 7.8C6.7 8.8 6 10.3 6 12c0 1.7.7 3.2 1.8 4.2l1.4-1.4C8.4 14.1 8 13.1 8 12c0-1.1.4-2.1 1.2-2.8L7.8 7.8zm8.4 0l-1.4 1.4c.8.7 1.2 1.7 1.2 2.8 0 1.1-.4 2.1-1.2 2.8l1.4 1.4c1.1-1 1.8-2.5 1.8-4.2 0-1.7-.7-3.2-1.8-4.2zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;