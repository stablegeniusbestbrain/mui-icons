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
      _react2.default.createElement('path', { d: 'M12 20l.8-3c-3.3-.2-6.2-1.6-7.1-3.4 0 .5-.2.9-.4 1.2C4.7 16 3.3 16 2 16c1.1 0 1.5-1.6 1.5-3.5S3.1 9 2 9c1.3 0 2.7 0 3.3 1.2.2.3.4.7.4 1.2.7-1.4 2.6-2.6 5-3.1L9 5c2 0 4 0 5.3.7 1.2.5 1.8 1.6 2.4 2.7 2.9.7 5.3 2.3 5.3 4.1 0 1.9-2.5 3.5-5.5 4.2-.8 1.1-1.6 2.1-2.3 2.6-.9.7-1.5.7-2.2.7zm5-9c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;