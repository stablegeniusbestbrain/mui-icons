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
      _react2.default.createElement('path', { d: 'M16.2 19.6l-2-3.5c1-.7 1.6-1.8 1.8-3.1h4c-.2 2.8-1.7 5.2-3.8 6.6zM13 7V3c4.3.3 7.7 3.7 8 8h-4c-.3-2.1-1.9-3.7-4-4zm-6 5.5c0 .6.1 1.3.4 1.8l-3.5 2c-.6-1.1-.9-2.4-.9-3.8C3 8 6.5 4.3 11 4v4c-2.2.3-4 2.2-4 4.5zm4.5 8.5c-3 0-5.6-1.5-7.1-3.8l3.5-2c.8 1.1 2.1 1.8 3.6 1.8.6 0 1.3-.1 1.8-.4l2 3.5c-1.1.6-2.4.9-3.8.9z' })
    )
  );
};

exports.default = Icon;