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
      _react2.default.createElement('path', { d: 'M12 0q2.4 0 4.7 1t3.8 2.5T23 7.3t1 4.7-1 4.7-2.5 3.8-3.8 2.5-4.7 1-4.7-1-3.8-2.5T1 16.7 0 12t1-4.7 2.5-3.8T7.3 1 12 0zm0 1.7q-2.5 0-4.8 1.2l2.6 2.6q1.1-.4 2.2-.4t2.2.4l2.6-2.6Q14.5 1.7 12 1.7zM2.9 16.8l2.6-2.6q-.4-1.1-.4-2.2t.4-2.2L2.9 7.2Q1.7 9.5 1.7 12t1.2 4.8zm9.1 5.5q2.5 0 4.8-1.2l-2.6-2.6q-1.1.4-2.2.4t-2.2-.4l-2.6 2.6q2.3 1.2 4.8 1.2zm0-5.2q2.1 0 3.6-1.5t1.5-3.6-1.5-3.6T12 6.9 8.4 8.4 6.9 12t1.5 3.6 3.6 1.5zm6.5-2.9l2.6 2.6q1.2-2.3 1.2-4.8t-1.2-4.8l-2.6 2.6q.4 1.1.4 2.2t-.4 2.2z' })
    )
  );
};

exports.default = Icon;