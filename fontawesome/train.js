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
      _react2.default.createElement('path', { d: 'M16.3 0q2.5 0 4.2 1.3t1.8 3v12q0 1.7-1.7 3t-4.1 1.3l2.9 2.7q.2.2.1.4t-.4.3H4.9q-.3 0-.4-.3t.1-.4l2.9-2.7q-2.4-.1-4.1-1.3t-1.7-3v-12q0-1.8 1.8-3T7.7 0h8.6zM12 18q1.1 0 1.8-.7t.8-1.9-.8-1.8-1.8-.7-1.8.7-.8 1.8.8 1.9 1.8.7zm7.7-7.7V3.4H4.3v6.9h15.4z' })
    )
  );
};

exports.default = Icon;