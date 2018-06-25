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
      _react2.default.createElement('path', { d: 'M9 5c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0 10c2.7 0 8 1.3 8 4v2H1v-2c0-2.7 5.3-4 8-4zm7.8-9.6c2 2.2 2 5.2 0 7.2l-1.7-1.7c.8-1.1.8-2.7 0-3.9l1.7-1.6zM20.1 2c3.9 4 3.9 10.1 0 14l-1.7-1.6c2.8-3.2 2.8-7.7 0-10.8L20.1 2z' })
    )
  );
};

exports.default = Icon;