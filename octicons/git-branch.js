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
      _react2.default.createElement('path', { d: 'M19.5 7.5c0-1.7-1.3-3-3-3a3 3 0 0 0-1.5 5.6v.4c0 .8-.3 1.5-.9 2.1-.6.6-1.3.9-2.1.9-1.3.1-2.2.3-3 .7V7.1a3 3 0 0 0-1.5-5.6c-1.7 0-3 1.3-3 3A3 3 0 0 0 6 7.1v9.8c-.9.5-1.5 1.5-1.5 2.6 0 1.7 1.3 3 3 3s3-1.3 3-3c0-.8-.3-1.5-.8-2 .1-.1.7-.7.9-.7.4-.2.8-.3 1.4-.3 1.6-.1 2.9-.7 4.1-1.9s1.8-2.9 1.9-4.5c.9-.5 1.5-1.5 1.5-2.6zm-12-4.8c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8.8-1.8 1.8-1.8zm0 18.6c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm9-12c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z' })
    )
  );
};

exports.default = Icon;