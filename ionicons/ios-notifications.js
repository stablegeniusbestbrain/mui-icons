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
        _react2.default.createElement('path', { d: 'M207.8 400c0 26 21.6 47.9 48.1 47.9S304 426 304 400h-96.2zm166.1-170.8c0-99-49-132.8-94.9-140.5 0-.6.1-1.1.1-1.7 0-12.7-10.3-23-23-23s-23 10.3-23 23c0 .6 0 1.2.1 1.8-45.9 7.8-94.9 41.9-94.9 140.7C138.1 345 115.6 352 80 384h352c-35.4-32-58.1-39.1-58.1-154.8z' })
      )
    )
  );
};

exports.default = Icon;