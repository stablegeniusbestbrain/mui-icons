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
      _react2.default.createElement('path', { d: 'M15.4 20.1q-.5-3.2-1.8-6.7h-.1l-.6.3q-.4.2-1.3.6t-1.9 1.1T8 16.9t-1.4 2l-.2-.1q2.5 2 5.6 2 1.8 0 3.4-.7zM13 12q-.3-.7-.8-1.5-4.1 1.2-9 1.2v.3q0 1.7.6 3.2t1.7 2.7q.6-1.2 1.6-2.3T9 14t1.8-1.1 1.3-.7l.5-.1q.1 0 .2-.1t.2 0zm-1.5-2.9q-1.6-2.8-3.2-5-1.9.8-3.2 2.4t-1.7 3.7q4 0 8.1-1.1zm9.2 4.3q-2.8-.8-5.5-.4 1.2 3.2 1.7 6.3 1.5-1 2.5-2.6t1.3-3.3zM9.9 3.5zm7.9 1.9Q15.3 3.2 12 3.2q-1 0-2.1.3 1.8 2.2 3.3 5.1l1.8-.8q.9-.4 1.3-.8t.8-.8.5-.6zm3 6.5q-.1-3.1-2-5.5-.1.2-.3.4t-.6.6-.9.8-1.4.8-1.7.9q.3.7.6 1.3 0 .1.1.2t.1.2q.4 0 1-.1t.9 0 1 0 .8.1.8.1.6 0 .5.1.4.1zm1.5.1q0 2.8-1.4 5.2t-3.7 3.7-5.2 1.4-5.2-1.4-3.7-3.7T1.7 12t1.4-5.2 3.7-3.7T12 1.7t5.2 1.4 3.7 3.7 1.4 5.2z' })
    )
  );
};

exports.default = Icon;