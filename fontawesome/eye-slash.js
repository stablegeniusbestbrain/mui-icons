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
      _react2.default.createElement('path', { d: 'M7.4 17.9L8.5 16q-1.2-.9-1.8-2.1T6 11.1q0-1.6.8-3-3 1.6-5.1 4.8 2.3 3.4 5.7 5zm5.2-10.2q0-.3-.1-.4t-.5-.2q-1.7 0-2.9 1.2t-1.2 2.8q0 .3.2.5t.5.2.4-.2.2-.5q0-1.1.8-1.9t2-.8q.3 0 .5-.2t.1-.5zm4.9-2.5v.1q-1.4 2.5-4.2 7.6T9 20.5l-.6 1.1q-.2.3-.4.3t-1.8-1q-.2-.1-.2-.4 0-.1.6-1.1-1.9-.9-3.5-2.3T.3 13.8q-.3-.4-.3-.9t.3-1q2-3.1 5.1-4.9T12 5.1q1.2 0 2.4.3l.7-1.3q.2-.2.4-.2h.3q.2 0 .4.2t.4.3.4.2.3.2q.2.1.2.4zm.5 5.9q0 1.9-1.1 3.4t-2.8 2.2l3.8-6.7q.1.6.1 1.1zm6 1.8q0 .4-.3.9-.5.8-1.4 1.9-2 2.3-4.7 3.6T12 20.6l1-1.8q2.8-.2 5.2-1.8t4.1-4.1q-1.6-2.4-3.8-4l.9-1.5q1.2.9 2.4 2.1t1.9 2.4q.3.5.3 1z' })
    )
  );
};

exports.default = Icon;