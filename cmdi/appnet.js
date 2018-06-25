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
      _react2.default.createElement('path', { d: 'M14.5 9.1c.6-1.4 1.7-4.8 1.9-5.4.1-.6.5-.7.8-.7h2.1c.3 0 .5.3.4.7-2.2 7.6-3.6 9.8-3.6 10.3 0 1.3 1.4 3.7 2.6 3.7.8 0 .6-1.1 1.5-1.1h1.6c.3 0 .5.2.5.6 0 .5-.5 3.8-3.7 3.8s-4.4-3.9-4.4-3.9c-.5.8-3 3.9-6 3.9-5.5 0-6.5-5.8-6.5-9.2C1.7 8.4 3.3 3 7.9 3s6.6 6.1 6.6 6.1zm-10 2.4c0 2-.1 6.1 3.5 6.2 2 .1 3.9-2.5 4.8-4.5-1.2-4.3-2.1-6.9-4.8-6.9-3.7.1-3.5 5.2-3.5 5.2z' })
    )
  );
};

exports.default = Icon;