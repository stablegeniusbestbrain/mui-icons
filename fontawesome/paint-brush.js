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
      _react2.default.createElement('path', { d: 'M21.6 0q1 0 1.7.6t.7 1.6q0 .8-.6 2-4.5 8.4-6.3 10.1-1.3 1.2-2.9 1.2-1.7 0-2.9-1.2t-1.2-3q0-1.7 1.2-2.8L19.9.7q.8-.7 1.7-.7zM9.5 13.8q.5 1.1 1.4 1.8t2 1v1q.1 2.8-1.7 4.6T6.5 24q-1.6 0-2.9-.6t-2.1-1.7-1.1-2.5-.4-2.9q.1 0 .5.4t.9.6.8.5.6.2q.5 0 .7-.5.4-.9.8-1.5t.9-1 1.2-.7 1.4-.3 1.7-.2z' })
    )
  );
};

exports.default = Icon;