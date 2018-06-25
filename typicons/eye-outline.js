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
      _react2.default.createElement('path', { d: 'M12 9c1.2 0 2.4.4 3.3 1 1.3.9 2.4 2.1 3.2 3-.8.9-1.9 2.1-3.2 3-.9.6-2.1 1-3.3 1s-2.4-.4-3.3-1c-1.3-.9-2.4-2.1-3.2-3 .8-.9 1.9-2.1 3.2-3 .9-.6 2.1-1 3.3-1m0-2c-1.7 0-3.2.5-4.5 1.4C4.9 10.2 3 13 3 13s1.9 2.8 4.5 4.6c1.3.9 2.8 1.4 4.5 1.4s3.2-.5 4.4-1.4C19.1 15.8 21 13 21 13s-1.9-2.8-4.6-4.6C15.2 7.5 13.7 7 12 7zm0 5c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm0 4c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;