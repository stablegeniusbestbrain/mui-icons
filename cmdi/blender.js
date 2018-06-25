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
      _react2.default.createElement('path', { d: 'M8 3c0 .3.2.7.5.9L12 6H2.5C1.7 6 1 6.7 1 7.5S1.7 9 2.5 9h5.9L2 13c-.8.5-1 1.2-1 2 0 1 .8 2 2 2 .7 0 1.4-.5 2-1l2-1.6c.2 4.2 3.7 7.6 8 7.6 4.4 0 8-3.6 8-8 0-2.9-1.6-5.5-3.9-6.9H19l-.1-.1C15.8 4.9 13 3.7 9.5 2.1 9.3 2 9.2 2 9 2c-.6 0-1 .5-1 1zm7 6c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm0 1.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z' })
    )
  );
};

exports.default = Icon;