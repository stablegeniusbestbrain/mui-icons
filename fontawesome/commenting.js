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
      _react2.default.createElement('path', { d: 'M8.6 12q0-.7-.5-1.2t-1.2-.5-1.3.5-.5 1.2.5 1.2 1.3.5 1.2-.5.5-1.2zm5.1 0q0-.7-.5-1.2t-1.2-.5-1.2.5-.5 1.2.5 1.2 1.2.5 1.2-.5.5-1.2zm5.2 0q0-.7-.5-1.2t-1.3-.5-1.2.5-.5 1.2.5 1.2 1.2.5 1.3-.5.5-1.2zm5.1 0q0 2.3-1.6 4.3T18 19.4t-6 1.2q-1.5 0-2.8-.3-2.3 2.3-5.9 3.1-.6.1-1.1.2-.2 0-.3-.1t-.2-.2q0-.3.3-.5l.3-.3q.2-.2.4-.3t.3-.4.3-.4.3-.5.2-.7.2-.7.2-1q-2-1.2-3.1-2.9T0 12q0-2.3 1.6-4.3T6 4.6t6-1.2 6 1.2 4.4 3.1T24 12z' })
    )
  );
};

exports.default = Icon;