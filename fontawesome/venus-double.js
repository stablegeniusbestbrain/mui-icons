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
      _react2.default.createElement('path', { d: 'M24 7.1q.1 2.1-.7 3.9t-2.5 3-3.7 1.4v3.5h3q.2 0 .4.1t.1.3v.8q0 .2-.1.4t-.4.1h-3v3q0 .2-.1.3t-.3.1h-.8q-.2 0-.4-.1t-.1-.3v-3H8.6v3q0 .2-.1.3t-.4.1h-.8q-.2 0-.3-.1t-.1-.3v-3h-3q-.2 0-.4-.1t-.1-.4v-.8q0-.2.1-.3t.4-.1h3v-3.5q-2.1-.2-3.7-1.4T.7 11 0 7.1q.3-2.8 2.2-4.8T7 0q2.7-.2 5 1.3Q14.3-.2 17 0q2.8.3 4.8 2.3T24 7.1zm-12 4.8q1.7-1.7 1.7-4.2T12 3.5q-1.7 1.8-1.7 4.2t1.7 4.2zm-4.3 1.8q1.6 0 2.9-.7-2-2.3-2-5.3t2-5.2q-1.3-.8-2.9-.8-2.5 0-4.2 1.8T1.7 7.7 3.5 12t4.2 1.7zm7.7 5.2v-3.5q-1.8-.2-3.4-1.3-1.6 1.1-3.4 1.3v3.5h6.8zm.9-5.2q2.5 0 4.2-1.7t1.8-4.3-1.8-4.2-4.2-1.8q-1.6 0-2.9.8 2 2.2 2 5.2t-2 5.3q1.3.7 2.9.7z' })
    )
  );
};

exports.default = Icon;