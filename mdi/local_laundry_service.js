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
      _react2.default.createElement('path', { d: 'M9.2 16.8c1.5 1.6 4.1 1.6 5.6 0 1.6-1.5 1.6-4.1 0-5.6l-5.6 5.6zM18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 2c.6 0 1 .5 1 1s-.4 1-1 1-1-.5-1-1 .4-1 1-1zM7 4c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1zm5 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z' })
    )
  );
};

exports.default = Icon;