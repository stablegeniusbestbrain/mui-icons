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
      _react2.default.createElement('path', { d: 'M11 2v20c-5.1-.5-9-4.8-9-10s3.9-9.5 9-10zm2 0v9h9c-.5-4.7-4.2-8.5-9-9zm0 11v9c4.8-.5 8.5-4.2 9-9h-9z' })
    )
  );
};

exports.default = Icon;