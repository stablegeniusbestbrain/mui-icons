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
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M192 149.7l-34 34 256.1 256.1 33.9-34-256-256.1zm20.6 66l11.4-11.4 201.5 201.5-11.4 11.4-201.5-201.5zM184 64h16v40h-16zm0 204h16v40h-16zm96-92h40v16h-40zm-216 0h40v16H64zm36.112-70.41l11.313-11.313 28.284 28.284-11.314 11.314zM128.4 238.525l11.313 11.314-28.284 28.283-11.314-11.314zM272.577 94.274l11.314 11.314-28.283 28.284-11.314-11.314z' })
      )
    )
  );
};

exports.default = Icon;