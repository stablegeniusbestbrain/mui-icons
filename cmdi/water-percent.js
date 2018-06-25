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
      _react2.default.createElement('path', { d: 'M12 3.3S6 10 6 14c0 3.3 2.7 6 6 6s6-2.7 6-6c0-4-6-10.7-6-10.7zm2.5 6.7l1 1-6 6-1-1m1.3-6c.6 0 1.2.6 1.2 1.3s-.6 1.2-1.2 1.2c-.7 0-1.3-.6-1.3-1.2S9.1 10 9.8 10zm4.4 4.5c.7 0 1.3.6 1.3 1.3 0 .6-.6 1.2-1.3 1.2-.6 0-1.2-.6-1.2-1.2 0-.7.6-1.3 1.2-1.3z' })
    )
  );
};

exports.default = Icon;