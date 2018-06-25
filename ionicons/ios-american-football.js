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
        _react2.default.createElement('path', { d: 'M378.605 133.395C305.902 60.69 189.38 47.998 116.85 48c-38.926 0-65.19 3.658-65.19 3.658s-29.985 215.227 81.735 326.947C206.1 451.31 322.617 464 395.148 464c38.927 0 65.193-3.658 65.193-3.658s29.987-215.226-81.735-326.947zm-310.48 61.333L194.706 68.146c6.123.86 12.164 1.825 18.112 2.9L71.024 212.837a476.047 476.047 0 0 1-2.9-18.11zM267.31 335.195L296 306.507l-22.627-22.628-28.688 28.687-11.313-11.312 28.688-28.688-22.627-22.627-28.688 28.688-11.313-11.312 28.688-28.688L205.492 216l-28.688 28.688-11.313-11.312 28.69-28.69-22.628-22.626-28.688 28.688-11.314-11.313 67.884-67.883 11.313 11.314-28.688 28.688 22.627 22.627 28.688-28.687 11.313 11.313L216 205.494l22.628 22.628 28.688-28.688 11.314 11.313-28.688 28.688 22.627 22.627 28.687-28.688 11.313 11.312-28.688 28.688 22.628 22.628 28.688-28.688 11.312 11.313-28.688 28.688 22.627 22.627 28.687-28.688 11.314 11.312-67.882 67.884-11.313-11.313 28.688-28.688-22.628-22.63-28.688 28.69-11.315-11.315zm49.95 108.695a470.245 470.245 0 0 1-18.105-2.905L440.98 299.16a474.432 474.432 0 0 1 2.9 18.11L317.26 443.89z' })
      )
    )
  );
};

exports.default = Icon;