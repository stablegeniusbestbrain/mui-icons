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
      _react2.default.createElement('path', { d: 'M18.3 8.7q0-1.1-.7-1.9t-1.8-.7-1.9.7-.7 1.9q0 1 .7 1.8t1.9.8 1.8-.8.7-1.8zm-8.1 7.8q0 1.2-.8 1.9t-1.9.8q-.7 0-1.4-.4t-.9-1q.7.2 1.3.5.8.3 1.6 0t1.1-1.2q.4-.8 0-1.6t-1.1-1.1L7 14q.3-.1.5-.1 1.1 0 1.9.8t.8 1.8zM22.3 5.6v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8v-2l2.3.9q.3 1.2 1.3 2t2.2.8q1.4 0 2.5-.9t1.1-2.3l4.6-3.4q2 0 3.5-1.4t1.4-3.4q0-2-1.4-3.4t-3.5-1.4q-1.9 0-3.4 1.4t-1.4 3.3l-3 4.4q-.1-.1-.4-.1-1 0-1.8.5l-4-1.6V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8q1.6 0 2.8 1.1t1.1 2.8zM19 8.7q0 1.3-1 2.3t-2.3.9-2.2-.9-1-2.3 1-2.3 2.2-.9q1.4 0 2.3.9t1 2.3z' })
    )
  );
};

exports.default = Icon;