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
      _react2.default.createElement('path', { d: 'M22.5 6c-.8.4-1.6.6-2.5.7.9-.5 1.6-1.4 1.9-2.4-.8.5-1.8.9-2.7 1.1C18.4 4.5 17.3 4 16 4c-2.3 0-4.3 1.9-4.3 4.3 0 .3.1.7.1 1C8.3 9.1 5.1 7.4 3 4.8c-.4.6-.6 1.4-.6 2.1 0 1.5.8 2.8 1.9 3.6-.7 0-1.3-.2-1.9-.5 0 2.1 1.5 3.8 3.4 4.2-.3.1-.7.2-1.1.2-.3 0-.6 0-.8-.1.5 1.7 2.1 3 4 3-1.5 1.1-3.3 1.8-5.3 1.8H1.5C3.4 20.3 5.7 21 8.1 21c7.9 0 12.2-6.5 12.2-12.2v-.6c.9-.6 1.6-1.3 2.2-2.2z' })
    )
  );
};

exports.default = Icon;