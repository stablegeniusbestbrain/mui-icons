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
        _react2.default.createElement('path', { d: 'M215.2 88l93.5 146.1 4.9 7.5 9.1-.3 67.8-2h.4c3.2-.2 6.2-.2 9.2-.2 17.2 0 33.7 2.4 46.5 6.7 10.6 3.6 15.4 7.4 17.1 9.3-1.6 1.9-6.5 5.7-17.1 9.3-12.8 4.3-29.3 6.7-46.5 6.7-2.8 0-6.1 0-9.2-.2h-.4l-67.8-1.6-9-.2-4.9 7.9-93.6 147h-16.1L250 289l7.8-20.9-22.2-1-126.1-5.1-8.2-.3-5.1 6.7-40 51.6h-.6l23.2-58.3 2.4-6.1-2.4-5.8L55.6 192h.6l39.4 49.8 5 6.2 8.1-.3 126.8-4.2 22.4-.7-7.9-20.7L199.2 88H215m9-16h-48l59 155.7-126.8 4.3L64 176H32l32 80-32 80h32l44.9-57.7 126.1 5.2L176 440h48l98.2-154.5L390 287c3.3.2 6.6.1 10 .1 44.2 0 80-14.4 80-32.1s-35.8-32-80-32c-3.4 0-6.7.1-10 .2l-67.8 2.2L224 72z' })
      )
    )
  );
};

exports.default = Icon;