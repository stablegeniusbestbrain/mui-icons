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
      _react2.default.createElement('path', { d: 'M7.7 18q0 .3-.2.6t-.6.3-.6-.3T6 18t.3-.6.6-.3.6.3.2.6zm13.7.8q0 1.6-.9 2.6t-2.6.9H6.1q-1.6 0-2.6-.9t-.9-2.6v-1.7q0-.8.4-1.9t.6-1.8 1.1-1.3 1.6-.8q-.3.6-.3 1.6v2.7q-.8.2-1.2.9T4.3 18q0 1.1.7 1.8t1.9.8 1.8-.8.7-1.8q0-.8-.4-1.5t-1.3-.9v-2.7q0-.9.3-1.3Q9.8 13 12 13t4-1.4q.3.4.3 1.3v.8q-1.4 0-2.4 1t-1 2.4v1.2q-.5.4-.5 1 0 .5.4.9t.9.4.9-.4.4-.9q0-.6-.4-1v-1.2q0-.7.5-1.2t1.2-.5 1.2.5.5 1.2v1.2q-.4.4-.4 1 0 .5.3.9t1 .4.9-.4.3-.9q0-.6-.4-1v-1.2q0-.9-.4-1.7T18 14.2v-.6-.6-.6q0-.4-.1-.6t-.2-.6q.9.3 1.6.9t1.1 1.3.6 1.8.4 1.9 0 1.7zM17.1 6.9q0 2.1-1.5 3.6T12 12t-3.6-1.5-1.5-3.6 1.5-3.7T12 1.7t3.6 1.5 1.5 3.7z' })
    )
  );
};

exports.default = Icon;