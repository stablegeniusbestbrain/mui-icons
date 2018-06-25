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
      _react2.default.createElement('path', { d: 'M12 14.6q.9 0 1.7-.2v8.7q0 .4-.2.6t-.6.3h-1.8q-.3 0-.6-.3t-.2-.6v-8.7q.8.2 1.7.2zM12 0q2.8 0 4.8 2t2.1 4.9-2.1 4.8-4.8 2-4.8-2-2.1-4.8T7.2 2 12 0zm0 3q.2 0 .3-.1t.1-.3-.1-.3-.3-.2q-2 0-3.3 1.4T7.3 6.9q0 .1.1.3t.3.1.3-.1.1-.3q0-1.6 1.2-2.8T12 3z' })
    )
  );
};

exports.default = Icon;