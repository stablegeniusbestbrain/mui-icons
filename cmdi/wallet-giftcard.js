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
      _react2.default.createElement('path', { d: 'M20 14H4V8h5.1L7 10.8 8.6 12 11 8.8l1-1.4 1 1.4 2.4 3.2 1.6-1.2L14.9 8H20m0 11H4v-2h16M9 4c.6 0 1 .5 1 1s-.4 1-1 1-1-.5-1-1 .4-1 1-1zm6 0c.6 0 1 .5 1 1s-.4 1-1 1-1-.5-1-1 .4-1 1-1zm5 2h-2.2c.1-.3.2-.7.2-1 0-1.7-1.3-3-3-3-1.1 0-2 .5-2.5 1.4L12 4l-.5-.7C11 2.5 10.1 2 9 2 7.3 2 6 3.3 6 5c0 .3.1.7.2 1H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;