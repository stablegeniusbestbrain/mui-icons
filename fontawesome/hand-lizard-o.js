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
      _react2.default.createElement('path', { d: 'M13.7 0q.8 0 1.6.4t1.2 1l7.6 10.5q1.6 2.1 1.6 4.8v4.7q0 1.1-.7 1.9t-1.9.7H18q-1.1 0-1.8-.7t-.8-1.9v-2.3l-3.8-2H4.3q-1.1 0-1.8-.7t-.8-1.8v-.5q0-1.6 1.1-2.7t2.8-1.1h5.6l.6-1.7H2.6q-1.4 0-2.4-.9t-1-2.3q-.9-1-.9-2.4v-.4q0-1.1.7-1.8T.9 0h12.8zM24 21.4v-4.7q0-2.1-1.2-3.8L15.1 2.4q-.5-.7-1.4-.7H.9q-.4 0-.6.3t-.3.6v.6q0 .2.1.6t.4.6q.1-.5.5-.7t.7-.3h11.2v.5H1.7q-.3 0-.6.2t-.2.6v.8q.1.6.6 1t1.1.4h9.8q.5 0 .9.3t.3.9v.4l-.9 2.6q-.1.4-.4.7t-.8.2H5.6q-.9 0-1.5.6t-.7 1.5v.5q0 .3.3.6t.6.2h7.5q.2 0 .4.1l4.2 2.1q.4.2.5.5t.2.7v2.6q0 .4.3.6t.6.3h5.1q.4 0 .6-.3t.3-.6z' })
    )
  );
};

exports.default = Icon;