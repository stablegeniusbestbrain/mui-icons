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
      _react2.default.createElement('path', { d: 'M15.1 6.9c-.4-.3-.8-.5-1.3-.5-1 0-1.8.8-1.8 1.8v9c0 1 .8 1.8 1.8 1.8.5 0 .9-.2 1.3-.5 2.3-2.3 5.9-5.8 5.9-5.8s-3.6-3.5-5.9-5.8zm-9 0c-.4-.3-.8-.5-1.3-.5-1 0-1.8.8-1.8 1.8v9c0 1 .8 1.8 1.8 1.8.5 0 .9-.2 1.3-.5 2.3-2.3 5.9-5.8 5.9-5.8S8.4 9.2 6.1 6.9z' })
    )
  );
};

exports.default = Icon;