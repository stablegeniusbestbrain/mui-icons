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
        _react2.default.createElement('path', { d: 'M207.8 400c0 27 21.6 48 48.1 48s48.1-21 48.1-48h-96.2zm-74-368L120 40.1 378.2 480l13.8-8.1zm240.1 197c0-99.1-49-132.9-94.9-140.6 0-.6.1-1.1.1-1.7 0-12.7-10.3-23-23-23s-23 10.3-23 23c0 .6 0 1.2.1 1.8-13.1 2.2-26.5 6.6-38.9 14L359 383.9h73c-35.4-32-58.1-39-58.1-154.9zm-235.8.2C138.1 345.1 115.6 352 80 384h222.9L159 138c-12.8 21.4-20.9 50.9-20.9 91.2z' })
      )
    )
  );
};

exports.default = Icon;