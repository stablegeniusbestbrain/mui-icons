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
      _react2.default.createElement('path', { d: 'M19.7 17.3S18 15.4 18 11c0-2.6-1.7-4.8-4-5.7V5c0-1.1-.9-2-2-2s-2 .9-2 2v.3c-2.3.9-4 3.1-4 5.7 0 4.4-1.7 6.3-1.7 6.3-.3.3-.4.7-.2 1.1s.5.6.9.6h3.1c.5 1.7 2 3 3.9 3s3.4-1.3 3.9-3H19c.4 0 .8-.2.9-.6s.1-.8-.2-1.1zM12 7c2.2 0 4 1.8 4 4 0 .7 0 1.4.1 2H7.9c.1-.6.1-1.3.1-2 0-2.2 1.8-4 4-4zm0 13c-.7 0-1.4-.4-1.7-1h3.4c-.3.6-1 1-1.7 1zm-5.2-3c.4-.7.7-1.7 1-3h8.5c.2 1.3.5 2.3.9 3H6.8z' })
    )
  );
};

exports.default = Icon;