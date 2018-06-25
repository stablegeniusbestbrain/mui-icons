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
      _react2.default.createElement('path', { d: 'M9 11c.6 0 1 .9 1 2s-.4 2-1 2-1-.9-1-2 .4-2 1-2zm6 0c.6 0 1 .9 1 2s-.4 2-1 2-1-.9-1-2 .4-2 1-2zM9.8 1.8S16 4 15 8c0 0 4 0 2.3 3.5 0 0 4.2.4 3 3.8-1.3 1.2-1.6 1.6-2.8 2.5l2.8-1.7c1 .6 4.1 2.4.7 4.9-4 3-10 .3-12 .3S5 22 4 22s-2-1-2-3 2-3 3-3c0 0-3-3 2-5 0 0-2-3 2-4 0 0-1-1 0-2s.8-2.2.8-3.2zM8 17c1.3 1.2 2.7 2.3 4 2.3 1.3 0 2.7-1.1 4-2.3H8zm1-7c-1.1 0-2 1.3-2 3s.9 3 2 3 2-1.3 2-3-.9-3-2-3zm6 0c-1.1 0-2 1.3-2 3s.9 3 2 3 2-1.3 2-3-.9-3-2-3z' })
    )
  );
};

exports.default = Icon;