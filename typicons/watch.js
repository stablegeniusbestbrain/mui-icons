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
      _react2.default.createElement('path', { d: 'M12 13h2c.6 0 1-.4 1-1s-.4-1-1-1h-1v-1c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1zm5-5.9V5c0-1.7-1.3-3-3-3h-4C8.3 2 7 3.3 7 5v2.1c-1.2 1.3-2 3-2 4.9s.8 3.6 2 4.9V19c0 1.7 1.3 3 3 3h4c1.7 0 3-1.3 3-3v-2.1c1.2-1.3 2-3 2-4.9s-.8-3.6-2-4.9zM9 5c0-.5.4-1 1-1h4c.6 0 1 .5 1 1v1.8c-.9-.5-1.9-.8-3-.8s-2.1.3-3 .8V5zm6 14c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-1.8c.9.5 1.9.8 3 .8s2.1-.3 3-.8V19zm-3-2c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z' })
    )
  );
};

exports.default = Icon;