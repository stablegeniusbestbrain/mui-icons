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
      _react2.default.createElement('path', { d: 'M2 5.3L3.3 4 21 21.7 19.7 23l-2-2h-2.2l-.3-2.5-2.2-2.3c-.1.5-.5.8-1 .8H3c-.6 0-1-.4-1-1s.4-1 1-1h5l1.5 1.5L11 15h.7l-1-1H2c0-1.7 1.3-3 3-3h2.7L2 5.3zM14 8h2.2l-1.1-4.5 1.7-.5 1.3 5H22l-1.3 10.9-6.2-6.2L14 8zm-1 10c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3h11z' })
    )
  );
};

exports.default = Icon;