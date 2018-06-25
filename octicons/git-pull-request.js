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
      _react2.default.createElement('path', { d: 'M19.5 16.9V7.5c0-1.2-.5-2.2-1.4-3.1C17.2 3.5 16.2 3 15 3h-1.5V0L9 4.5 13.5 9V6H15c.4 0 .7.2 1 .5.4.3.5.6.5 1v9.4a3 3 0 0 0 1.5 5.6 3 3 0 0 0 1.5-5.6zM18 21.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM9 4.5c0-1.7-1.3-3-3-3a3 3 0 0 0-1.5 5.6v9.8A3 3 0 0 0 6 22.5a3 3 0 0 0 1.5-5.6V7.1C8.4 6.6 9 5.6 9 4.5zm-1.2 15c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8.8-1.8 1.8-1.8 1.8.8 1.8 1.8zM6 6.3c-1 0-1.8-.8-1.8-1.8S5 2.7 6 2.7s1.8.8 1.8 1.8S7 6.3 6 6.3z' })
    )
  );
};

exports.default = Icon;