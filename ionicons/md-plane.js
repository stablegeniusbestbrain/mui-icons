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
        _react2.default.createElement('path', { d: 'M448 336v-40L288 192V79.2c0-17.683-14.82-31.2-32-31.2s-32 13.518-32 31.2V192L64 296v40l160-48v113.602l-48 31.2V464l80-16 80 16v-31.2l-48-31.198V288l160 48z' })
      )
    )
  );
};

exports.default = Icon;