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
      _react2.default.createElement('path', { d: 'M15.5 11.9c-.2-2.2-1.8-3.5-3.8-3.5h-.1c-2.2 0-3.5 1.8-3.5 3.8 0 2.3 1.5 3.7 3.5 3.7 2.3 0 3.8-1.6 3.9-3.5m-3.8-6c1.5 0 2.9.7 4 1.7 0-.5.3-.9.8-.9h.1c.8 0 .9.7.9 1v7.9c0 .5.5.7.9.4 1.2-1.3 2.8-6.7-.8-9.8-3.3-2.9-7.8-2.5-10.2-.8-2.5 1.7-4.1 5.6-2.6 9.2 1.7 4 6.6 5.1 9.6 4 1.4-.6 2.1 1.4.6 2-2.3 1-8.8.9-11.8-4.3-2-3.5-1.9-9.7 3.5-12.9 4.1-2.5 9.5-1.8 12.8 1.6 3.4 3.6 3.2 10.3-.1 12.9-1.5 1.2-3.8 0-3.7-1.7l-.1-.6c-1 1.1-2.4 1.7-3.9 1.7-3.1 0-5.7-2.7-5.7-5.7s2.6-5.7 5.7-5.7z' })
    )
  );
};

exports.default = Icon;