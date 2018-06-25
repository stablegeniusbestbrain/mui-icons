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
      _react2.default.createElement('path', { d: 'M23 13.3h-1.8q.2-.5.9-2.4v-.2q.1-.1.1-.3t.2-.4l.1.8zm-19.3-.9l-.8-4q-.1-.7-1-.7h-3.6v.2q4.2 1 5.4 4.5zm2.4-4.7l-2.2 5.9-.2-1.2q-.4-.9-1.2-1.7T.8 9.5l1.8 6.8h2.3l3.5-8.6H6.1zm1.8 8.6h2.3l1.4-8.6H9.3zm10.3-8.4q-.9-.3-2-.3-1.6 0-2.7.8t-1 2q0 1.4 1.9 2.3.7.3.9.6t.3.5q0 .4-.4.6t-.9.2q-1.2 0-2.1-.4l-.3-.2-.3 2q.9.4 2.4.4 1.8 0 2.8-.8t1.1-2.1q0-1.4-1.9-2.3l-.9-.6q-.3-.2-.3-.5t.3-.5 1-.2q.9-.1 1.6.3l.2.1zm5.7-.2h-1.7q-.9 0-1.2.7l-3.3 7.9h2.4l.4-1.3h2.9q.1.3.3 1.3h2zm3.5-4.3v17.2q0 .7-.5 1.2t-1.2.5H-1.7q-.7 0-1.2-.5t-.5-1.2V3.4q0-.7.5-1.2t1.2-.5h27.4q.7 0 1.2.5t.5 1.2z' })
    )
  );
};

exports.default = Icon;