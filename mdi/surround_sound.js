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
      _react2.default.createElement('path', { d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.8 16.2l-1.5 1.4C4.8 16.1 4 14.1 4 12c0-2.1.8-4.1 2.3-5.7l1.5 1.5C6.6 8.9 6 10.5 6 12s.6 3.1 1.8 4.2zM12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm5.7 1.7l-1.4-1.4c1.1-1.2 1.7-2.8 1.7-4.3s-.6-3.1-1.8-4.2l1.4-1.5C19.2 7.9 20 9.9 20 12s-.8 4.1-2.3 5.7zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;