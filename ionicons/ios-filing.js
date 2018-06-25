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
        _react2.default.createElement('path', { d: 'M256 288c-29.8 0-54.9-20.4-62-48H80v144h352V240H318c-7.1 27.6-32.2 48-62 48z' }),
        _react2.default.createElement('path', { d: 'M368.5 128h-.5v80h-16v-80H160v80h-16v-80h-.5L80 224h128c0 26.5 21.5 48 48 48s48-21.5 48-48h128l-63.5-96z' })
      )
    )
  );
};

exports.default = Icon;