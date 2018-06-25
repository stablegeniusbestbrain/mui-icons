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
      _react2.default.createElement('path', { d: 'M19 8.5q.2-2.8-2.1-2.9-3.1-.1-4.2 3.5.6-.3 1.1-.3 1.1 0 1 1.3-.1.8-1 2.2t-1.4 1.5q-.6 0-1.1-2.3-.2-.7-.6-3.4-.4-2.5-2.2-2.3-.8.1-2.2 1.3l-1 1-1.1.9.7.9q1-.7 1.1-.7.8 0 1.5 2.4.2.8.6 2.2t.6 2.2q.9 2.4 2.2 2.4 2.1 0 5.1-3.9 2.9-3.8 3-6zm3.3-2.9v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8q1.6 0 2.8 1.1t1.1 2.8z' })
    )
  );
};

exports.default = Icon;