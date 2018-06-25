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
      _react2.default.createElement('path', { d: 'M18.4 18.4V8.5q0-.2-.2-.4t-.5-.2h-1.2q-.3 0-.5.2t-.2.4v9.9q0 .2.2.4t.5.2h1.2q.3 0 .5-.2t.2-.4zm-3.8 0v-7.1q0-.3-.2-.5t-.5-.2h-1.4q-.2 0-.4.2t-.2.5v7.1q0 .2.2.4t.4.2h1.4q.3 0 .5-.2t.2-.4zm-3.9 0v-5.8q0-.3-.2-.5t-.5-.2H8.6q-.2 0-.4.2t-.2.5v5.8q0 .2.2.4t.4.2H10q.3 0 .5-.2t.2-.4zm-4 0v-4.9q0-.3-.2-.5t-.4-.2H4.7q-.2 0-.4.2t-.2.5v4.9q0 .2.2.4t.4.2h1.4q.2 0 .4-.2t.2-.4zm19-2q0 2.2-1.6 3.8t-3.8 1.6H3.7q-2.3 0-3.8-1.6t-1.6-3.8q0-1.5.8-2.9t2.3-2q-.2-.4-.2-.9 0-1.5 1.1-2.6t2.6-1.1q1.4 0 2.4.9.6-2.5 2.6-4t4.6-1.6q1.9 0 3.6 1t2.7 2.7 1 3.6q0 .9-.2 1.7 1.8.4 3 1.9t1.1 3.3z' })
    )
  );
};

exports.default = Icon;