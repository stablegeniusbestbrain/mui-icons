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
      _react2.default.createElement('path', { d: 'M20 19.1v-8.7h-1.9q.3.9.3 1.8 0 1.7-.8 3.1t-2.4 2.2-3.2.9q-2.6 0-4.5-1.8t-1.9-4.4q0-.9.3-1.8H4v8.7q0 .3.2.6t.6.2h14.3q.4 0 .6-.2t.3-.6zM16.2 12q0-1.7-1.3-2.9T12 8q-1.7 0-2.9 1.1T7.9 12t1.2 2.8T12 16q1.7 0 2.9-1.2t1.3-2.8zM20 7.1V4.9q0-.3-.3-.6T19 4h-2.3q-.4 0-.7.3t-.2.6v2.2q0 .4.2.7t.7.3H19q.4 0 .7-.3t.3-.7zm2.3-2.7v15.2q0 1.1-.8 1.9t-1.9.8H4.4q-1.1 0-1.9-.8t-.8-1.9V4.4q0-1.1.8-1.9t1.9-.8h15.2q1.1 0 1.9.8t.8 1.9z' })
    )
  );
};

exports.default = Icon;