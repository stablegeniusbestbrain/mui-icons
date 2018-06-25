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
      _react2.default.createElement('path', { d: 'M6.8 15.4H2.6q-.6 0-.8-.4t.1-.9l2.5-3.4q-.9-.4-1.8-.4-1.8 0-3.1 1.2t-1.2 3.1 1.2 3 3.1 1.3q1.5 0 2.7-1t1.5-2.5zm-2.5-1.7h2.5q-.3-1.1-1-2zm6.4 0l3.9-5.1H8.1l-1.3 1.7q1.4 1.4 1.7 3.4h2.2zm15 .9q0-1.8-1.2-3.1t-3.1-1.2q-.8 0-1.6.3l2.3 3.5q.2.3.2.6t-.4.6q-.2.1-.5.1-.4 0-.7-.4l-2.3-3.4q-1.3 1.2-1.3 3 0 1.7 1.3 3t3 1.3 3.1-1.3 1.2-3zm1.7 0q0 2.4-1.7 4.2t-4.3 1.8-4.2-1.8-1.8-4.2q0-1.3.6-2.5t1.4-2l-.8-1.3-4.8 6.3q-.2.3-.7.3H8.5q-.3 2.2-2 3.7t-3.9 1.5q-2.5 0-4.3-1.8t-1.7-4.2 1.7-4.3 4.3-1.7q1.5 0 2.9.7l1.8-2.4h-3q-.4 0-.6-.3T3.4 6t.3-.6.6-.3h5.1v1.8h5.9l-1.2-1.8h-3q-.3 0-.6-.2t-.2-.6.2-.6.6-.3h3.5q.4 0 .7.4l3.6 5.4q1.2-.6 2.5-.6 2.5 0 4.3 1.7t1.7 4.3z' })
    )
  );
};

exports.default = Icon;