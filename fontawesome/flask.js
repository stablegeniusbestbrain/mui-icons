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
      _react2.default.createElement('path', { d: 'M21.3 19.4q.8 1.2.3 2t-1.9.9H4.3q-1.4 0-1.9-.9t.3-2L9.4 8.8V3.4h-.8q-.4 0-.6-.2t-.3-.6T8 2t.6-.3h6.8q.4 0 .6.3t.3.6-.3.6-.6.2h-.8v5.4zM10.9 9.7l-3.7 5.7h9.6l-3.7-5.7-.2-.4V3.4h-1.8v5.9z' })
    )
  );
};

exports.default = Icon;