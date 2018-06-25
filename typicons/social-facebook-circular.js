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
      _react2.default.createElement('path', { d: 'M18.4 5.6C16.6 3.9 14.5 3 12 3c-2.5 0-4.6.9-6.4 2.6C3.9 7.4 3 9.5 3 12c0 2.5.9 4.6 2.6 6.4C7.4 20.1 9.5 21 12 21c2.5 0 4.6-.9 6.4-2.6 1.7-1.8 2.6-3.9 2.6-6.4 0-2.5-.9-4.6-2.6-6.4zm-1.5 11.3c-1.1 1.2-2.4 1.8-3.9 2V14h2v-2h-2v-1.4c0-.3.3-.6.6-.6H15V8h-1.4c-.7 0-1.4.3-1.9.8-.4.6-.7 1.2-.7 2V12H9v2h2v4.9c-1.5-.2-2.8-.8-4-2-1.3-1.3-2-3-2-4.9 0-2 .7-3.6 2-5 1.4-1.3 3-2 5-2 1.9 0 3.6.7 4.9 2 1.4 1.4 2.1 3 2.1 5 0 1.9-.7 3.6-2.1 4.9z' })
    )
  );
};

exports.default = Icon;