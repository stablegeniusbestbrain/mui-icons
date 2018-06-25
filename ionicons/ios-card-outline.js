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
        _react2.default.createElement('path', { d: 'M432 112H80c-17.6 0-32 14.4-32 32v224c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V144c0-17.6-14.4-32-32-32zM80 128h352c8.8 0 16 7.2 16 16v32H64v-32c0-8.8 7.2-16 16-16zm368 64v48H64v-48h384zm-16 192H80c-8.8 0-16-7.2-16-16V256h384v112c0 8.8-7.2 16-16 16z' }),
        _react2.default.createElement('path', { d: 'M96 320h32v16H96zm64 0h192v16H160z' })
      )
    )
  );
};

exports.default = Icon;