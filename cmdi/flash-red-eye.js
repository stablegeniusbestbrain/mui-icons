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
      _react2.default.createElement('path', { d: 'M16 5c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm0-3c-2.7 0-5.1 1.7-6 4 .9 2.3 3.3 4 6 4s5.1-1.7 6-4c-.9-2.3-3.3-4-6-4zm0 1.5c1.4 0 2.5 1.1 2.5 2.5S17.4 8.5 16 8.5 13.5 7.4 13.5 6s1.1-2.5 2.5-2.5zM3 2v12h3v9l7-12H9l1.1-2.5C9.4 7.8 8.9 6.9 8.5 6c.7-1.7 2-3.1 3.6-4H3z' })
    )
  );
};

exports.default = Icon;