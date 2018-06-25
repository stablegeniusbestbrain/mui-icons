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
        _react2.default.createElement('path', { d: 'M224 72h-48l59 155.7-126.8 4.3L64 176H32l32 80-32 80h32l44.9-57.7 126.1 5.2L176 440h48l98.2-154.5L390 287c3.3.2 6.6.1 10 .1 44.2 0 80-14.4 80-32.1s-35.8-32-80-32c-3.4 0-6.7.1-10 .2l-67.8 2.2L224 72z' })
      )
    )
  );
};

exports.default = Icon;