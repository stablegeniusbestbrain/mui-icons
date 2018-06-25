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
      _react2.default.createElement('path', { d: 'M23 4.5h-6.8v1.7H23V4.5zm-3.3 5.7q-1.2 0-2 .7t-.8 2h5.4q-.2-2.7-2.6-2.7zm.2 7.9q.8 0 1.6-.4t1-1.2h3q-1.4 4.1-5.7 4.1-2.9 0-4.6-1.8t-1.7-4.6q0-2.8 1.8-4.6t4.5-1.9q1.8 0 3.2.9t2 2.4.7 3.3v.7h-8.8q0 1.5.7 2.3t2.3.8zM2 17.4h4q2.7 0 2.7-2.2 0-2.4-2.7-2.4H2v4.6zm0-7.2h3.8q1 0 1.6-.5T8 8.2q0-1.9-2.5-1.9H2v3.9zm-3.7-6.8h7.9q1.2 0 2.1.2t1.7.6 1.2 1.3.4 2.1q0 2.4-2.3 3.5 1.6.4 2.3 1.5t.8 2.8q0 1-.3 1.8t-.9 1.4-1.3.9-1.6.6-1.8.2h-8.2V3.4z' })
    )
  );
};

exports.default = Icon;