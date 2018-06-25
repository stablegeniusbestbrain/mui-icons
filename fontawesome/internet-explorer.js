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
      _react2.default.createElement('path', { d: 'M24 12.5q0 .8-.1 1.4H8.5q0 2 1.5 3.3t3.4 1.3q1.3 0 2.5-.6t1.8-1.7h5.7q-.8 2.1-2.3 3.7t-3.6 2.6-4.3.8q-2.5 0-4.7-1.1-3.1 1.6-5.3 1.6-3.2 0-3.2-3.5 0-1.6.6-3.7.2-.8 1.5-3.1 2.6-4.8 6.3-8.1Q6 6.5 2.7 10.1q.8-3.6 3.8-6t6.7-2.3h.6Q17.2.2 19.6.2q.9 0 1.6.2t1.2.5.9 1.1.4 1.5q0 1.5-1.1 3.8Q24 9.8 24 12.5zM23.1 4q0-1.1-.7-1.8t-1.9-.6q-1.4 0-3.4.9 1.6.6 3 1.8t2.3 2.6q.7-1.8.7-2.9zM1.7 20.5q0 1.2.7 1.8t1.8.6q1.5 0 3.5-1.1-1.6-.9-2.8-2.4T3 16.1q-1.3 2.7-1.3 4.4zM8.5 11h9.7q-.1-1.9-1.5-3.2t-3.4-1.3q-1.9 0-3.3 1.3T8.5 11z' })
    )
  );
};

exports.default = Icon;