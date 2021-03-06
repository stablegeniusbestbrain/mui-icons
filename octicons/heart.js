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
      _react2.default.createElement('path', { d: 'M19.8 4.5c-.8-.9-1.9-1.4-3.3-1.5-1.5 0-2.5.6-3.3 1.5-.8.9-1.2 1.4-1.2 1.5 0-.1-.4-.6-1.2-1.5C10 3.6 9 3 7.5 3c-1.4.1-2.5.6-3.3 1.5-.8.9-1.2 1.9-1.2 3 0 .8.1 2.3 1 4 .9 1.7 3.5 4.4 8 8 4.5-3.6 7.2-6.3 8-8 .9-1.7 1-3.2 1-4 0-1.1-.4-2.1-1.2-3z' })
    )
  );
};

exports.default = Icon;