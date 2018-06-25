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
      _react2.default.createElement('path', { d: 'M11.7 19c-1.8 0-3.2-1.4-3.2-3.1 0-1.7 1-2.8 2.8-3.2 1.8-.3 3.6-1.2 4.6-2.5.4 1.3.6 2.6.6 4 0 2.6-2.1 4.8-4.8 4.8zM13.5.7s.7 2.6.7 4.8c0 2-1.3 3.7-3.4 3.7-2 0-3.6-1.7-3.6-3.7v-.4C5.2 7.5 4 10.6 4 14c0 4.4 3.6 8 8 8s8-3.6 8-8C20 8.6 17.4 3.8 13.5.7z' })
    )
  );
};

exports.default = Icon;