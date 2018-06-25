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
      _react2.default.createElement('path', { d: 'M15 13h1.5v2.8l2.4 1.4-.7 1.3-3.2-1.8V13zm4-5H5v11h4.7c-.5-.9-.7-1.9-.7-3 0-3.9 3.1-7 7-7 1.1 0 2.1.2 3 .7V8zM5 21c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h1V1h2v2h8V1h2v2h1c1.1 0 2 .9 2 2v6.1c1.2 1.3 2 3 2 4.9 0 3.9-3.1 7-7 7-1.9 0-3.6-.8-4.9-2H5zm11-9.8c-2.7 0-4.8 2.1-4.8 4.8 0 2.7 2.1 4.8 4.8 4.8 2.7 0 4.8-2.1 4.8-4.8s-2.1-4.8-4.8-4.8z' })
    )
  );
};

exports.default = Icon;