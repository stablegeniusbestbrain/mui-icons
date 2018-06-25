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
      _react2.default.createElement('path', { d: 'M15.8 12.2q0 2.8-1.1 5t-3.4 3.4-4.9 1.2q-2 0-3.8-.8t-3.2-2-2.1-3.2-.7-3.8.7-3.8T-.6 5t3.2-2 3.8-.8q3.8 0 6.6 2.6l-2.7 2.5Q8.7 5.8 6.4 5.8q-1.7 0-3.1.8T1.1 8.9.3 12t.8 3.1 2.2 2.3 3.1.8q1.1 0 2-.3t1.6-.8 1-1 .7-1.1.3-1H6.4v-3.4h9.3q.1.8.1 1.6zm11.6-1.6v2.8h-2.8v2.8h-2.8v-2.8H19v-2.8h2.8V7.8h2.8v2.8h2.8z' })
    )
  );
};

exports.default = Icon;