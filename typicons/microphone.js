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
      _react2.default.createElement('path', { d: 'M12 16c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4S8 3.8 8 6v6c0 2.2 1.8 4 4 4zm7-4v-2c0-.6-.4-1-1-1s-1 .4-1 1v2c0 2.8-2.2 5-5 5s-5-2.2-5-5v-2c0-.6-.4-1-1-1s-1 .4-1 1v2c0 3.5 2.6 6.4 6 6.9V20H8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1h-3v-1.1c3.4-.5 6-3.4 6-6.9z' })
    )
  );
};

exports.default = Icon;